
const promise = new Promise((resolve, reject) => {


   setTimeout(() => {
    reject({
        name: 'Bosss',
        age: 32
    });
   }, 5000);
   
   
});

console.log('start');

promise.then((data) => {
    
    console.log(data);
    
}).catch((error) => {
    console.log(error);
})

console.log('end');