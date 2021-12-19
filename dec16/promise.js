let promise = new Promise ((resolve, reject) => {
    setTimeout(() => resolve("done"), 2000
})
promise.then((message)=>{
console.log(promise);
})