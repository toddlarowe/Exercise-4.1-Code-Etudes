//Exercise 4.1 PART 1
//Write a function that takes an array of integers and returns the average value of all the elements.

function ave_value (total, one_number) {

let numbers = [2,4,5,7,11], //ave_value is 5.8
    result;

    result = numbers.reduce((total, one_number) => total + one_number, 0);
    result = result / numbers.length

console.log(result);

}

console.log(ave_value())

//it works fine without being in a function, and I'm not 100% sure about the values for the function, so I get a correct answer plus undefined. Harumph. At least there's a correct answer in there somewhere :)
