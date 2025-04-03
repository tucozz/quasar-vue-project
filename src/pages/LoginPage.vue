<template>
  <q-page padding>
    <q-form class="row justify-center">
      <p class="col-12 text-h5 text-center"> Login </p>
      <div class="col-md-4 col-sm-6 col-xs-10 q-gutter-y-md">
        <q-input
         label="Email"
         v-model="form.email"
        />
        <q-input
         label="Password"
         v-model="form.password"
        />
        <div class="full-width">
          <q-btn
          label="Login"
          color="primary"
          class="full-width"
          outline
          rounded
          />
        </div>
      </div>
    </q-form>
  </q-page>
</template>

<script setup>
  import { ref } from 'vue'

  const form = ref({
    email: '',
    password: ''
  })
</script>
