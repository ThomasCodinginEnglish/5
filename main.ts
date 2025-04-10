input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Heart)
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.Tortoise)
})
basic.forever(function () {
    music.play(music.stringPlayable("C5 B A G F E D C ", 120), music.PlaybackMode.UntilDone)
})
