// Sets open and closes angles.
let opened = 90
let closed = 270
// Servo will automatically move to opened and clsoed angles.
basic.forever(function () {
    servos.P0.setAngle(closed)
    basic.pause(1000)
    servos.P0.setAngle(opened)
    basic.pause(1000)
})
