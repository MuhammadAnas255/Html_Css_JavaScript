console.log("I am a Function")


function nice(name) {
    console.log("Hey " + name + " I am a Good!")
    console.log("Hey " + name + " I am not Good!")
    console.log("Hey " + name + " I am full Good!")
    console.log("Hey " + name + " I am Very Good!")
}

// nice("Anas")
// nice("Ahmed")



// agar hama number result ma cahiya too hama return lagana parhaga warna result ma show nahi kara ga or c = 3 ka matlab ha ka c ke jo defolt value ha wo 3 raha ge matlab jo bhe a or b plus ho ga us ma 3 defult plus ho ka aya ga    
function sum(a, b, c = 3) {
    // console.log(a + b)
    return a + b + c
}

result1 = sum(4, 6)
result2 = sum(7, 6)
result3 = sum(4, 3)

console.log("The Sum of the Number is", result1)
console.log("The Sum of the Number is", result2)
console.log("The Sum of the Number is", result3)



console.log("        ")
console.log("Ya arrow function ka code ha ")

const func1 = (x)=>{
    console.log("I am an arrow function", x)
}

func1(45);
func1(67);
func1(23);































