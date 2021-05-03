<template lang="pug">
div
    button(type="button", class="btn")
        svg(class="w-5 h-5 fill-current text-gray-800 ", viewBox="0 0 20 20", fill="none", xmlns="http://www.w3.org/2000/svg")
            path(:d="path", clipRule="evenodd", fillRule="evenodd")
        span
            slot(name="title")
</template>
<script setup>
import { defineEmit, computed } from 'vue'
import iconsFile from './icons'
const props = defineProps({ name: String })
const { ICONS } = iconsFile

const path = computed(() => {
    return ICONS[props.name]
})
</script>
<style></style>
