// Sets open and close angles.
let angle = 0
let opened = 40
let closed = 50
// Pino 0 is light sensor.
basic.forever(function () {
    led.plotBarGraph(
    input.lightLevel(),
    0
    )
    pins.servoWritePin(AnalogPin.P0, input.lightLevel())
})
// Angle for servo to move.
basic.forever(function () {
    led.plotBarGraph(
    input.lightLevel(),
    0
    )
    angle = pins.map(
    input.lightLevel(),
    30,
    50,
    opened,
    closed
    )
    pins.servoWritePin(AnalogPin.P0, angle)
})
