// ei code e amra ekti khali array nibo jate check kore dekhte pari je khali array teh upadan gula ager thekei chilo kina jdi thake tahole take add korbo nah ar nah thakei add kobo ete kore khali array teh duplicate value gula thakbe nah


var arr1 = [1,2,3,4,3,4,5]
var arr2 = []
for(var i=0; i<arr1.length; i++){
    if(arr2.indexOf(arr1[i]) == -1){
        arr2.push(arr1[i])
    }
}
// console.log(arr2)

// another code for good practises:
var name1 = ['Rahim',"rifat","rifat","rajin","rajin"]
var name2 = []

for(var i=0 ; i<name1.length;i++){
     if(name2.indexOf(name1[i])==-1){
         name2.push(name1[i])
     }

}

console.log(name2)