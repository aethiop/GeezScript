import { reactive, computed } from 'vue'
import { sea, user } from '@/marda/gun.js'
import { USER_GRAPH as userDB } from '@/marda/user.js'
import { state } from './editor'

const code = {
    id: 'abcdef',
    title: 'ርዕስ-አልባ.ግዝ',
    value: state.code,
}

const timestamps = ['createdAt', 'modifiedAt']

export const encrypt = async function (data) {
    const encrypted = {
        ...data,
        ...{
            title: await sea.encrypt(data.title, user._.sea),
            value: await sea.encrypt(data.value, user._.sea),
        },
    }
    console.log(encrypted)
    return encrypted
}
export const decrypt = async function (data) {
    const decrypted = {
        ...data,
        ...{
            title: await sea.decrypt(data.title, user._.sea),
            value: await sea.decrypt(data.value, user._.sea),
        },
    }
    console.log(decrypted)

    return decrypted
}

export const save = async function (code) {
    code = await encrypt(code)
    userDB
        .get('codes')
        .get(code.id)
        .once((prev) => {
            const previouslyModified = prev && prev.modifiedAt
            userDB
                .get('codes')
                .get(code.id)
                .put(code, () => {
                    const codeNode = userDB.get('codes').get(code.id)

                    if (prev && previouslyModified !== code.modifiedAt) {
                        updateTimestamp(code, codeNode, previouslyModified)
                    } else if (!prev) {
                        createTimestamp(code, codeNode)
                    }
                })
        })
    console.log(code)
}

//timestamps

const createTimestamp = (data, dataNode) => {
    timestamps.forEach((timestamp) => {
        insertTimestamp(data, dataNode, timestamp)
    })
}
const insertTimestamp = (data, dataNode, timestamp) => {
    // Time tree
    userDB
        .get('trees')
        .get('timestamps')
        .get(data[timestamp])
        .get(timestamp)
        .set(dataNode)
}

const updateTimestamps = (data, dataNode, previouslyModifieõ) => {
    nullTimestamp(data, 'modifiedAt', previouslyModified)
    insertTimestamp(data, dataNode, 'modifiedAt')
}

const nullTimestamps = function (document, atTimestamp) {
    timestamps.forEach((timestamp) => {
        nullTimestamp(document, timestamp, atTimestamp)
    })
}

const nullTimestamp = function (code, timestamp, atTimestamp) {
    // Nullify timestamp.
    userDB
        .get('trees')
        .get('timestamps')
        .get(atTimestamp || document[timestamp])
        .get(timestamp)
        .get(code._['#'])
        .put(null)
}

export const show = (id, cb) => {
    userDB
        .get('codes')
        .get(id)
        .once(async (code) => {
            if (code) {
                code = await decrypt(code)
                cb(code)
            }
        })
}
