import { reactive } from 'vue'

export const config = reactive({
    peers: ['http://localhost:8765/gun'],
    scope: 'geez-0-0-1',
})
