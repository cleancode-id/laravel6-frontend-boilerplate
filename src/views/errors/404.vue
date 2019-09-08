<template>
  <card class="text-center">
    <h3 class="mb-4">
      {{ $t('page_not_found') }}
    </h3>

    <div class="links">
      <router-link :to="{ name: 'home' }">
        {{ $t('go_home') }}
      </router-link>
    </div>
  </card>
</template>

<script>
import Card from '@/components/Card'

export default {
  components: {
    Card
  },

  metaInfo () {
    return { title: this.$t('page_not_found') }
  }
}
</script>
