// arrow function

const phone = (brand) => {
    console.log("My phone is " + brand);
};
phone("iphone 14 Pro");

let student = (name, course, school) => {
    console.log("My name is " + name + " and I am learning " + course + " from " + school)
}
student("Ali", "Javascript", "Dugsiiye")

//  global scope

let message = "I am learning global scope"

function showMessage(){
    console.log(message)
}
showMessage()

//  local scope

function newYear(){
    const year = 2026;
    console.log(year);
}
newYear()

// block scope

{
    let myBook = "48 laws of power"
    console.log(myBook)
}
console.log(myBook)
