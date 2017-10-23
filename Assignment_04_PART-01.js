/*Assignment 04 PART 1: Make a set
do NOT use array functions
*/

//function 1: add a value to the "Set" (array)
function myset_add(data, new_value) {

  data.push(new_value);
  return data;
}

console.log(myset_add(["John", "Paul", "George", "Ringo"], "Pete"));

//function 2: Remove a value from the "Set" (array)
function myset_remove(data, remove_value) {

  del = data.indexOf(remove_value)
    delete data[del];
    return data;
}

console.log(myset_remove(["John", "Paul", "George", "Ringo", "Pete"], "Pete"))

//I'm not sure about eliminating the "<1 empty item>" but otherwise it seems to work...

//function 3:
function myset_has(data, test_value) {

  result = data.indexOf(test_value);
  if(result >-1) {
    return true;
  } else {
    return false
  }
}

console.log(myset_has(["John", "Paul", "George", "Ringo"], "Pete"));

//function 4: Determine the size of the "Set" (array)
function myset_size(data) {

  result = data.length;
  return result;
}

console.log(myset_size(["John", "Paul", "George", "Ringo"]));

//function 5: forEach?
function myset_forEach(data, callback_function) {

}
//I'm not really sure what this is supposed to do... 

console.log(myset_forEach(["John", "Paul", "George", "Ringo"], "Pete"));
