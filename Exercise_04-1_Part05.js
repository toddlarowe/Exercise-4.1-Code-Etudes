//Exercise 4.1 PART 5
//Write a function that takes an object parameter and prints out the content of the object nicely. Each line of output, from console.log, should show each key and its associated value.

function contents() {

  let tube_amp1 = { model: "Marshall JCM800", wattage: "100W"},
      tube_amp2 = { model: "Fender '65 Twin Reverb", wattage: "85W"};

  console.log("Amplifier Model: " + tube_amp1.model + " --- Total Wattage: " + tube_amp1.wattage);
  console.log("Amplifier Model: " + tube_amp2.model + " --- Total Wattage: " + tube_amp2.wattage);
}

console.log(contents());
