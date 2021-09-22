var arr = [1,2,3,4,5,6,7]
var sum = 0;
for(var i = 0;i<arr.length;i++){
  
    sum = sum + arr[i];
}

// console.log(sum)



function arraySum(arr){
  var sum = 0;
  for(var i = 0;i<arr.length;i++){
        sum = sum+arr[i];
  }
  console.log(sum);


}
arraySum([1,2,3,4,5])