function isPrime(n){
    // nicher loop ti keno 2 theke suru hoise and n er ag obdi cholse ! karon amra jani je prime hoite hoile take 1 ar nijer number baad e onno sob number diye baag kora jabe nah! tai loop ti eivabe suru hoise! 

   for(i=2;i<n;i++){

    if(n%i==0){
        return `${n} is not a prime number`;
    }
   }
   return `${n} is a prime number`;





}
console.log(isPrime(8))