// import * as types from '@/store/mutation-types'

// state
const state = {
  //
}

// getters
const getters = {
  //
}

// mutations
const mutations = {
  //
}

// actions
const actions = {
  update ({ dispatch, commit }, { form }) {
    return new Promise(async (resolve, reject) => {
      try {
        await form.patch('/api/account/password')
        resolve()
      } catch (e) {
        reject(e)
      }
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
