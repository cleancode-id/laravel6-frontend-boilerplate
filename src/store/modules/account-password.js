// import * as types from '@/store/mutation-types'

// state
export const state = {
  //
}

// getters
export const getters = {
  //
}

// mutations
export const mutations = {
  //
}

// actions
export const actions = {
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
