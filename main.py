def on_button_pressed_a():
    global points
    points += 1
    showNumber(0, points)
input.on_button_pressed(Button.A, on_button_pressed_a)

def showNumber(row: number, num: number):
    global factor, foo, brightness
    for index in range(5):
        factor = index + 1
        digit = Math.idiv(num % (factor * 10), factor)
        foo = num % factor
        brightness = Math.map(foo, 0, 9, 0, 255)
        led.plot_brightness(index, 0, brightness)
        serial.write_number(brightness)
        serial.write_line("")
brightness = 0
foo = 0
factor = 0
points = 0
led.plot_brightness(3, 3, 41)
points = 14

def on_forever():
    pass
basic.forever(on_forever)
