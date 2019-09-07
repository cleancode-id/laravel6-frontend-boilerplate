// https://github.com/cretueusebiu/laravel-vue-spa

import store from '@/store'

export default (to, from, next) => {
  if (store.getters['auth/user'].role !== 'admin') {
    next({ name: 'home' })
  } else {
    next()
  }
}
