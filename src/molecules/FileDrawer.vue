<template lang="pug">
div(class="w-auto mr-1 h-full bg-light bg-opacity-50 rounded-md")
    div(class="flex flex-row justify-between p-4")
        h1(class="text-white text-center text-lg font-black") ፋይሎች
        div(class="space-x-2")
            button(type="button", class="inline-flex items-center border px-2 py-1 border-transparent rounded-md shadow-2xl text-sm font-medium text-gray-800 transform hover:scale-105 motion-reduce:transform-none focus:outline-none")
                svg(class="w-5 h-5 stroke-current text-white", fill="none" viewBox="0 0 24 24", xmlns="http://www.w3.org/2000/svg")
                    title Play
                    path(stroke-linecap="round" ,stroke-linejoin="round" ,stroke-width="2",d="M9 13h6m-3-3v6m-9 1V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z")
            button(type="button", class="inline-flex items-center border px-2 py-1 border-transparent rounded-md shadow-2xl text-sm font-medium text-gray-800 transform hover:scale-105 motion-reduce:transform-none focus:outline-none")
                svg(class="w-5 h-5  stroke-current text-white", fill="none" viewBox="0 0 24 24", xmlns="http://www.w3.org/2000/svg")
                    title Play
                    path(stroke-linecap="round" ,stroke-linejoin="round" ,stroke-width="2",d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z")
    div(class="px-4")
        ul
            li 
                a(class="inline-block px-2 py-1 bg-dark rounded-md w-full", href="#")
                    button(type="button", class="inline-flex items-center space-x-4 border px-2 py-1 border-transparent rounded-md shadow-2xl text-sm font-medium text-gray-800 transform hover:scale-105 motion-reduce:transform-none focus:outline-none")
                        svg(class="w-5 h-5 stroke-current text-white ", fill="none" viewBox="0 0 24 24", xmlns="http://www.w3.org/2000/svg")
                            title Play
                            path(stroke-linecap="round" ,stroke-linejoin="round" ,stroke-width="2",d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z")
                        p(class="text-gray-200") ርዕስ-አልባ.ግዝ
</template>
<script setup></script>
<style></style>
