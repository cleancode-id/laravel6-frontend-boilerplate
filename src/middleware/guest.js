// https://github.com/cretueusebiu/laravel-vue-spa

import store from '@/store'

export default (to, from, next) => {
  if (store.getters['auth/check']) {
    next({ name: 'home' })
  } else {
    next()
  }
}
