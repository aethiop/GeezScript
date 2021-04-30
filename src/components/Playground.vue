<template>
    <div class="bg-dracula-light flex flex-col h-screen">
        <!-- Navigation Bar -->
        <nav class="flex items-center justify-between m-2 overflow-y-hidden">
            <a
                class="flex flex-row items-center"
                href="https://www.github.com/aethiop/geez-playground"
            >
                <svg
                    class="w-7 h-7"
                    viewBox="0 0 50 50"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <rect width="50" height="50" rx="9.09091" fill="#FCD34C" />
                    <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M16.7377 15.7377V34.2623H23.2951V25.082C23.2951 23.4975 24.5795 22.2131 26.1639 22.2131C27.7484 22.2131 29.0328 23.4975 29.0328 25.082V35.3279C29.0328 37.9082 26.941 40 24.3607 40H15.6721C13.0918 40 11 37.9082 11 35.3279V14.6721C11 12.0918 13.0918 10 15.6721 10H36.3279C38.9082 10 41 12.0918 41 14.6721V25.082C41 26.6664 39.7156 27.9508 38.1311 27.9508C36.5467 27.9508 35.2623 26.6664 35.2623 25.082V15.7377H16.7377Z"
                        fill="#1F2937"
                    />
                </svg>
                <h2 class="ml-2 font-bold leading-7 text-white">ግዕዝ</h2></a
            >
            <div>
                <span class="ml-3">
                    <button
                        id="run"
                        type="button"
                        @click="runCode"
                        class="inline-flex items-center border p-2 border-transparent rounded-md shadow-sm text-sm font-medium text-gray-800 bg-green-400 hover:bg-green-500 focus:outline-none"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="w-5 h-5 fill-current text-gray-800"
                            viewBox="0 0 512 512"
                        >
                            <title>Play</title>
                            <path
                                d="M133 440a35.37 35.37 0 01-17.5-4.67c-12-6.8-19.46-20-19.46-34.33V111c0-14.37 7.46-27.53 19.46-34.33a35.13 35.13 0 0135.77.45l247.85 148.36a36 36 0 010 61l-247.89 148.4A35.5 35.5 0 01133 440z"
                            />
                        </svg>
                    </button>
                </span>
            </div>
            <div></div>
        </nav>

        <div class="h-full overflow-hidden p-2 flex flex-row">
            <!-- Files -->
            <file-drawer />
            <!-- Editor and Console -->
            <div ref="main" class="flex flex-col flex-auto px-2 space-y-1">
                <div ref="codemirror">
                    <editor />
                </div>
                <div ref="terminal">
                    <console />
                </div>
            </div>
            <!-- Preview -->
            <div ref="right" class="hidden">
                <canvas id="canvas" class="w-full h-full"></canvas>
            </div>
        </div>
    </div>
</template>
<script setup>
import Console from './Console.vue'
import Editor from './Editor.vue'
import FileDrawer from './FileDrawer.vue'
import Split from 'split.js'
import { ref, onMounted } from 'vue'
const terminal = ref(null)
const codemirror = ref(null)
onMounted(() => {
    Split([codemirror.value, terminal.value], {
        sizes: [75, 25],
        gutterSize: 7,
        direction: 'vertical',
        snapOffset: 0,
    })
    // Split([editor.value, terminal.value], {
    // 	sizes: [65, 35],
    // 	gutterSize: 7,
    // 	snapOffset: 0,
    // });
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
