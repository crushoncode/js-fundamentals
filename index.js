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