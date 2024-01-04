
let arr = [1, 2, 3, 4, 5, 6, 7, 21, 43, 234, 986865, 32, 12122, 3435465];

let empty = []


// function addoreven(x) {

//     for (i = 0; i < arr.length; i++) {

//         let obj = {}

//         if (x[i] % 2 == 0) {

//             obj[x[i]] = "even"

//         }

//         else {

//             obj[x[i]] = "odd"

//         }
//         // console.log(obj)
//         empty.push(obj)

//     }

//     console.log(empty)

// } addoreven(arr)


function addoreven(x) {

    let obj = {}

    x.map((value) => {

        if (value % 2 == 0) {

            obj[value] = "even"


        }
        else {
            obj[value] = "odd"
        }


    })

    console.log(obj)




}
addoreven(arr)


// function addOrEven(number) {

//     if (number % 2 == 0) {
//         return "even"
//     }
//     return "odd"
// }
// for (i = 0; i < arr.length; i++) {

//     let obj = {}

//     obj[arr[i]] = addOrEven(arr[i])

//     empty.push(obj)


// }

// console.log(empty)






