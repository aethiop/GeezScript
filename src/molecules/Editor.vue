<template lang="pug">
div(class="h-full pb-7 shadow-lg hover:shadow-sm")
    ul.mr-1
        li.mr-1
            a(class=" bg-light border-light text-white inline-block border-l border-t border-r rounded-t py-1 px-4 text-sm font-semibold") ርዕስ-አልባ.ግዝ
    div(ref="codemirror", @keyup="inputChange").h-full.overflow-hidden
</template>
<script setup>
import { geezify } from '@/lib/geezify.js'
import { ref, onMounted, defineProps } from 'vue'
import editor from '../editor'

const { state, edit, run } = editor
const props = defineProps({ inEnglish: false })
const codemirror = ref(null)

console.log(props.enabled)

const inputChange = (e) => {
    if (props.inEnglish) return
    geezify(e)
}

onMounted(() => {
    const _editor = new CodeMirror(codemirror.value, {
        lineNumbers: true,
        tabSize: 4,
        value: state.code,
        theme: 'material',
        scrollbarStyle: 'null',
        viewportMargin: Infinity,
    })
    _editor.on('change', () => {
        edit(_editor.getValue())
    })
    _editor.setOption('extraKeys', {
        F5: function () {
            return run()
        },
    })
})
</script>
<style>
.CodeMirror {
    height: 100% !important;
    border-bottom-left-radius: 0.375rem;
    border-bottom-right-radius: 0.375rem;
    border-top-right-radius: 0.375rem;
}
</style>
