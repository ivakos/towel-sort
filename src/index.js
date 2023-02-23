module.exports = function towelSort(array) {
    if(!array) return []
    let result = []
    for(let i = 0; i < array.length; i++){
        if(i % 2 == 0){
            array[i].forEach(el => result.push(el));
        }
        else{
            array[i].sort((a, b) => b - a);
            array[i].forEach(el => result.push(el));
        }
    }
    return result;
}
