//Exercise 4.1 PART 3
//Given an array of objects with "first_name" and "last_name" fields, write a callback for the ".sort" function to sort the names alphabetically by last name. If two last names are the same, then sort those by first name.

let contacts = [];
  contacts.push(["Evans", "Bill"]);
  contacts.push(["Marsalis", "Wynton"]);
  contacts.push(["Blakey", "Art"]);
  contacts.push(["Marsalis", "Branford"]);

contacts.sort(function(a, b){
    if(a < b) return -1;
    if(a > b) return 1;
    return 0;
    return a.contacts.localeCompare(b.contacts);
})

console.log(contacts)

//Holy crap, I think I made it work correctly...
