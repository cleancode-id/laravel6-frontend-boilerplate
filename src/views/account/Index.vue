<template>
  <div class="row">
    <div class="col-md-3">
      <card :title="$t('settings')">
        <ul class="nav flex-column nav-pills">
          <li v-for="tab in tabs" :key="tab.route" class="nav-item">
            <router-link :to="{ name: tab.route }" class="nav-link" active-class="active">
              {{ tab.name }}
            </router-link>
          </li>
        </ul>
      </card>
    </div>

    <div class="col-md-9">
      <transition name="fade" mode="out-in">
        <router-view />
      </transition>
    </div>
  </div>
</template>

<script>
import Card from '@/components/Card'

export default {
  middleware: 'auth',

  components: {
    Card
  },

  computed: {
    tabs () {
      return [
        {
          icon: 'user',
          name: this.$t('profile'),
          route: 'account.profile'
        },
        {
          icon: 'lock',
          name: this.$t('password'),
          route: 'account.password'
        }
      ]
    }
  }
}
</script>
