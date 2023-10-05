const foo = require('@hossein-zamanian/foo')

function trace(value) {
    console.trace(value)
}

function boo() {
    trace('hi from boo')
    foo()
}

boo()