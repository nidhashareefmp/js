//function declaration is one of the ways to define function

//syntax  
//  function functionName(){
//    function body
// }



function greet(name){   //inside the paranthis content is called parameter
    console.log("hello, " + name);    
}

greet ("aswin");  //here fn call and arguments is present



//----key features-----

//1.hoisting - calling a function before defining it
//2.named function - fn declaratio must have fn name
//3.global or local scope - if define outside any block it globally scoped,if defined inside the block locally scoped