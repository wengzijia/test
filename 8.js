const handleRemoveRepeat = (arr) => arr.filter((item, index) => {
    console.log(arr.indexOf(item, 0),index);
    console.log(arr.indexOf(item, 0) === index);
    // 0:从0下标开始找,找到返回所在的下标位置
    if(arr.indexOf(item, 0) === index){
        console.log('item',item);
    }
});

//去重
// const handleRemoveRepeat = (arr) => console.log(arr.filter((item,index) => arr.indexOf(item,0) === index));

handleRemoveRepeat([1,1,2,3,2,6])

let reg = /^https?:\/\/(.+\/)+.+(\.(gif|png|jpg|jpeg|webp|svg|psd|bmp|tif))$/i;