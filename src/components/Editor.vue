<template>
    <div class="h-full pb-7">
        <ul class="list-reset flex">
            <li class="mr-1">
                <a
                    class="bg-dracula-dark border-dracula-dark text-white inline-block border-l border-t border-r rounded-t py-1 px-4 text-sm font-semibold"
                    href="#"
                    >ርዕስ-አልባ.ግዝ</a
                >
            </li>
        </ul>
        <div
            class="h-full overflow-hidden"
            ref="codemirror"
            @keyup="transcrire"
        ></div>
    </div>
</template>
<script setup>
import { transcrire } from '../lib/transcrire.js'
import { ref, onMounted } from 'vue'
import editor from '../editor'
const { state, edit, runCode } = editor

const codemirror = ref(null)

onMounted(() => {
    const _editor = new CodeMirror(codemirror.value, {
        lineNumbers: true,
        tabSize: 8,
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
