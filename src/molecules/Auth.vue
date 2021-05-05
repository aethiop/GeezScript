<template lang="pug">
div
    input(type="text", placeholder="username", v-model="username")
    input(type="text", placeholder="password", v-model="password")
    button(type="submit", @click="userRegister") Sign Up
    button(type="submit", @click="userLogin") Sign In
    button(type="submit", @click="getUsername") GetgetUsername
    button(type="submit", @click="printStatus") ????

</template>
<script setup>
import { user } from '@/marda/gun.js'
import { join, login, getAlias, isAuthed } from '@/marda/user.js'
import { onMounted, ref } from 'vue'
const username = ref('')
const password = ref('')
const key = ref('')

const getUsername = () => console.log(user._.sea)
const printStatus = () => console.log(isAuthed.value)
const userRegister = () => {
    join(username.value, password.value)
}
const userLogin = () => {
    login(username.value, password.value)
}
onMounted(() => {})
</script>
<style></style>
