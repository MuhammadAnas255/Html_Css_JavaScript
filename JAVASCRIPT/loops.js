console.log("I am a Loops")

// javascript ma 5 loops hota ha 

// 1. for loop
// 2. for in loop
// 3. for of loop
// 4. while loop
// 5. do while loop
console.log("        ")
console.log("For Loop")

for(let i = 0; i < 100; i++){
    console.log(i)
}

console.log("        ")
console.log("For in Loop")

console.log("        ")
let a = {
    name: "Anas",
    role: "Programer",
    company: "Anas AI"
}


for (const key in a) {
        const element = a[key];
    console.log(key, element)
}

console.log("        ")
console.log("For of Loop")

for (const c of "Anas") {
    console.log(c)
}


console.log("        ")
console.log("While Loop")

// while loop ma ya hota ha ka wo phala consition check karta ha agar condition true hoge to aga print kara ga agar condition false ho gaye ho to print nahi kara ga

let j = 0;

while (j < 100) {
    console.log(j)
    j++;
}


// while loop maya hota ha ka phala wo print karta ha 1 dafa value ko phir check karta ha ka consition true ha agar true hage to aga print kara ga agar false hoge to print nahi kara ga  

let r = 2;
do {
    console.log(r)
} while (r<5);
