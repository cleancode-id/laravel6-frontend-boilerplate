<template>
  <card :title="$t('your_info')">
    <form @submit.prevent="update" @keydown="form.onKeydown($event)">
      <alert-success :form="form" :message="$t('info_updated')" />

      <!-- Name -->
      <div class="form-group row">
        <label for="name" class="col-md-3 col-form-label text-md-right">{{ $t('name') }}</label>
        <div class="col-md-7">
          <input v-model="form.name" id="name" :class="{ 'is-invalid': form.errors.has('name') }" class="form-control" type="text" name="name">
          <has-error :form="form" field="name" />
        </div>
      </div>

      <!-- Email -->
      <div class="form-group row">
        <label for="email" class="col-md-3 col-form-label text-md-right">{{ $t('email') }}</label>
        <div class="col-md-7">
          <input v-model="form.email" id="email" :class="{ 'is-invalid': form.errors.has('email') }" class="form-control" type="email" name="email">
          <has-error :form="form" field="email" />
        </div>
      </div>

      <!-- Submit Button -->
      <div class="form-group row">
        <div class="col-md-9 ml-md-auto">
          <button type="submit" class="btn btn-primary" :disabled="form.busy">
            {{ $t('update') }}
          </button>
        </div>
      </div>
    </form>
  </card>
</template>

<script>
import { Form, HasError, AlertSuccess } from 'vform'
import Card from '@/components/Card'
import { mapGetters } from 'vuex'

export default {
  components: {
    Card,
    HasError,
    AlertSuccess
  },

  metaInfo () {
    return { title: this.$t('your_info') }
  },

  data () {
    return {
      form: new Form({
        name: '',
        email: ''
      })
    }
  },

  computed: mapGetters({
    user: 'auth/user'
  }),

  created () {
    // Fill the form with user data.
    this.form.keys().forEach(key => {
      this.form[key] = this.user[key]
    })
  },

  methods: {
    async update () {
      const { data: { data } } = await this.form.patch('/api/account/profile')

      this.$store.dispatch('auth/updateUser', { user: data })
    }
  }
}
</script>
