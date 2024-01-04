
let a = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."

let arr = a.split(' ')

let arr2 = arr.filter(word => word === "Ipsum")

let final = arr2.length

console.log(final)

// // let arr2 = arr.filter(word => word == "Ipsum")

// // console.log(arr2)

// let arr = a.split(" ")

// let arr2 = arr.filter(word => word == "Ipsum").length

// console.log(arr2)

// for (i = 0; i < 5; i++) {
//     console.log(i, "i");
//     for (j = 0; j < 5; j++) {
//         console.log(j, "j");
//     }
// }

// let arr = [1, 2, 3, 5, 6, 7, 9]
// arr.splice(3, 0, 4)
// arr.splice(7, 0, 8)



// console.log(arr)

// let number = 5;

// for (i = 1; i < = number; i++) {

//     for (j = 1; j < = number; j++) {

//         console.log(j)
//     }


// }

