let arr = ['1','2','4','3','5'];
let arr2 = ['1','2','5'];
let newArr = arr2.filter(item => arr.includes(item))
console.log(newArr)

let array = [{a:1},{a:2}]
let newArray = array.map(item=>({
    ...item,num:item.a + 1
}))
console.log(newArray);