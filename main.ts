function tick () {
    points += generators[0]
    for (let index = 0; index <= 2; index++) {
        incrementGeneratorsByVal(index, generators[index + 1])
    }
    showAll()
}
function showAll () {
    showNumber(0, points)
    for (let index2 = 0; index2 <= 3; index2++) {
        showNumber(index2 + 1, generators[index2])
    }
}
input.onButtonPressed(Button.A, function () {
    points += 1
    showNumber(0, points)
})
input.onButtonPressed(Button.B, function () {
    if (generators[2] > 10) {
        incrementGeneratorsByVal(2, -10)
        incrementGeneratorsAt(3)
    }
    if (generators[1] > 10) {
        incrementGeneratorsByVal(1, -10)
        incrementGeneratorsAt(2)
    }
    if (generators[0] > 10) {
        incrementGeneratorsByVal(0, -10)
        incrementGeneratorsAt(1)
    }
    if (points >= 10) {
        points += -10
        incrementGeneratorsAt(0)
    }
    showAll()
})
function incrementGeneratorsAt (idx: number) {
    generators[idx] = generators[idx] + 1
}
function showNumber (row: number, num: number) {
    let digit: number;
for (let index3 = 0; index3 <= 4; index3++) {
        factor = 10 ** index3
        digit = Math.idiv(num % (factor * 10), factor)
        brightness = Math.map(digit, 0, 9, 0, 255)
        led.plotBrightness(index3, row, brightness)
    }
}
function incrementGeneratorsByVal (idx: number, num: number) {
    generators[idx] = generators[idx] + num
}
let brightness = 0
let factor = 0
let points = 0
let generators: number[] = []
music.startMelody(music.builtInMelody(Melodies.BaDing), MelodyOptions.Once)
generators = [0, 0, 0, 0]
points = 0
showAll()
basic.forever(function () {
	
})
control.inBackground(function () {
    while (true) {
        basic.pause(1000)
        tick()
    }
})
