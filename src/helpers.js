import { computed } from 'vue'
import { useStore } from 'vuex'

export function useState(arr) {
    const store = useStore()
    const keypair = arr.map((s) => [
        s.includes('/') ? s.split('/')[1] : s,
        computed(() => store.state[s]),
    ])
    console.log(keypair)
    return Object.fromEntries(keypair)
}

export function useGetters(arr) {
    const store = useStore()
    const keypair = arr.map((g) => [
        g.includes('/') ? g.split('/')[1] : m,
        computed(() => store.getters[g]),
    ])
    return Object.fromEntries(keypair)
}

export function useMutations(arr) {
    const store = useStore()
    const keypair = arr.map((m) => [
        m.includes('/') ? m.split('/')[1] : m,
        (input) => store.commit(m, input),
    ])
    console.log(keypair)
    return Object.fromEntries(keypair)
}
export function useActions(arr) {
    const store = useStore()
    const keypair = arr.map((a) => [
        a.includes('/') ? a.split('/')[1] : a,
        (input) => store.dispatch(a, input),
    ])
    console.log(keypair)
    return Object.fromEntries(keypair)
}
