var string = "Rifat hassan!"
var str = ""
// eikhane str er moddei reverse kore rakhbo tai ekti blank string nisi str er moddeh!
// ar eikhane loop ti ke ulta dik theke chaliyechi jate reverse kora jay!

for(var i = string.length-1; i >= 0;i--){
    str = str+string[i]
}
// console.log(str)



// another way to reverse:
var string = "Tanvir Rifat"

var splitString = string.split("")
var reverseString = splitString.reverse()
console.log(reverseString.join(""))