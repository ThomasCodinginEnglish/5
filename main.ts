input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Yes)
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.Asleep)
})
basic.forever(function () {
    music.play(music.stringPlayable("C5 B A G F E D C ", 269), music.PlaybackMode.UntilDone)
})
