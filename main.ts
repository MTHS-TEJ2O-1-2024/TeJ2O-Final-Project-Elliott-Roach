/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Elliott Roach
 * Created on: Jan 2025
 * This program controls a remote control car
*/

//setup
let resevedCommand: number = 0
radio.setGroup(88)

//sending forward
input.onButtonPressed(Button.AB, function () {
    radio.sendNumber(1)
})

//sending left
input.onButtonPressed(Button.A, function () {
    radio.sendNumber(3)
})

//sending right
input.onButtonPressed(Button.B, function () {
    radio.sendNumber(5)
})
//sending stop
input.onGesture(Gesture.Shake, function () {
    radio.sendNumber(0)
})

//reseving
radio.onReceivedNumber(function (receivedNumber: number) {
    resevedCommand = receivedNumber
})

//going forward
basic.forever(function () {
    if (resevedCommand == 1) {
        robotbit.StpCarMove(1, 51)
    }

    //going right
    if (resevedCommand == 5) {
        robotbit.StpCarTurn(5, 51, 125)
    }


    //going left
    if (resevedCommand == 3) {
        robotbit.StpCarTurn(-5, 51, 125)
    }
})
