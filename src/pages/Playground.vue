<template lang="pug">
div(class="bg-dracula-light flex flex-col h-screen")
    nav(class="flex items-center h-16 justify-between px-4 pt-3 overflow-y-hidden")
        // Title Logo
        a(class="flex flex-row items-center", href="https://www.github.com/aethiop/geez-playground")
            svg(class="w-8 h-8 fill-current bg-yellow-300 rounded-md shadow-md transform delay-75 hover:scale-110 hover:shadow-lg motion-reduce:transform-none", viewBox="0 0 50 50", xmlns="http://www.w3.org/2000/svg")
                path(fill-rule="evenodd", clip-rule="evenodd", d="M16.7377 15.7377V34.2623H23.2951V25.082C23.2951 23.4975 24.5795 22.2131 26.1639 22.2131C27.7484 22.2131 29.0328 23.4975 29.0328 25.082V35.3279C29.0328 37.9082 26.941 40 24.3607 40H15.6721C13.0918 40 11 37.9082 11 35.3279V14.6721C11 12.0918 13.0918 10 15.6721 10H36.3279C38.9082 10 41 12.0918 41 14.6721V25.082C41 26.6664 39.7156 27.9508 38.1311 27.9508C36.5467 27.9508 35.2623 26.6664 35.2623 25.082V15.7377H16.7377Z", fill="#1F2937")
            h2(class="ml-2 font-bold tracking-widest text-white") ግዕዝ
                span(class="text-red-300") ፩
        // Play Button
        icon-text-button(@click="run",name="flash") 
            template(v-slot:title)
                h1.leading-0.font-semibold.tracking-wider ጀምር
        // Empty Box
        div
    
    // Editor Section
    div(class="h-full overflow-hidden p-2 flex flex-row flex-auto")
        // File Drawer
        //- div(class="w-full" ref="left")
        //-     file-drawer/
        
        // Ge'ez Editor && Console
        div(class="w-96 flex flex-col flex-auto px-1 space-y-1", ref="main")

            // Ge'ez Editor
            div(ref="codemirror")
                editor/
            
            // Ge'ez Console
            div(ref="terminal")
                console/

        // Turtle Canvas
        div(id="preview", class="w-auto pl-1", ref="right")
            canvas(class="w-full h-full bg-gray-500 rounded-md", id="canvas")
</template>
<script setup>
import Console from '@/molecules/Console.vue'
import Editor from '@/molecules/Editor.vue'
import FileDrawer from '@/molecules/FileDrawer.vue'
import IconTextButton from '@/atoms/IconTextButton.vue'
import editor from '@/editor.js'
import Split from 'split.js'

import { ref, onMounted } from 'vue'

const terminal = ref(null)
const codemirror = ref(null)
const { state, runCode, clearConsole } = editor

const imgCanvas = ref(null)
const turtlecanvas = ref(null)

// setImageContext(imgCanvas.value)
// setTurtleContext(turtlecanvas.value)

// const left = ref(null)
const main = ref(null)
const right = ref(null)
const run = () => runCode(state.code)
onMounted(() => {
    Split([codemirror.value, terminal.value], {
        sizes: [75, 25],
        gutterSize: 7,
        direction: 'vertical',
        snapOffset: 0,
    })
    Split([main.value, right.value], {
        sizes: [70, 30],
        gutterSize: 7,
        snapOffset: 0,
    })

    // setInterval(() => {
    //     run()
    //     clearConsole()
    // }, 1000)
    // setInterval(() => {
    //     run()
    //     clearConsole()
    // }, 300)
})
</script>
<style>
.gutter {
    margin: auto;
    border-radius: 0.375rem;
    background-color: #eee;
    background-repeat: no-repeat;
    background-position: 80%;
}
.gutter.gutter-vertical {
    width: 3rem;
    background: rgba(75, 85, 99, 0.6) !important;
    cursor: row-resize;
}
.gutter.gutter-horizontal {
    height: 3rem !important;
    background: rgba(75, 85, 99, 0.6) !important;
    cursor: row-resize;
}

#console {
    position: relative;
    height: 100%;
    font-weight: bold;
    font-size: medium;
    color: azure;
    margin-top: 0.25rem;
}

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
