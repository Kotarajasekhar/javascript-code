// highest marks?

// const input = [
//   {
//     name: "Student1",
//     mark: 70
//   },
//   {
//     name: "student2",
//     mark: 80
//   },
//   {
//     name: "student3",
//     mark: 90
//   },
//   {
//     name: "student4",
//     mark: 100
//   }
// ];

// function max(input) {
//   var x;
//   for (let i = 0; i < input.length; i++) {
//     for (let j = i + 1; j < input.length; j++) {
//       if (input[i].mark > input[j].mark) {
//        x= input[i].mark;
//       } else {
//        x= input[j].mark;
//       }
//     }
//   }
//   return x
// }
// console.log(max(input),'test');

//converting integer to array

const input = 235283
let res = input.toString()
console.log(res)
let res1=res.split('')
console.log(res1)
let res2 = res1.map((item) => {
  return Number(item)
})
console.log(res2,'est')
