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

const turtle = reactive({
    canvas: null,
})

function TinyTurtle() {
    const canvas = document.querySelector('canvas')
    $('#preview').resize(function () {
        canvas.width = $('#preview').width()
        canvas.height = $('#preview').height()
    })
    canvas.width = $('#preview').width()
    canvas.height = $('#preview').height()

    var self = this
    var rotation = 90
    var position = {
        x: canvas.width / 2 + 0.5,
        y: canvas.height / 2 + 0.5,
    }
    var isPenDown = true
    var radians = function (r) {
        return 2 * Math.PI * (r / 360)
    }
    var triangle = function (ctx, base, height) {
        ctx.beginPath()
        ctx.moveTo(0, -base / 2)
        ctx.lineTo(height, 0)
        ctx.lineTo(0, base / 2)
        ctx.closePath()
    }
    var rotate = function (deg) {
        rotation = (rotation + deg) % 360
        if (rotation < 0) rotation += 360
    }
    function clearContext(context) {
        context.save()
        context.setTransform(1, 0, 0, 1, 0, 0)
        context.clearRect(0, 0, context.canvas.width, context.canvas.height)
        context.restore()
    }

    self.penStyle = function (a, b, c, d) {
        return `rgba(${a},${b},${c},${d}})`
    }
    self.penWidth = 1
    self.penUp = function (cb) {
        isPenDown = false
        return self
    }
    self.penDown = function () {
        isPenDown = true
        return self
    }
    self.forward = function (distance) {
        var origX = position.x,
            origY = position.y
        position.x += Math.cos(radians(rotation)) * distance
        position.y -= Math.sin(radians(rotation)) * distance
        if (!isPenDown) return
        var ctx = canvas.getContext('2d')

        ctx.strokeStyle = self.penStyle
        ctx.lineWidth = self.penWidth
        ctx.beginPath()
        ctx.moveTo(origX, origY)
        ctx.lineTo(position.x, position.y)
        ctx.stroke()
        return self
    }
    self.circle = function (rad, ang) {
        var origX = position.x,
            origY = position.y
        position.x = origX + rad * Math.cos(ang)
        position.y = origY + rad * Math.sin(ang)
        if (!isPenDown) return
        var ctx = canvas.getContext('2d')
        ctx.beginPath()
        ctx.arc(origX, origY, rad, 0, ang)
        ctx.stroke()
        return self
    }
    self.home = function () {
        position.x = canvas.width / 2 + 0.5
        position.y = canvas.height / 2 + 0.5
    }

    self.backward = function (distance) {
        self.forward(-distance)
        return self
    }
    self.stamp = function (size) {
        var ctx = canvas.getContext('2d')
        ctx.save()
        ctx.strokeStyle = ctx.fillStyle = self.penStyle
        ctx.lineWidth = self.penWidth
        ctx.translate(position.x, position.y)
        ctx.rotate(-radians(rotation))
        triangle(ctx, size || 10, (size || 10) * 1.5)
        isPenDown ? ctx.fill() : ctx.stroke()
        ctx.restore()
        return self
    }
    self.left = self.lt = function (deg) {
        rotate(deg)
        return self
    }
    self.right = self.rt = function (deg, cb) {
        rotate(-deg)
        return self
    }
    self.animate = function (f, ms) {
        return setInterval(f, ms)
    }
    self.clear = function () {
        var ctx = canvas.getContext('2d')
        ctx.save()
        ctx.setTransform(1, 0, 0, 1, 0, 0)
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        ctx.restore()
    }
}

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
        console.log(input)
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
env.def('ሳይን', function (k, cell, car) {
    k((cell.car = car))
})
env.def('ኮስ', function (k, cell, car) {
    k((cell.car = car))
})
env.def('ብቀ!', function (k, cell, cdr) {
    k((cell.cdr = cdr))
})

env.def('ቤት', function (k, turtle) {
    k(turtle.home())
})
env.def('ክብ', function (k, turtle, rad, angle) {
    k(turtle.circle(rad, angle))
})
env.set(
    'ባዶ',
    (() => {
        NILL.car = NILL
        NILL.cdr = NILL
        return NILL
    })()
)

var inAmharic = [
    'ፍፁም',
    '#ኮስ',
    '#ሳይን',
    '#ታካኪ',
    '#ታካኪ2',
    'ጣርያ',
    'ኮስ',
    'አርቢ',
    'መሬት',
    'ሎግ',
    'ከፍተኛ',
    'ዝቅተኛ',
    'ፓወር',
    'በዘፈቀደ',
    'አጠጋጋ',
    'ሳይን',
    'ካሬ-የስር',
    'ታካኪ',
]
;[
    'abs',
    'acos',
    'asin',
    'atan',
    'atan2',
    'ceil',
    'cos',
    'exp',
    'floor',
    'log',
    'max',
    'min',
    'pow',
    'random',
    'round',
    'sin',
    'sqrt',
    'tan',
].forEach(function (n, index) {
    env.def(inAmharic[index], function (k) {
        k(Math[n]([].slice.call(arguments, 1)))
    })
})

env.def('ኤሊ', function (k) {
    Execute(k(new TinyTurtle()), [])
})
env.def('መ-ቀለም', function (k, turtle, r, g, b, a) {
    k((turtle.penStyle = `rgba(${r}, ${g}, ${b}, ${a})`))
})
env.def('ውፍረት', function (k, turtle, penWidth) {
    Execute(k((turtle.penWidth = penWidth)), [false])
})
env.def('ወደፊት', function (k, turtle, dist) {
    k(turtle.forward(dist))
})
env.def('ተመለስ', function (k, turtle, dist) {
    k(turtle.backward(dist))
})
env.def('ራድ', function (k, r) {
    k(2 * Math.PI * (r / 360))
})
env.def('ግራ', function (k, turtle, deg) {
    k(turtle.left(deg))
})
env.def('ቀኝ', function (k, turtle, deg) {
    k(turtle.right(deg))
})
env.def('አንሳ', function (k, turtle, deg) {
    k(turtle.penUp())
})
env.def('አስቀምጥ', function (k, turtle, deg) {
    k(turtle.penDown())
})
env.def('አኒሜት', function (k, f, ms) {
    Execute(k(setInterval(f, ms)), [false])
})
env.def('አትም', function (k, turtle, size) {
    k(turtle.stamp(size))
})
env.def('አጥፋ', function (k, turtle) {
    k(turtle.clear())
})

env.set('ፓይ', Math.PI)

const runCode = (code) => {
    var ast = parse(TokenStream(StreamObject(code)))
    Execute(evaluate, [ast, env, function () {}])
}

const clearConsole = () => {
    state.terminal.Reset()
}

export default { state, edit, runCode, setTerminal, clearConsole }
