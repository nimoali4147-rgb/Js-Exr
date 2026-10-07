const num= [1, 2, 3]
const num2 = [...num, 4, 5, 6]
console.log(num2)

function mult(...number){
    return number.reduce((x , z) => x * z, 1)
}
console.log(mult(23, 14))


const person = {
    nam: "Nimo",
    age: 22,
    skills: ["HTML", "CSS", "JavaScript"]
};

const pers = [...person.skills, "React"]
console.log(pers)

