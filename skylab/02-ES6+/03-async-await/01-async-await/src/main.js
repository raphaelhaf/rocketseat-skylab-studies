const myPromise = () => new Promise((resolve, reject) =>
  setTimeout(() => { resolve('OK') }, 2000));
/*
myPromise().then(response => {
  console.log(response);
}).catch(err =>{
});
*/
async function executePromiseWithAsyncAwait(){

  console.log(await myPromise());
  // using await the next line will be executed only after the previous line execution
  console.log(await myPromise());
}
// using arrow function syntax 
const execPromiseWithAsycAwaitArrow = async () =>{
  console.log(await myPromise());
}

// simulating the previous function without the use of async await
function executePromise(){
  myPromise().then(response =>{
    console.log('response');
  
    myPromise().then(response =>{
      console.log('response');
  
    })
  });
}

execPromiseWithAsycAwaitArrow();
