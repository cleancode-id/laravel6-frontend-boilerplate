<template>
  <div class="row">
    <div class="col-lg-8 m-auto">
      <card :title="$t('login')">
        <form @submit.prevent="login" @keydown="form.onKeydown($event)">
          <!-- Email -->
          <div class="form-group row">
            <label for="email" class="col-md-3 col-form-label text-md-right">{{ $t('email') }}</label>
            <div class="col-md-7">
              <input v-model="form.email" id="email" :class="{ 'is-invalid': form.errors.has('email') }" class="form-control" type="email" name="email">
              <has-error :form="form" field="email" />
            </div>
          </div>

          <!-- Password -->
          <div class="form-group row">
            <label for="password" class="col-md-3 col-form-label text-md-right">{{ $t('password') }}</label>
            <div class="col-md-7">
              <input v-model="form.password" id="password" :class="{ 'is-invalid': form.errors.has('password') }" class="form-control" type="password" name="password">
              <has-error :form="form" field="password" />
            </div>
          </div>

          <div class="form-group row">
            <div class="col-md-7 offset-md-3 d-flex">
              <!-- Submit Button -->
              <button type="submit" class="btn btn-primary" :disabled="form.busy">
                {{ $t('login') }}
              </button>
            </div>
          </div>
        </form>
      </card>
    </div>
  </div>
</template>

<script>
import { Form, HasError } from 'vform'
import Card from '@/components/Card'

export default {
  middleware: 'guest',

  components: {
    Card,
    HasError
  },

  metaInfo () {
    return { title: this.$t('login') }
  },

  data () {
    return {
      form: new Form({
        email: '',
        password: ''
      })
    }
  },

  methods: {
    async login () {
      // Submit the form.
      await this.$store.dispatch('auth/login', { form: this.form })

      // Redirect home.
      this.$router.push({ name: 'home' })
    }
  }
}
</script>
