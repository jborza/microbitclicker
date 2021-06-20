function tick () {
    points += generators * 1
    showAll()
}
function showAll () {
    showNumber(0, points)
    showNumber(1, generators)
}
input.onButtonPressed(Button.A, function () {
    points += 1
    showNumber(0, points)
})
input.onButtonPressed(Button.B, function () {
    if (points >= 10) {
        generators += 1
        points = points - 10
    }
    showAll()
})
function showNumber (row: number, num: number) {
    let digit: number;
for (let index = 0; index <= 4; index++) {
        factor = 10 ** index
        digit = Math.idiv(num % (factor * 10), factor)
        brightness = Math.map(digit, 0, 9, 0, 255)
        led.plotBrightness(index, row, brightness)
    }
}
let brightness = 0
let factor = 0
let generators = 0
let points = 0
points = 0
generators = 0
basic.forever(function () {
	
})
control.inBackground(function () {
    while (true) {
        basic.pause(1000)
        tick()
    }
})
