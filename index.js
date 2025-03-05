/*
1 meter = 3.281 feet
1 liter = 0.264 gallons
1 kg = 2.204 pounds

Figma file
https://www.figma.com/design/cqtGul0V8RFXY4vTcIv1Kc/Unit-Conversion?node-id=0-13&t=ubaxzGgExbPCe6Pb-0
*/


const defaultInput = input.textContent
console.log(Number(defaultInput).textContent = 1)


document.getElementById("button").addEventListener("click", (event) => {
  event.preventDefault()
  
  const input = document.getElementById("input").valueAsNumber
  
  const validInput = isNaN(input) ? 1 : input;

  const feetPerMeter = 3.281;
  const gallonsPerLiter = 0.264;
  const poundsPerKg = 2.204;

  const feet = (input * feetPerMeter).toFixed(3)
  const meters = (input / feetPerMeter).toFixed(3)
  const gallons = (input * gallonsPerLiter).toFixed(3)
  const liters = (input / gallonsPerLiter).toFixed(3)
  const pounds = (input * poundsPerKg).toFixed(3)
  const kg = (input / poundsPerKg).toFixed(3)

//Make turnary for meter vs meters or foot vs feet 
const meterUnit = input === 1 ? "meter" : "meters"
const feetUnit = input === 1 ? "foot" : "feet"
const gallonUnit = input === 1 ? "gallon" : "gallons"
const literUnit = input === 1 ? "liter" : "liters"
const kiloUnit = input === 1 ? "kilogram" : "kilogram"
const poundUnit = input === 1 ? "pound" : "pounds"

  document.getElementById("length").textContent = `${input} ${meterUnit} = ${feet} ${feetUnit} | ${input} ${feetUnit} = ${meters} meters`
  document.getElementById("volume").textContent = `${input} ${literUnit} = ${gallons} ${gallonUnit} | ${input} ${gallonUnit} = ${liters} ${literUnit}`
  document.getElementById("mass").textContent = `${input} ${kiloUnit} = ${kg} ${poundUnit} | ${input} ${poundUnit} = ${pounds} ${kiloUnit}`
  
})