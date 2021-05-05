k
<template lang="pug">
div(class="bg-dark flex flex-col h-screen")
    nav(class="flex items-center h-14 justify-between px-6 py-6 overflow-y-hidden border-dracula-border border-b")
        // Title Logo
        a(class="flex flex-row items-center", href="http://docs.marda.studio/")
            svg(class="w-9 h-9 fill-current bg-geez-yellow rounded-md", viewBox="0 0 50 50", xmlns="http://www.w3.org/2000/svg")
                path(fill-rule="evenodd", clip-rule="evenodd", d="M16.7377 15.7377V34.2623H23.2951V25.082C23.2951 23.4975 24.5795 22.2131 26.1639 22.2131C27.7484 22.2131 29.0328 23.4975 29.0328 25.082V35.3279C29.0328 37.9082 26.941 40 24.3607 40H15.6721C13.0918 40 11 37.9082 11 35.3279V14.6721C11 12.0918 13.0918 10 15.6721 10H36.3279C38.9082 10 41 12.0918 41 14.6721V25.082C41 26.6664 39.7156 27.9508 38.1311 27.9508C36.5467 27.9508 35.2623 26.6664 35.2623 25.082V15.7377H16.7377Z", fill="#1F2937")
            h2(class="ml-2 font-bold text-xl leading-none text-white px-2") {{enabled ? "Ge'ez" : "ግዕዝ"}}
        // Play Button
        div(class="space-x-2 items-center")
            span(class=" font-semibold text-white text-sm ") 
            Switch(v-model="enabled" , :class="enabled ? 'bg-yellow-400' : 'bg-gray-200 opacity-30'", class="relative inline-flex items-center h-6 rounded-full w-11 focus:outline-none")
                span(:class="enabled ? 'translate-x-6 bg-dark' : 'translate-x-1 bg-light'",class="inline-block w-4 h-4 transform bg-dark rounded-full")

        icon-text-button(@click="run",name="flash") 
            template(v-slot:title)
                h1.leading-0.font-semibold.tracking-wider ጀምር
    // Editor Section
    div(class="h-full overflow-hidden p-2 flex md:flex-row flex-auto")
        // File Drawer
        splitpanes
            pane(min-size="20", max-size="30", size="20")
                file-drawer/
            
            // Ge'ez Editor && Console
            pane(class="w-96 flex flex-col flex-auto px-1 space-y-1", size="60", min-size="45")
                splitpanes(horizontal)
                    pane(min-size="50", size="70")
                        editor(:inEnglish="enabled")/
                    
                    // Ge'ez Console
                    pane(min-size="7")
                        console/

            // Turtle Canvas
            pane(id="preview", class="w-auto pl-1 hidden md:block shadow-md")
                canvas(class="w-full h-full bg-gray-200 rounded-md", id="canvas")
</template>
<script setup>
import Console from '@/molecules/Console.vue'
import Editor from '@/molecules/Editor.vue'
import FileDrawer from '@/molecules/FileDrawer.vue'
import IconTextButton from '@/atoms/IconTextButton.vue'
import { Switch } from '@headlessui/vue'
import { Splitpanes, Pane } from 'splitpanes'
import editor from '@/editor.js'

import { ref, onMounted } from 'vue'

const enabled = ref(false)
const { state, run, clearConsole } = editor

// const imgCanvas = ref(null)
// const turtlecanvas = ref(null)

// setImageContext(imgCanvas.value)
// setTurtleContext(turtlecanvas.value)

// const left = ref(null)
// const main = ref(null)
// const right = ref(null)

// debouncedRun(state.code)

onMounted(() => {
    // Split([codemirror.value, terminal.value], {
    //     sizes: [75, 25],
    //     gutterSize: 7,
    //     direction: 'vertical',
    //     snapOffset: 0,
    // })
    // Split([left.value, main.value, right.value], {
    //     sizes: [20, 50, 30],
    //     gutterSize: 7,
    //     snapOffset: 0,
    // })
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
.splitpanes__splitter {
    @layer components {
        @apply bg-light rounded-md bg-opacity-25 hover:bg-opacity-90 focus:ring-1 focus:ring-offset-gray-300 mx-1 my-2;
    }
}

.splitpanes--horizontal > .splitpanes__splitter {
    @layer components {
        @apply h-1;
    }
}
.splitpanes--vertical > .splitpanes__splitter {
    @layer components {
        @apply w-1;
    }
}
/* .splitpanes__splitter:before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    transition: opacity 0.4s;
    background-color: rgba(255, 0, 0, 0.3);
    opacity: 0;
    z-index: 1;
} */

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

@media screen and (max-width: 768px) {
    .gutter.gutter-horizontal {
        display: none !important;
    }
}
@media screen and (max-width: 1024px) {
    .gutter.gutter-horizontal {
        display: none !important;
    }
}
</style>
