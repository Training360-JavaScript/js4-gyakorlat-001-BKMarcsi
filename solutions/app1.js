const converterPromise = (initArray = []) => {

    const isItOK;
    const myArray;

    const myPromise = new Promise((resolve, reject) => {

        if (initArray.every(element => typeof (element) === 'string')) {
            myArray = initArray.map(element => element.toUpperCase());
            isItOK = true;
        }
        else {
            isItOK = false;
        }

        if (isItOK){
            resolve(myArray);
        }
        else{
            reject('Error: Not all elements are string type!');
        }

    });

    return myPromise;
}



export default converterPromise;