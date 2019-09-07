// https://github.com/cretueusebiu/laravel-vue-spa

import axios from 'axios'
import Cookies from 'js-cookie'
import * as types from '../mutation-types'

// state
export const state = {
  user: null,
  token: Cookies.get('token')
}

// getters
export const getters = {
  user: state => state.user,
  token: state => state.token,
  check: state => state.user !== null
}

// mutations
export const mutations = {
  [types.SAVE_TOKEN] (state, { token, remember }) {
    state.token = token
    Cookies.set('token', token, { expires: remember ? 365 : null })
  },

  [types.FETCH_USER_SUCCESS] (state, { user }) {
    state.user = user
  },

  [types.FETCH_USER_FAILURE] (state) {
    state.token = null
    Cookies.remove('token')
  },

  [types.LOGOUT] (state) {
    state.user = null
    state.token = null

    Cookies.remove('token')
  },

  [types.UPDATE_USER] (state, { user }) {
    state.user = user
  }
}

// actions
export const actions = {
  saveToken ({ commit, dispatch }, payload) {
    commit(types.SAVE_TOKEN, payload)
  },

  register ({ dispatch, commit }, { form }) {
    return new Promise(async (resolve, reject) => {
      try {
        await form.post('/api/auth/register')

        await dispatch('login', { form: form })
        resolve()
      } catch (e) {
        reject(e)
      }
    })
  },

  login ({ dispatch, commit }, { form }) {
    return new Promise(async (resolve, reject) => {
      try {
        const { data } = await form.post('/api/auth/login')

        dispatch('saveToken', {
          token: data.token,
          remember: this.remember
        })

        await dispatch('fetchUser')
        resolve()
      } catch (e) {
        reject(e)
      }
    })
  },

  async fetchUser ({ commit }) {
    return new Promise(async (resolve, reject) => {
      try {
        const { data } = await axios.get('/api/auth/me')

        commit(types.FETCH_USER_SUCCESS, { user: data.data })
        resolve()
      } catch (e) {
        commit(types.FETCH_USER_FAILURE)
        reject(e)
      }
    })
  },

  updateUser ({ commit }, payload) {
    commit(types.UPDATE_USER, payload)
  },

  async logout ({ commit }) {
    try {
      // await axios.post('/api/logout')
    } catch (e) { }

    commit(types.LOGOUT)
  },

  async fetchOauthUrl (ctx, { provider }) {
    const { data } = await axios.post(`/api/oauth/${provider}`)

    return data.url
  }
}
