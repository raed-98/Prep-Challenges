// input : [12,32,22,45,78,12,50]
//output : 78
const findMax = (arr){ 
    let max;  
    let  max= arr[0];
    for(let r=0;r <arr[0];r++)
    if (arr[r]>=max){
        max=arr[r];
    }
    return max;