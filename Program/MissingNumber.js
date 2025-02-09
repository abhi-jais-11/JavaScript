// find the missing number in array

function missingNumber(arr){
    let n=arr.length+1;
    let eXsum=(n*(n+1)/2);
    return eXsum - arr.reduce((pr,cr)=>pr+cr);
}

let res = missingNumber([1,2,4,3,5,8,6,9,10]);
console.log(res);
 