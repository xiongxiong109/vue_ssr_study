// store
import Vue from 'vue'
import Vuex from 'vuex'

import state from './state'
import actions from './actions'
import mutations from './mutations'

Vue.use(Vuex)

// 针对server端的store, 也需要提供工厂方法来保持单例
export function createStore() {

  return new Vuex.Store({
    state,
    actions,
    mutations
  });
  
}