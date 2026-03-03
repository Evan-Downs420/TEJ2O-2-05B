/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Evan
 * Created on: March 2026
 * This program show the temperature in kelvin
*/

basic.clearScreen()
basic.showIcon(IconNames.Happy)

//variables
let temperatureInCelsius: number
let temperatureInKelvin: number

input.onButtonPressed(Button.A, function () {
    //get temperature (input)
    temperatureInCelsius = input.temperature()
    //process
    temperatureInKelvin = (temperatureInCelsius + 273.15)
    temperatureInKelvin = Math.round(temperatureInKelvin)

    //output answer
    basic.clearScreen()
    basic.showString("The temperature is:" + temperatureInKelvin.toString() + 'K')
})
