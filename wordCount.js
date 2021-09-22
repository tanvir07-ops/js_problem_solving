var text = "I     love Bangladesh"
var count = 0;
for(var i=0;i<text.length;i++){
  if(text[i]==" " && text[i-1]!=" "){
    //   eikhane output 2 ei hobe karon eikhane love and bangladesh holo word tai output hobe 2.
    // ar keno loop ti eivabe chalalam jokhon white space pabe and sei white space er age jdi kono white space nah thake tokhon ei count++ kore dibo.! er jonnei output 2 hobe ei jaygay karon I er pore ekti space paise and oi ekti space er age abar I ase mane e kono faka space nai! tarpore jotogula space ei ase I er pore sob gular agei abar space ase kono letter nai tai eikhane love ekti word and love er pore ekti space ase and oi space er age abar love er e ase tai count++ hoye 2 hoye jabe and bangladesh name er ekti word pabe tai er output hobe 2.
      count++;
  }


}
console.log(count)