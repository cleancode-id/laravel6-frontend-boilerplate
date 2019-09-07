<template>
  <div class="card">
    <div v-if="title" class="card-header">
      {{ title }}
    </div>

    <div class="card-body" :class="{ 'no-padding': !isPadding }">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: { type: String, default: null },
    isPadding: { type: Boolean, default: true }
  }
}
</script>
