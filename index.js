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