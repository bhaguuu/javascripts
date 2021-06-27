console.log("hello world")

// exponential

let num = 2333345.756
console.log(num.toExponential(5))
let num1 = 2.333345
console.log(num1.toExponential() + " " + typeof num1)
// toprecision

let num2 = 222.765
console.log (num2.toPrecision())
let num3 = 222
console.log (num3.toPrecision(2))

// object

let school = {
    class : ["physics" , "mathe", "chem"] ,
    studens : {

        studentphysics : "10",
        studentmaths : "54",
        studentchem : "12",
        
    },
    studentid  : {
    studentphysics : [ "19IT15", "19IT13"],
    studentmaths : [ "19IT20"],
    studentchem : ["none"]
    },

}

// array all methods 

let arr = [ 2 , 6 , 8,9 ,0 ,6]
let  arr2 = [ "h" , "b" , "a" , "d"]

// concat methods - in this + to arrays 

console.log(arr .concat(arr2))

// copywithin() methods - it is copy same vale and on target and delets who on target point element and copy other elements 

console.log(arr2.copyWithin(1 ,0 ,1 ))

// pop methods- show last elemant of the array

console.log(arr2.pop() + " " + arr2)
 
// push methods - use for add elemants 

console.log(arr2.push("c") + " " + arr2)

// shift method - it delete elements from first 

console.log(arr.shift() + " " + arr)

// unshift- it add elemants  in front

 console.log(arr.unshift("10") + " " + arr)

 // entries() methods -
  console.log(arr2.entries())
  
  // every() methods - for true and false check
  // yha ager string array me number array bnaa do to error show ku hota he 

  let bhagu = ["a","b","d",["1","5","8","9"] ] 

  console.log(bhagu.every(String))

  //fill()- pure array ko ek hi elements se bhr deta he 
  // mixed aaray me thoda smj nhi aaya 

  console.log (bhagu.fill( ))

  // filter()- show full array and also use like condition statisfaction 


console.log(arr.filter(String))


//find()- condition check krke ke us aaray kaa first elements yaa true value return krta he

console.log(arr2.find(String))

// findindex()- ye waala smjnaaa he puraaa
let any = [1,5,7,8]
console.log(any.findIndex(Number))

// for each-ye bhi smj nhi aaya 
//console.log(arr2.forEach())

//from()-is ;e skte array khi se bhi

console.log( Array.from(bhagu)) 

//includes()- check krna ki koi value use array me he yaa nhi
console.log(arr.includes(8))

//indexof()- mix aaray me thodi problem he 
// baki ye pta chal gya traget elements ki position btata he
console.log(arr2.indexOf("a"))

//isarray()-array he ya nhi he check krne ke liye function me 
console.log(Array.isArray(any))

//jion()- array me traget elemnts ke bitch me jaake jud jaata he (ex-1b5b7b9)
console.log(any.join("b"))

//keys()-ye bhi smjnaa
console.log(any.keys())
// indexof or lastindexof me thoda diffrence 

//lastindexof-elements kitne number pe value btaa deta he
console.log(any.lastIndexOf(1))

//map()-naya aerray bnata he function call array se baki sir se smjnaa
//reduce()-ek number me ya string me bdl deta he first me 
console.log(any.reduce(Number))

//reduceright()-right se mtlb last me reduce krta he
console.log(any.reduceRight(Number))

//reverse()- ulta kr deta he array ko
console.log(any.reverse(Number))

//slice()-jitne number doge unko htaa kr us number ke piche
// ke print kregaa
console.log(arr.slice(2))

//some()-true check krta condition pe
console.log(any.some(Number ))

//sort()-sequnce me jmaa de ta he phle bdaa number fir chota.... or alphbatical me jmata he
console.log(any.sort(Number))

//splice()-ye nii smj aayaa mtlb ye to pta he ke ye wha jud jayega per meree nhi jud raaa
//iska machensiam smjme nhi aaya 
console.log(any.splice(3))


//valueof()-sir se smjnaaa
console.log(any.values())
//tostring-
console.log(any.toString())
// array methods  end 


 // object 

//  let student = {
    //  class : "a",
    //   id : [ "19IT15", "19IT13"] 
//  }

//    et school1 =
    //   {
        //   totalstudent: "888"
    //   }
 
//  console.log(student.class)
 
let age =34

if(!age){ 
    console.log("eligable")
} else{
    console.log("not eligable")
}
//  do while loop
// let row=1
// let colum=1

// let i =8;

    
    // do{
        // i--;
    // }while (i>=row)
    // colum=1 
    // do{
        // console.log("*")
        // console.log(" ")
//  colum++
    // } while (colum<=row){
    //    console.log("\n")
    //    row++    
    // }while (colum<=6);
//do while
 let j=0
 do{
    console.log(j)
    j++
 }
 while (j<8)
 
 //while loop

 let u=10
 while(u<14){
    console.log(u)
    u++
 }

// for loop

let m;
let c;
    

for  ( m=1 ; m<=num ; m++ )
 { let str = "";
    for( c=1 ;  c<=m  ;  c++ )
    {
        str +="*";
    }
   
       console.log(str)       
 }

//function decliration 

function bhaguuu(String) {
     console.log (String)  
    }
  bhaguuu("hello B.L.menariya ")  
  console.log("\n")
//arrow back

let isEven = (num) => {

return (num%2===0)
    
}
let result = isEven(4)
console.log(result)
console.log("\n")
//expression
let BL = function ( x , y ) {
    return x*y
    
}
let re=BL( 4 , 50 )
console.log( re )

console.log("\n")

let arr5=[8,10,12,14].every((e)=>(e%2===0))
console.log(arr5)

/////
let a = "email id "
let b = "password"
let login = () => {"enter ur name "}
console.log(login)
