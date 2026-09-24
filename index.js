let numInput = document.getElementById("num-input")
const btnConvert = document.getElementById("btn-convert")
let lengthEl = document.getElementById("length")
let volumeEl = document.getElementById("volume")
let massEl = document.getElementById("mass")

btnConvert.addEventListener("click", function() {
    let num = Number(numInput.value)
    convertValues(num)
})

function convertValues(value) {
    /*
        1 meter = 3.281 feet
        1 liter = 0.264 gallon
        1 kilogram = 2.204 pound
    */

    const feet = value * 3.281
    const meters = value / 3.281
    const gallons = value * 0.264
    const liters = value / 0.264
    const pounds = value * 2.204
    const kg = value / 2.204

    lengthEl.textContent = `${value} meters = ${feet.toFixed(3)} feet | ${value} feet = ${meters.toFixed(3)} meters`
    volumeEl.textContent = `${value} liters = ${gallons.toFixed(3)} gallons | ${value} gallons = ${liters.toFixed(3)} liters`
    massEl.textContent = `${value} kilos = ${pounds.toFixed(3)} pounds | ${value} pounds = ${kg.toFixed(3)} kilos`
    
}


