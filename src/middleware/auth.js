// https://github.com/cretueusebiu/laravel-vue-spa

import store from '@/store'

export default async (to, from, next) => {
  if (!store.getters['auth/check']) {
    next({ name: 'login' })
  } else {
    next()
  }
}
