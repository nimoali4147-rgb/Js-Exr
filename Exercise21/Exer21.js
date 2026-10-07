// let num = [11, 10, 4, 5, 6,23,56,9]
// let odd = num.filter((number) => number % 2 == 1)
// console.log(odd)


// const number  = [1,2,3,4,5,6]
//  const mult = number.reduce((total, num) => total * num, 2)
//  console.log(mult)\\

// const students = ["Amina", "Hassan", "Nimo", "Ahmed", "Fatima"];
// students.forEach((student) =>{
//     console.log("student:", student)
// })

const notifications = [
    "New message received",
    "Your order has shipped",
    "Your payment was successful",
    "New course available"
];

notifications.forEach((notification) => {
    console.log(notification)
})

// const numbers = [2, 4, 6, 8, 10];
// let Number = numbers.map((num) => num * 2)
//     console.log(Number)
    
const prices = [1000, 2500, 3000, 4500];

let increse =  prices.map((price) => price +(price* 0.1));
console.log(increse)

const ages = [12, 18, 25, 15, 30, 10, 22];
let age = ages.filter((ag2) => ag2 >= 18)
    console.log(age)

const products = [
    { name: "Laptop", price: 80000, inStock: true },
    { name: "Phone", price: 40000, inStock: false },
    { name: "Mouse", price: 2500, inStock: true },
    { name: "Keyboard", price: 5000, inStock: true }
];

let product = products.filter((pro) => pro.inStock )
console.log(product)


const numbers = [10, 20, 30, 40];

let total = numbers.reduce((tota, num) => tota + num  )
console.log(total)

const cart = [
    { name: "Laptop", price: 80000 },
    { name: "Mouse", price: 2500 },
    { name: "Keyboard", price: 5000 }
];

let totalPrice = cart.reduce((total, item) => total + item.price, 0)
console.log(totalPrice)


const students = [
    { name: "Amina", marks: 80 },
    { name: "Hassan", marks: 45 },
    { name: "Nimo", marks: 90 },
    { name: "Ahmed", marks: 30 },
    { name: "Fatima", marks: 75 },
];

let passStdn = students.filter((std) => std.marks >= 50 )
console.log(passStdn)

let studentName = passStdn.map((std) => std.name)
console.log(studentName)