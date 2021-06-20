input.onButtonPressed(Button.A, function () {
    points += 1
    showNumber(0, points)
})
function showNumber (row: number, num: number) {
    let digit: number;
for (let index = 0; index <= 4; index++) {
        factor = 10 ** index
        digit = Math.idiv(num % (factor * 10), factor)
        brightness = Math.map(digit, 0, 9, 0, 255)
        led.plotBrightness(index, 0, brightness)
    }
}
let brightness = 0
let factor = 0
let points = 0
let foo = 0
led.plotBrightness(3, 3, 41)
points = 136
basic.forever(function () {
	
})
