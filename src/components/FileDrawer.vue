<template>
    <div class="w-64 bg-dracula-dark rounded-md">
        <div class="flex flex-row justify-between p-4">
            <h1 class="text-white text-center text-lg font-bold">ፋይሎች</h1>
            <div class="space-x-2">
                <button id="run" type="button" class="focus:outline-none">
                    <svg
                        class="w-5 h-5 mt-0.5 stroke-current text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M9 13h6m-3-3v6m-9 1V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z"
                        />
                    </svg>
                </button>
                <button id="run" type="button" class="focus:outline-none">
                    <svg
                        class="w-5 h-5 mt-0.5 stroke-current text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                        />
                    </svg>
                </button>
            </div>
        </div>
        <div id="files" class="px-4">
            <ul>
                <li>
                    <a
                        class="inline-block p-2 bg-gray-600 rounded-md w-full"
                        href="#"
                    >
                        <div class="flex flex-row space-x-2">
                            <svg
                                class="w-5 h-5 mt-0.5 stroke-current text-gray-200"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                                />
                            </svg>
                            <p class="text-gray-200">ርዕስ-አልባ.ግዝ</p>
                        </div>
                    </a>
                </li>
            </ul>
        </div>
    </div>
</template>
<script setup></script>
<style></style>
