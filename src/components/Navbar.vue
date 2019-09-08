<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container">
      <router-link :to="{ name: 'home' }" class="navbar-brand" exact>
        {{ appName }}
      </router-link>

      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link :to="{ name: 'home' }" class="nav-link" active-class="active" exact>
              {{ $t('home') }}
            </router-link>
          </li>
<!--          <li class="nav-item">-->
<!--            <router-link :to="{ name: 'about' }" class="nav-link" active-class="active">-->
<!--              {{ $t('about') }}-->
<!--            </router-link>-->
<!--          </li>-->
        </ul>
        <ul class="navbar-nav ml-auto">
          <li v-if="!user" class="nav-item nav-item-register">
            <router-link :to="{ name: 'register' }" class="nav-link" active-class="active">
              {{ $t('register') }}
            </router-link>
          </li>
          <li v-if="!user" class="nav-item nav-item-login">
            <router-link :to="{ name: 'login' }" class="nav-link" active-class="active">
              {{ $t('login') }}
            </router-link>
          </li>
          <li v-if="user" class="nav-item">
            <router-link :to="{ name: 'account.profile' }" class="nav-link" active-class="active">
              {{ user.name }}
            </router-link>
          </li>
          <li v-if="user" class="nav-item">
            <a href="#" class="nav-link" @click.prevent="logout">
              {{ $t('logout') }}
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: mapGetters({
    appName: 'config/appName',
    user: 'auth/user'
  }),

  methods: {
    async logout () {
      // Log out the user.
      await this.$store.dispatch('auth/logout')

      // Redirect to login.
      this.$router.push({ name: 'login' })
    }
  }
}
</script>
