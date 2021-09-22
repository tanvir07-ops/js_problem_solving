// function printFactorial(num){
//  var fact = 1;
//  for(var i = 1;i<=num;i++){
//    fact = fact*i;
//  }
//  console.log(fact);

// }

// printFactorial(5)


// factorial using while loop:

// function printFactorial(num){
//     var i = 1;
//     fact = 1;

//    while(i<=num){
//      fact = fact*i;
//      i++;
     
//    }
//   console.log(`factorial = ${fact}`)

// }

// printFactorial(6)



// factorial_using_recursive_function:


function printFactorial(num){
   if(num===0){
       return 1;

    //    ei if ke bola hoy recursive er base case! karon er maddomei recursive function ti stop hobe! tai eke base case bola hoy!
   }

   else{
       return num*printFactorial(num-1);
   }


}

console.log(printFactorial(5))