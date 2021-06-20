function tick () {
    points += generators * 1
    generators += generators2 * 1
    showAll()
}
function showAll () {
    showNumber(0, points)
    showNumber(1, generators)
    showNumber(2, generators2)
}
input.onButtonPressed(Button.A, function () {
    points += 1
    showNumber(0, points)
})
input.onButtonPressed(Button.B, function () {
    if (generators > 10) {
        generators += -10
        generators2 += 1
    }
    if (points >= 10) {
        points += -10
        generators += 1
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
let generators2 = 0
let generators = 0
let points = 0
music.startMelody(music.builtInMelody(Melodies.BaDing), MelodyOptions.Once)
basic.forever(function () {
	
})
control.inBackground(function () {
    while (true) {
        basic.pause(1000)
        tick()
    }
})
