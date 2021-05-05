import Gun from 'gun'
import SEA from 'gun/sea.js'
import 'gun/lib/rindexed.js'
import 'gun/nts'
import 'gun/lib/webrtc'
import { computed } from 'vue'
import { config } from './config'
import { getProfile } from './user'
export const peers = computed(() => config.peers)

export const gun = Gun({
    peers: peers.value || {},
    localStorage: true,
    rindexed: true,
})
//debugging
window.gun = gun

export const scope = computed(() => config.scope)
export const sea = SEA
export const user = gun.user().recall({ sessionStorage: true }, (ack) => {
    getProfile(ack)
})
