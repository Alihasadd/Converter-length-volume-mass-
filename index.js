/*
1 meter = 3.281 feet
1 liter = 0.264 gallons
1 kg = 2.204 pounds

Figma file
https://www.figma.com/design/cqtGul0V8RFXY4vTcIv1Kc/Unit-Conversion?node-id=0-13&t=ubaxzGgExbPCe6Pb-0
*/

const defaultInput = input.textContent;
console.log((Number(defaultInput).textContent = 1));

document.getElementById("button").addEventListener("click", (event) => {
  event.preventDefault();

  const input = document.getElementById("input").valueAsNumber;

  const validInput = isNaN(input) ? 1 : input; //if input is not a number, default to 1

  const feetPerMeter = 3.281;
  const gallonsPerLiter = 0.264;
  const poundsPerKg = 2.204;

  const feet = (validInput * feetPerMeter).toFixed(3);
  const meters = (validInput / feetPerMeter).toFixed(3);
  const gallons = (validInput * gallonsPerLiter).toFixed(3);
  const liters = (validInput / gallonsPerLiter).toFixed(3);
  const pounds = (validInput * poundsPerKg).toFixed(3);
  const kg = (validInput / poundsPerKg).toFixed(3);

  //Make ternary for meter vs meters or foot vs feet
  const meterUnit = validInput === 1 ? "meter" : "meters";
  const feetUnit = validInput === 1 ? "foot" : "feet";
  const gallonUnit = validInput === 1 ? "gallon" : "gallons";
  const literUnit = validInput === 1 ? "liter" : "liters";
  const kiloUnit = validInput === 1 ? "kilogram" : "kilogram";
  const poundUnit = validInput === 1 ? "pound" : "pounds";

  document.getElementById(
    "length"
  ).textContent = `${validInput} ${meterUnit} = ${feet} ${feetUnit} | ${validInput} ${feetUnit} = ${meters} meters`;
  document.getElementById(
    "volume"
  ).textContent = `${validInput} ${literUnit} = ${gallons} ${gallonUnit} | ${validInput} ${gallonUnit} = ${liters} ${literUnit}`;
  document.getElementById(
    "mass"
  ).textContent = `${validInput} ${kiloUnit} = ${kg} ${poundUnit} | ${validInput} ${poundUnit} = ${pounds} ${kiloUnit}`;
});
