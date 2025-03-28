control.onEvent(EventBusSource.MICROBIT_ID_BUTTON_A, EventBusValue.MICROBIT_BUTTON_EVT_UP, function () {
    // Stops left motor
    radio.sendNumber(0)
})
control.onEvent(EventBusSource.MICROBIT_ID_BUTTON_A, EventBusValue.MICROBIT_BUTTON_EVT_DOWN, function () {
    // Go forwards (left)
    radio.sendString("forward_left")
})
control.onEvent(EventBusSource.MICROBIT_ID_BUTTON_B, EventBusValue.MICROBIT_BUTTON_EVT_UP, function () {
    // Stops right motor
    radio.sendNumber(2)
})
control.onEvent(EventBusSource.MICROBIT_ID_BUTTON_B, EventBusValue.MICROBIT_BUTTON_EVT_DOWN, function () {
    // Go forwards (right)
    radio.sendString("forward_right")
})
radio.setGroup(1)
basic.showIcon(IconNames.Yes)
