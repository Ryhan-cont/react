export const updateNest = (nest, key, val) =>{
    let varArr = key.split('.')

    var newState = nest instanceof  Array ? [...nest] : Object.assign({}, nest);   

    var targeting = newState
    for(var i=1; varArr.length>i; i++){
        if(i+1 === varArr.length){
            targeting[varArr[i]] = val
        }else{
            targeting = targeting[varArr[i]]
        }
    }
    return newState
}