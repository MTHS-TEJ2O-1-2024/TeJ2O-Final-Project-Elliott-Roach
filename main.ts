/* Copyright (c) 2020 MTHS All rights reserved
 * Created by: Elliott Roach
 * Created on: Jan 2025
 * This program controls a remote control car
*/

//setup
let receivdCommand: number = 0
radio.setGroup(88)

//sending forward
input.onButtonPressed(Button.AB, function () {
    basic.clearScreen()
    radio.sendNumber(1)
    basic.showString("F")
})

//sending left
input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    radio.sendNumber(3)
    basic.showString("L")
})

//sending right
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
    radio.sendNumber(5)
    basic.showString("R")
})
//sending stop
input.onGesture(Gesture.Shake, function () {
    basic.clearScreen()
    radio.sendNumber(0)
})

//receiving
radio.onReceivedNumber(function (receivedNumber: number) {
    receivdCommand = receivedNumber
})

//going forward
basic.forever(function () {
    if (receivdCommand == 1) {
        robotbit.StpCarMove(1, 51)
    }

    //going right
    if (receivdCommand == 5) {
        robotbit.StpCarTurn(5, 51, 125)
    }

    //going left
    if (receivdCommand == 3) {
        robotbit.StpCarTurn(-5, 51, 125)
    }
})
