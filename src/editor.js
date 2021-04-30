import { reactive } from 'vue'
import {
    parse,
    TokenStream,
    StreamObject,
    evaluate,
    Environment,
    Execute,
} from './lib/geez'
import 'jq-console'
import './lib/geez-mode'

const state = reactive({
    code: '',
    terminal: null,
})

const setTerminal = (term) => (state.terminal = term)
const edit = (text) => (state.code = text)
const print = (text) => state.terminal.Write(text)

const geezify = (str) => {
    if (str === false) {
        return 'ሀሰት'
    } else if (str === true) {
        return 'እውነት'
    } else if (typeof str === 'object') {
        return 'ነገር'
    } else {
        return str
    }
}

const prompt = (f, text) => {
    print(geezify(text))
    state.terminal.SetPromptLabel('')
    state.terminal.Prompt(true, (input) => {
        f(input)
    })
}
const env = new Environment()

env.def('ፃፍ', function (k) {
    print(geezify([].slice.call(arguments, 1).join(' ')) + '\n')
    Execute(k, [false])
})

env.def('ተቀበል', function (k, text) {
    prompt(k, text)
})
env.def('ተኛ', function (k, milliseconds) {
    setTimeout(function () {
        Execute(k, [false])
    }, milliseconds)
})
env.def('ወደ-ቁጥር', function (k, num) {
    Execute(k(parseInt(num)), [false])
})

env.def('ይህቀጥል', function (k, f) {
    f(k, function CC(discarded, ret) {
        k(ret)
    })
})
env.def('ርዝመት', function (k, thing) {
    k(thing.length)
})
env.def('ሰልፍ', function (k) {
    k([].slice.call(arguments, 1))
})
env.def('ከሰልፍ', function (k, array, index) {
    Execute(k(array[index]), [false])
})
env.def('ሰልፍ!', function (k, array, index, val) {
    Execute(k((array[index] = val)), [false])
})

function Cons(car, cdr) {
    this.car = car
    this.cdr = cdr
}
const NILL = {}
env.def('ክፍል?', function (k, thing) {
    k(thing instanceof Cons)
})
env.def('ክፍል', function (k, car, cdr) {
    k(new Cons(car, cdr))
})
env.def('ብጀ', function (k, cell) {
    k(cell.car)
})
env.def('ብቀ', function (k, cell) {
    k(cell.cdr)
})
env.def('ብጀ!', function (k, cell, car) {
    k((cell.car = car))
})
env.def('ብቀ!', function (k, cell, cdr) {
    k((cell.cdr = cdr))
})
env.def('ባዶ', function (k) {
    NILL.car = NILL
    NILL.cdr = NILL
    k(NILL)
})

const runCode = (code) => {
    var ast = parse(TokenStream(StreamObject(code)))
    Execute(evaluate, [
        ast,
        env,
        function () {
            print('\n')
        },
    ])
}

const clearConsole = () => {
    state.terminal.Reset()
}

export default { state, edit, runCode, setTerminal, clearConsole }
