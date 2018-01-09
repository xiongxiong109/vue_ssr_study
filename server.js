const fs = require('fs')
const path = require('path')
const express = require('express')
const compression = require('compression')
const { createBundleRenderer } = require('vue-server-renderer')
const resolve = file => path.resolve(__dirname, file) // 简单封装一个获取文件目录路径的方法

const isProd = process.env.NODE_ENV === 'production' // 判断是否是生产环境

const resPath = '/dist'; // 静态资源目录

// app实例
const app = express()
// 页面模板
const template = fs.readFileSync(resolve('./src/index.template.html'), 'utf-8')

function createRenderer(bundle, options) {

	options.clientManifest.publicPath = '/dist/';

	return createBundleRenderer(bundle, Object.assign({}, options, {
		template,
		// this is only needed when vue-server-renderer is npm-linked
		basedir: resolve('./' + resPath),
		// recommended for performance
		runInNewContext: false
	}));

}

let renderer
let readyPromise

if (isProd) { // 生产环境下, 走打包编译后的文件
	const serverBundle = require(path.resolve(__dirname, 'public', 'dist', 'vue-ssr-server-bundle.json'));
	const clientManifest = require(path.resolve(__dirname, 'public', 'dist', 'vue-ssr-client-manifest.json'));
	renderer = createRenderer(serverBundle, {
		clientManifest
	});
} else { // 开发环境下, 走webpack打包与hot reload
	readyPromise = require('./build/setup-dev-server')(app, (bundle, options) => {
	  renderer = createRenderer(bundle, options)
	})
}

// 设置静态资源目录方法
const serve = (path, cache) => express.static(resolve(path), {
  maxAge: cache && isProd ? 1000 * 60 * 60 * 24 * 30 : 0
})

app.use(express.static(path.resolve(__dirname, 'public'))); // 设置静态资源目录

app.use(compression({ threshold: 0 }))
app.use(('/' + resPath), serve(('./' + resPath), true))

const render = (req, res) => {

	const s = Date.now()
	res.setHeader("Content-Type", "text/html")

	const handleError = err => {
	  if (err.url) {
	    res.redirect(err.url)
	  } else if(err.code === 404) {
	    res.status(404).send('404 | Page Not Found!')
	  } else {
	    // Render Error Page or Redirect
	    res.status(500).send('500 | Internal Server Error!')
	    console.error(`error during render : ${req.url}`)
	    console.error(err.stack)
	  }
	}

	// 上下文
	const context = {
	  title: 'hello vue ssr',
	  url: req.url,
	  request: req,
	  response: res
	}

	renderer.renderToString(context, (err, html) => {
	  if (err) {
	    return handleError(err)
	  }
	  res.send(html)
	  // if (!isProd) {
	    console.log(`whole request: ${Date.now() - s}ms`)
	  // }
	})

}

app.get('*', isProd ? render : (req, res) => {
  readyPromise.then(() => render(req, res));
})

// const port = appConfig.port || process.env.PORT || 8080
const port = process.env.PORT || 8080
app.listen(port, () => {
  console.log(`server started at localhost:${port}`)
})