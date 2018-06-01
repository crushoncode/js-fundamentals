// Problem 1

function arrayMultiply(num1, num2, fun) {
    return fun(num1 * num2);
}

const arrayM = [1, 2, 3];

const result1 = arrayMultiply(2, 2, function(num) {

    for(i = 0; i < arrayM.length; i++) {
        arrayM[i] = arrayM[i] * num;
    }

    return arrayM;
});

console.log(result1);

// basic MAP

// function arrayMultiply(num1, num2, fun) {
//     return fun(num1 * num2);
// }

// const arrayM = [1, 2, 3];

// let result_array = arrayM.map(x => x * 2);

// console.log(result_array)



function arrayMultiply(num1, num2, fun) {
    let res = fun(num1 * num2)
    return res;
}

const arrayM = [1, 2, 3];

const result7 = arrayMultiply(2, 2, function(resultNum) {

    arrayNew = arrayM.map( x => x * resultNum)
    return arrayNew
});

console.log(result7);


// Problem 2

function arrayMultiplyAgain(num, st_array) {
    for(i = 0; i < st_array.length; i++) {
        st_array[i] = st_array[i] * num;
    }
    return st_array;
}

function moreArrayMultiply(num, st_array, fun) {
    return fun(num, st_array);
}

const result2 = moreArrayMultiply(2, [1, 2, 3], arrayMultiplyAgain)

console.log(result2)

// Problem 3

function createMap(st_array, fun) {
    const return_array = [];

    for(i = 0; i < st_array.length; i++) {
      return_array.push(fun(st_array[i]));
  }

  return return_array;
}

const result3 = createMap([1,2,3], x => x * 2);     
  
console.log(result3);

// Problem 4

function createFilter(st_array, fun) {
    const return_array = [];

    for(i = 0; i < st_array.length; i++) {
        if (fun(st_array[i])) {
            return_array.push(st_array[i]);
        }    
    }
    return return_array;
}

const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const result4 = createFilter(words, word => word.length > 6);
console.log(result4);

// Problem 5

const market = {
    buy: function() {
        return 'I want to buy!!'; 
    }, 
    sell: function() {
        return 'I want to get out!!';
    }  
};

function originalFunction(num, functionObject) {
        
    let executeString; 

        if(num % 2 == 0) {
            executeString = "buy";
        } else {
            executeString = "sell";
        }
        return functionObject[executeString];
    }

     // option 2
    // if(num % 2 == 0) {
    //     const buyString = "buy";
    //     return functionObject[buyString];
    // } else {
    //     const sellString = "sell"
    //     return functionObject[sellString];
    // }
    // }
     
// option 3
//     if(num % 2 == 0) {
//         return functionObject["buy"];
//     } else {
//         return functionObject["sell"];
//     }
// }

const result5 = originalFunction(3, market);
console.log(result5()) 