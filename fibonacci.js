// // function printFibo(n){
// //    var count = 0, fibo, first = 0, second = 1;
// //    while(n>count){
// //        if(count<=1){

// //           fibo = count;

// //        }

// //        else{
// //           fibo = first+second;
// //           first = second;
// //           second = fibo;
    

// //        }




      


      

// //        count++;
// //        console.log(`${fibo }`)
// //    }
  






// // }
// // printFibo(5)


// // another code for good practises:
// function printFibo(n){
//   var count = 0, fibo, first = 0, second = 1;
//   while(n>count){
//       if(count<=1){
//           fibo = count;
//       }
//       else{
//           fibo = first+second;
//           first = second;
//           second = fibo;
//       }
//       count++;
//       console.log(`${fibo }`)
//   }


// }

// printFibo(5)


// fibo using for loop:

// var fibo,first = 0, second = 1;
// console.log(first+"\n"+second)

// for(var i= 2;i<10;i++){
//     fibo = first+second;
//     first = second;
//     second = fibo;
   
//     console.log(fibo)

// }



// fibo using for loop and function:
// function printFibo(n){

//     var fibo,first = 0, second =1;
//     // loop er ager 2 ti console.log hocceh 0 and 1 print korar jonne! thn nicher loop hocceh 0,1 er jogfol er jonne and eita i=2 theke suru hoise karon amra first ar second (0,1) nisi tai
//     console.log(first)
//     console.log(second)
//     for(var i = 2;i<n;i++){
//          fibo = first+second;
//          first = second;
//          second = fibo;
//          console.log(fibo)
//     }
 
// }

// printFibo(5)



// nicher ti ekhon recursive function diye korbo:
// function fibonacci(n) {
//     if(n===0){
//         return [0]
//     }
//     if (n === 1) {
//       return [0, 1];
//     } else {
//         // var fibo = fibonacci(n-1); er means holo je jdi n=2 hoy tar ager mane (2-1) = 1 er jonne [0,1] hobe!
//         //  var nextElement = fibo[n-1]+fibo[n-2] er means holo [0,1] ke jog kora!
//         // thn ei jogfolke(0+1 = 1) abr push kora!
//         // tarpor fibo ti return kora;
//       var fibo = fibonacci(n-1);
//       var nextElement = fibo[n-1]+fibo[n-2]
//       fibo.push(nextElement)
//       return fibo;
//     }
//   };
  
//   console.log(fibonacci(2));




// another recursive code for good practises:

function printFibo(n){
   if(n===0){
       return [0];
   }

   else if(n===1){
       return [0,1];
   }

   else{
       
      var fibo = printFibo(n-1);
      var sumPrevFibo = fibo[n-1]+fibo[n-2];
      fibo.push(sumPrevFibo)
      return fibo; 



   }




}

console.log(printFibo(3));