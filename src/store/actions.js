export const CHANGE_TITLE = 'COM/CHANGE_TITLE'

const actions = {
  [CHANGE_TITLE](state, title) {
    state.commit(CHANGE_TITLE, title);
  }
}

export default actions