let numInput = document.getElementById("num-input")
const btnConvert = document.getElementById("btn-convert")


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
    
}


