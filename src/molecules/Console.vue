<template lang="pug">
div(class="w-full h-full flex flex-col bg-black rounded-md")
    div(class="w-full h-8 justify-between bg-dracula-dark flex flex-row rounded-t-md")
        h1(class="p-2 text-sm text-gray-300") ኮንሶል
        button(class="focus:outline-none p-2 ml-auto shadow-sm hover:shadow-lg transform hover:scale-110", type="button", @click="clearConsole")
            svg(class=" w-4 h-4 fill-current text-red-500", xmlns="http://www.w3.org/2000/svg", viewBox="0 0 512 512")
                title Trash
                path(d="M296 64h-80a7.91 7.91 0 00-8 8v24h96V72a7.91 7.91 0 00-8-8z",fill="none")
                path(d="M432 96h-96V72a40 40 0 00-40-40h-80a40 40 0 00-40 40v24H80a16 16 0 000 32h17l19 304.92c1.42 26.85 22 47.08 48 47.08h184c26.13 0 46.3-19.78 48-47l19-305h17a16 16 0 000-32zM192.57 416H192a16 16 0 01-16-15.43l-8-224a16 16 0 1132-1.14l8 224A16 16 0 01192.57 416zM272 400a16 16 0 01-32 0V176a16 16 0 0132 0zm32-304h-96V72a7.91 7.91 0 018-8h80a7.91 7.91 0 018 8zm32 304.57A16 16 0 01320 416h-.58A16 16 0 01304 399.43l8-224a16 16 0 1132 1.14z")
    div(class="relative h-full font-bold text-white mt-1" ref="terminal")
</template>
<script setup>
import { ref, onMounted } from 'vue'
import editor from '@/editor'
import 'jq-console'

const { setTerminal, clearConsole } = editor
const terminal = ref(null)
onMounted(() => {
    const term = $(terminal.value).jqconsole()
    $('.jqconsole-prompt-text').on(function (event) {
        console.log(event)
    })
    window.term = term
    setTerminal(term)
})
</script>

<style scoped>
.jqconsole::-webkit-scrollbar {
    display: none !important;
}
/* The inner console element. */
.jqconsole {
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
    overflow: hidden !important;
    padding-left: 0.5rem;
    font-size: 0.875rem /* 14px */;
    line-height: 1.25rem /* 20px */;
}
/* The cursor. */
.jqconsole-cursor {
    background-color: rgb(153, 153, 153);
}
/*The cursor color when the console looses focus. */
.jqconsole-blurred .jqconsole-cursor {
    background-color: rgb(119, 119, 119);
}
/* The current prompt text color */
.jqconsole-prompt {
    font-size: 0.875rem /* 14px */;
    line-height: 1.25rem /* 20px */;
    color: rgb(247, 255, 247);
}
/* The command history */
.jqconsole-old-prompt {
    color: rgb(134, 134, 134);
    font-weight: normal;
}
/* The text color when in input mode. */
.jqconsole-input {
    color: #dd0;
}
/* Previously entered input. */
.jqconsole-old-input {
    color: #bb0;
    font-weight: normal;
}
/* The text color of the output. */
.jqconsole-output {
    color: white;
}

.jqconsole-error {
    color: tomato;
}
</style>
