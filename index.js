/*
1 meter = 3.281 feet
1 liter = 0.264 gallons
1 kg = 2.204 pounds
*/

document.getElementById("button").addEventListener("click", (event) => {
  event.preventDefault()

  const input = document.getElementById("input").valueAsNumber

  const feetPerMeter = 3.281
  const gallonsPerLiter = 0.264
  const poundsPerKg = 2.204

  const feet = (input * feetPerMeter).toFixed(3)
  const meters = (input / feetPerMeter).toFixed(3)
  const gallons = (input * gallonsPerLiter).toFixed(3)
  const liters = (input / gallonsPerLiter).toFixed(3)
  const pounds = (input * poundsPerKg).toFixed(3)
  const kg = (input / poundsPerKg).toFixed(3)

//Make turnary for meter vs meters or foot vs feet 
const meterUnit = input === 1 ? "meter" : "meters"
const feetUnit = input === 1 ? "foot" : "feet"

  document.getElementById("length").textContent = `${input} ${meterUnit} = ${meters} | ${input} ${feetUnit} = ${feet} feet`
  document.getElementById("volume").textContent = `${input} liter(s) = ${liters} | ${input} gallons(s) = ${gallons} gallon(s)`
  document.getElementById("mass").textContent = `${input} Kilograms(s) = ${kg} | ${input} pounds(s) = ${pounds} pounds(s)`
})