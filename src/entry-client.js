// 客户端入口配置
import Vue from 'vue'
import { createApp } from './app'

const { app } = createApp(); // 工厂模式，创建每一个app

app.$mount('#app');