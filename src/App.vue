<template>
  <div>
    <loading ref="loading" />

    <transition name="page" mode="out-in">
      <component :is="layout" v-if="layout" />
    </transition>
  </div>
</template>

<script>
import Loading from '@/components/Loading'
import { APP_NAME } from '@/config'

// Load layout components dynamically.
const requireContext = require.context('@/layouts', false, /.*\.vue$/)

const layouts = requireContext.keys()
  .map(file =>
    [file.replace(/(^.\/)|(\.vue$)/g, ''), requireContext(file)]
  )
  .reduce((components, [name, component]) => {
    components[name] = component.default || component
    return components
  }, {})

export default {
  el: '#app',

  components: {
    Loading
  },

  metaInfo () {
    return {
      title: APP_NAME,
      titleTemplate: `%s · ${APP_NAME}`
    }
  },

  mounted () {
    this.$loading = this.$refs.loading
  },

  data () {
    return {
      layout: null,
      defaultLayout: 'default'
    }
  },

  methods: {
    /**
     * Set the application layout.
     *
     * @param {String} layout
     */
    setLayout (layout) {
      if (!layout || !layouts[layout]) {
        layout = this.defaultLayout
      }

      this.layout = layouts[layout]
    }
  }
}
</script>

<style lang="scss">
@import './styles/app.scss';
</style>
