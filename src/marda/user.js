import { reactive, computed } from 'vue'
import { gun, user, scope } from './gun'
export const USER_GRAPH = user.get(scope.value)

const User = reactive({
    alias: null,
    authed: false,
    err: {},
    status: 'idle',
})

export const join = (alias, pass) => {
    gun.get(`~@${alias}`).once((data) => {
        if (!data) {
            user.create(alias, pass, (ack) => {
                if (!ack.err) {
                    login(alias, pass)
                } else {
                    addError('alias', ack.err)
                }
            })
        } else {
            addError('alias', 'User already exists')
        }
    })
}

export const login = (alias, pass) => {
    user.auth(alias, pass, (ack) => {
        if (!ack.err) {
            getProfile(ack)
        } else {
            addError('username', ack.err)
        }
    })
}

export const getProfile = (ack) => {
    gun.get(ack.soul).once((user) => {
        User.alias = user.alias
        User.authed = true
    })
}

export const addError = (key, error) => {
    const arr = User.err[key] || []
    arr.push(error)
    console.log(arr)
    User.err = { [key]: arr }
}
export const clearError = () => {
    User.err = {}
}

export const changePass = (alias, pass, newPass) => {
    user.auth(
        alias,
        pass,
        (ack) => {
            if (ack.err) addError('password', ack.err)
        },
        { change: newPass }
    )
}

export const logout = () => {
    user.leave()
    User.alias = null
    User.authed = false
}

export const getAlias = computed(() => User.alias)
export const isAuthed = computed(() => User.authed)
// export const tagUser = (username) => {
//     return `${username}#${Math.floor(
//         1000 + Math.random() * 9000
//     )}`.toLowerCase()
// }

// const getUsername = () => {
//     user.get('profile')
//         .get('name')
//         .on((n) => {
//             return n
//         })
// }

// export const register = async (username) => {
//     await SEA.pair().then(async (key) => {
//         var usernameTag = tagUser(username)
//         login(key)

//         app.get('users').set({
//             pub: key.pub,
//             id: usernameTag.slice(-4),
//             name: username.toLowerCase(),
//             epub: key.epub,
//         })
//         user.get('profile').put({
//             name: username,
//             id: usernameTag.slice(-4),
//         })

//         console.log(
//             '%c Created Successfully ',
//             'color: white; background-color: green; font-weight: bold'
//         )
//         console.log({ username, id: usernameTag.slice(-4), key })
//     })
// }

// // Login using key
// export const login = (k) => {
//     var key = k || {}
//     if (typeof key === 'string') {
//         key = JSON.parse(key)
//     }
//     user.auth(key)
//     console.log(
//         `%c${JSON.stringify(key)} `,
//         'color: black; background-color: white; font-weight: bold'
//     )

//     user.is && getUsername()
//     console.log(getUsername())
// }

// export const logout = () => {
//     console.log(
//         '%c Logged out from account ',
//         'color: white; background-color: red; font-weight: bold'
//     )
//     user.leave()
// }
