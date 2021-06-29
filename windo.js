console.log("hello")
let a = window.innerHeight
console.log(a)

// let log = "email id"
//let log2 = "password"
//let x = prompt(log) ;


//console.log(x)
// let login = function validemail(log) {
    // let r = /[^\s@]+@[^\s@]+\.[^\s@]+/;
    // if (r.test(log)) {
        // return 1;
    // } else if (r.test(log) == null  || r.test(log) == ("")) {
        // return ("invalid email");
    // } else {
        // return -1;
    // } 
// }
//let result = prompt(login(8))
//console.log()
// login(prompt(x))

/// prompt(log) = input;
 //let c = prompt(log)
// console.log (c)

    

let mail = prompt("enter email id")
let r = /[^\s@]+@[^\s@]+\.[^\s@]+/

   
    if(r.test(mail))
    {
        alert("vaildemail")
        
    }
    else{
        alert("invalid email please input vaild email eg(amjreh@email.com)")
    
    }
    console.log(mail)


    let pw = prompt("enter password")
    if ( pw=="" )
    {
        alert("invalid password make a strong password ")

    }
    else if(pw.length<8 ) {
        alert("invalid password make a strong password")
        
    }
    else  if(pw>15){
         alert("correct password u can go")
     }
     else(
         alert("correct password u can go")
     )
    
     console.log(pw)


       