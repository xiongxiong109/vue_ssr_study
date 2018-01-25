import { CHANGE_TITLE } from './actions'

const mutations = {
  [CHANGE_TITLE](state, title = '') {
    state.title = title;
  }
}

export default mutations