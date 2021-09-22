// var arr = [12,354,78,90]
// // kono array er modde highest number ber korar code:
// // Math.max(...arr)
// // eikhane arr er name er age 3 ti fullstop deoaa ei laagbe!

// console.log(Math.max(...arr))



// traditional rules e array er max_size:
var arr = [23,24,67,89,95,1000,45]
var max = arr[0]
for(var i = 0;i<arr.length;i++){
  if(arr[i]>max){
      max = arr[i];
  }
 


}
console.log(`${max} is the maximum number`)