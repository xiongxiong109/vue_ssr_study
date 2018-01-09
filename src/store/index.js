// store
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// 针对server端的store, 也需要提供工厂方法来保持单例
export function createStore() {

  let state = {
    title: 'hello'
  };

  return new Vuex.Store({
    state
  });
  
}