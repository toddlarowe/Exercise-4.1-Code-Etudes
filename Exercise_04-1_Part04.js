//Exercise 4.1 PART 4
/*Write a function called "flatten" that takes an array of arrays, then returns a new array with just the value, in the same order. Flatten([[1,2], [3,4]]) should result in [1,2,3,4].
Optional Bonus 1: Don't use any of the built-in array functions.
Optional Bonus 2: Make this work recursively. There's a special function that will be helpful here, "Array.isArray(my_var_here)" that will return true if the parameter is an array.
*/

function flatten(array1, array2) {

  console.log(array1.concat(array2));
}

console.log(flatten([1, 2], [3, 4]))

//Again, I'm not sure about the undefined, but it seems to be working otherwise
