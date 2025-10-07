 //--callBack
 //function passing another fn as an argument

//  callBack handled asynchronus operations - customize behaviour of general purpose fn,avoid blocking code execution


//this is our call back fn
function greetUser(name){
   console.log(`hello ${name}`);
   
}

//this fn takes another function(callBack fn) as a parameter
function getUserInput(callBack){
    const name = "riha";
    callBack(name); //calling the callBack fn with the 
}
getUserInput(greetUser);


//callBackhell or pyramid of doom

//----callBackHell----
//multiple nested callBacks make the code difficult to read and maintain




