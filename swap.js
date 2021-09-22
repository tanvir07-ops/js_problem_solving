function printSwap(a,b){
  console.log("Before swapping a = "+ a + ",b = "+b)

  var temp;
  temp = a;
  a = b;
  b = temp;

  console.log("After swapping "+"a = "+a+" b = "+b)


}

// printSwap(2,3)



// nicher swap ti holo javaScript er swap process:
// var x = 7;
// var y = 5;
// [x,y] = [y,x]

// console.log("After swapping = "+"x = "+x+" y = "+y)


// nicher code ti holo swap er arekti rules:
var x = 6;
var y = 5;
x = x+y;   // x = 11;
y = x-y;  // y = 11-5 = 6;
x = x-y;  // x = 11-6 = 5;

console.log("After swapping = "+"x = "+x+",y ="+y)