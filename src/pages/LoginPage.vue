<template>
  <q-page padding>
    <q-form class="row justify-center" @submit.prevent="handleLogin">
      <p class="col-12 text-h5 text-center">Login</p>
      <div class="col-md-4 col-sm-6 col-xs-10 q-gutter-y-md">
        <q-input label="Email" v-model="form.email" />
        <q-input label="Password" v-model="form.password" />
        <div class="full-width">
          <q-btn label="Login" color="primary" class="full-width" outline rounded type="submit" />
        </div>
        <div class="full-width">
          <q-btn label="Register" color="primary" class="full-width" flat rounded to="/login/register" />
        </div>
      </div>
    </q-form>
  </q-page>
</template>

<script setup>
import { ref } from 'vue'
import useAuthUser from 'src/composables/UseAuthUser'
import { useRouter } from 'vue-router'

const router = useRouter()
const { login } = useAuthUser()

const form = ref({
  email: '',
  password: '',
})

const handleLogin = async () => {
  try {
    await login(form.value)
    router.push({ name: 'me' })
  } catch (error) {
    alert(error.message)
  }
  return handleLogin
}
</script>
