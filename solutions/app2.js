const sorterPromise = (initArray = []) => {
    return new Promise((resolve, reject) => {
        if (initArray.every(element => typeof(element) === 'string')){
            resolve(initArray.sort());
        }
        else{
            reject('Error: Not all elements are string type!');
        }
    });
}





export default sorterPromise;