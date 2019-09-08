function page (path) {
  return () => import(/* webpackChunkName: '' */ `@/views/${path}`).then(m => m.default || m)
}

export default [
  { path: '/', name: 'home', component: page('Home.vue') },
  { path: '/about', name: 'about', component: page('About.vue') },
  { path: '/login', name: 'login', component: page('auth/Login.vue') },
  { path: '/register', name: 'register', component: page('auth/Register.vue') },
  { path: '/account',
    component: page('account/Index.vue'),
    children: [
      { path: '', redirect: { name: 'account.profile' } },
      { path: 'profile', name: 'account.profile', component: page('account/Profile.vue') },
      { path: 'password', name: 'account.password', component: page('account/Password.vue') }
    ]
  },
  { path: '*', component: page('errors/404.vue') }
]
