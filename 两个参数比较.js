let array1 = '成品尺寸:100.00_100.00_100.00;展开尺寸:415.00_330.00;印刷:双面印刷;正面印刷颜色:多色_CMYK;反面印刷颜色:多色_CMYK;表面处理:哑胶;背面处理:无;预折:否;正面专色:4,1,2,3,4;反面专色:4,1,2,3,4;1;粘合:自动粘1处;纸张材质:单铜纸_350;包装服务:盒子扎皮筋;外箱套蛇皮袋:否;';
let array2 = '成品尺寸:100.00_100.00_100.00;展开尺寸:415.00_330.00;印刷:双面印刷;正面印刷颜色:多色_CMYK;反面印刷颜色:多色_CMYK;表面处理:哑胶;背面处理:无;预折:否;正面专色:4,1,2,3,4;反面专色:4,1,2,3,4;1;粘合:自动粘1处;纸张材质:单铜纸_350;包装服务:盒子扎皮筋;外箱套蛇皮袋:否;11';
 // Convert strings to arrays
let arr1 = array1.split(';');
let arr2 = array2.split(';');
 // Convert arrays to objects
let obj1 = [];
let obj2 = [];
arr1.forEach(item=>{
    let [key, value] = item.split(':');
    obj1.push({
        name:key,
        content:value
    })
})

arr2.forEach(item=>{
    let [key, value] = item.split(':');
    obj2.push({
        name:key,
        content:value
    })
})

obj2.forEach(i =>{
    if(!obj1.some(item =>item.name == i.name)){
        i.status=1
    }
})

console.log('arr1',arr1);
console.log('arr2',arr2);
console.log('obj1',obj1);
console.log('obj2',obj2);

// let arr = [{
//     id: 111,
//     name: 5555
// }, {
//     id: 22,
//     name: 5555
// }]
// let arr1 = [{
//     id: 111,
//     name: 5555
// }, {
//     id: 22,
//     name: 5555
// }, {
//     id: 33,
//     name: 5555
// }]
// arr1.forEach(i =>{
//     if(!arr.some(item =>item.id == i.id)){
//       i.status=1
//     }
// })

// console.log('arr1',arr1);