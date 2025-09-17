// a promise in js is a object that represent the eventual completion or failure of an asynchronus operation and its resulting value

// resolve - call when the operation is success
// reject - call when the operation is fail

// .then - execute if the promise is resolve 
// .catch - execute if the promise is rejected 
// .finally - executes regardless of whether the promise is resolved or rejected 



            //creating promise object
let myPromise = new Promise((resolve,reject) =>{   
 
    let success = true;

    setTimeout(()=>{
        if (success) {
            resolve("promise resolved successfully!")
        } else {
            reject("promise rejected")
        }

    },2000)
}) 

myPromise
  .then(result => console.log(result))
  .catch(error => console.log(error))
  .finally(() => console.log("promise execution is finished"));
  