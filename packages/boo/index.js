const foo = require('@hossein-zamanian/foo')

function logTrace(value) {
    console.trace(value)
}

function boo() {
    logTrace('hi from boo')
    foo()
}

boo()