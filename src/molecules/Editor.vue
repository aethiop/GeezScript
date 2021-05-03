<template lang="pug">
div.h-full.pb-7
    ul.mr-1
        li.mr-1
            a.bg-dracula-dark.border-dracula-dark.text-white.inline-block.border-l.border-t.border-r.rounded-t.py-1.px-4.text-sm.font-semibold ርዕስ-አልባ.ግዝ
    div(ref="codemirror", @keyup="transcrire").h-full.overflow-hidden
</template>
<script setup>
import { transcrire } from '@/lib/transcrire.js'
import { ref, onMounted } from 'vue'
import editor from '../editor'

const { state, edit, runCode, turtle } = editor

const codemirror = ref(null)

onMounted(() => {
    const _editor = new CodeMirror(codemirror.value, {
        lineNumbers: true,
        tabSize: 4,
        value: state.code,
        theme: 'dracula',
        scrollbarStyle: 'null',
        viewportMargin: Infinity,
    })
    _editor.on('change', () => {
        edit(_editor.getValue())
    })
    _editor.setOption('extraKeys', {
        F5: function () {
            return runCode(state.code)
        },
    })
})
</script>
<style>
.CodeMirror {
    height: 100% !important;
    border: 1px solid #eee;
    border-bottom-left-radius: 0.375rem;
    border-bottom-right-radius: 0.375rem;
    border-top-right-radius: 0.375rem;
}
</style>
