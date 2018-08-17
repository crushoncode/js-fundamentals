# Overview

This repository is a growing collection of my solutions to simple JavaScript exercises.

# JS Fundamentals

# Problem 1

Write a function called arrayMultiply that takes two numbers, and a callback function as arguments. Return the callback function with the two numbers (those arguments) multiplied together as its argument.
Define an array outside of this function (I suggest [1,2,3] to match the output). Because JS scope works differently to Ruby you will be able to use that array within the following function without passing it through as an argument. But please note that it will not be functional programming as such - but in this case if you use map a new array will be created (rather than the original being mutated).
Call arrayMultiply when called with 2, 2, and also an anonymous callback function that takes the result as an argument, and then multiplies each element in the array by that result. Store the result of this function call in a variable. When you console.log this variable to screen it should produce [ 4, 8, 12 ].

- Solution 1

```javascript
arrayMultiply = (num1, num2, fun) => {
  return fun(num1 * num2);
};

const arrayN = [1, 2, 3];

const result1 = arrayMultiply(
  2,
  2,
  (fun = (num) => {
    for (i = 0; i < arrayN.length; i++) {
      arrayN[i] = arrayN[i] * num;
    }

    return arrayN;
  })
);

console.log(result1);
```

- Solution 2

```javascript
arrayMultiply = (num1, num2, fun) => {
  let res = fun(num1 * num2);
  return res;
};

const arrayM = [1, 2, 3];

const result7 = arrayMultiply(
  2,
  2,
  (fun = (resultNum) => {
    arrayNew = arrayM.map((x) => x * resultNum);
    return arrayNew;
  })
);

console.log(result7);
```

# Problem 2

Write a function called arrayMultiplyAgain that takes a number and an array as arguments, and returns each element in the array multiplied by the number.
Now write a second function called moreArrayMultiply that takes three arguments: a number, an array, and a function: (eg. num, arr, funct). Have this function return the result of these number and array arguments when passed as arguments to a call of arrayMultiplyAgain (which you passed in as an argument).
Define a variable and in it store the result of the second function when called with 2, [1,2,3], and the first function you created. When you console.log this variable to screen it should produce [ 2, 4, 6 ].

```javascript
arrayMultiplyAgain = (num, st_array) => {
  for (i = 0; i < st_array.length; i++) {
    st_array[i] = st_array[i] * num;
  }
  return st_array;
};

moreArrayMultiply = (num, st_array, fun) => {
  return fun(num, st_array);
};

const result2 = moreArrayMultiply(2, [1, 2, 3], arrayMultiplyAgain);

console.log(result2);
```

# Problem 3

_Implement your own version of .map_

Define a function that takes a callback and provides the same functionality as the .map function inbuilt into ES6. You can do this as a function that extends the array prototype (which takes a callback function as an argument), or more simply as a function that takes an array as an argument, as well as a callback function.

```javascript
createMap = (st_array, fun) => {
  const return_array = [];

  for (i = 0; i < st_array.length; i++) {
    return_array.push(fun(st_array[i]));
  }

  return return_array;
};

const result3 = createMap([1, 2, 3], (x) => x * 2);

console.log(result3);
```

# Problem 4

_Implement your own version of .filter_

Define a function that takes a callback and provides the same functionality as the .filter function inbuilt into es6. You can do this as a function that extends the array prototype (which takes a callback function as an argument), or more simply as a function that takes an array as an argument, as well as a callback function.

```javascript
createFilter = (st_array, fun) => {
  const return_array = [];

  for (i = 0; i < st_array.length; i++) {
    if (fun(st_array[i])) {
      return_array.push(st_array[i]);
    }
  }
  return return_array;
};

const words = [
  'spray',
  'limit',
  'elite',
  'exuberant',
  'destruction',
  'present'
];

const result4 = createFilter(words, (word) => word.length > 6);
console.log(result4);
```

# Problem 5

Define an object that has two keys, one called 'buy' and the other called 'sell'. These will have the value of an anonymous function that takes no arguments, and that simply returns a string. The function associated with 'buy' will return "I want to buy!!", and the other returns "I want to get out!!"
Define a function called originalFunction that takes two arguments, a number and an object, which you could call 'functionObject'. If the number is divisible by 2 then the function returns the functionObject's 'buy' function, and otherwise returns the 'sell' function.
// Now call this function with a number and the object that you created as arguments, and store the result in a constant. Now work out how to get the string to display to the screen.

```javascript
const market = {
  buy: (fun = () => {
    return 'I want to buy!!';
  }),
  sell: (fun = () => {
    return 'I want to get out!!';
  })
};

originalFunction = (num, functionObject) => {
  let executeString;

  if (num % 2 == 0) {
    executeString = 'buy';
  } else {
    executeString = 'sell';
  }
  return functionObject[executeString];
};

const result5 = originalFunction(3, market);
console.log(result5());
```

# Write a ruby function to convert from decimal to binary and from decimal to hexadecimal

- solution 1

```ruby
def convert(num, base)
    result = ""

    while num != 0 do
        value = num % base + 48
        if value > 57
            value += 7
        end

    result += value.chr
    num /= base
    end
    return result.reverse
end

puts convert(61, 9)
```

- solution 2

```ruby
def convertor(num, base)
    calcs = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F","G","H","I"]
    base_array = []
    while num > 0
        if base <= 19
            x = calcs[num % base]
            base_array.push(x)
            num = num / base
        else
            "enough to calculate"
        end
    end
        return base_array.reverse.join
end

puts convertor(782, 2)
```

# Write a function that takes a decimal and returns a string in base 7

```ruby
def convert (num, base)
    result = ""
    while num != 0 do
        result += (num % base).to_s
        num /= base
    end
    return result.reverse
end

puts convert(43,7)
```

# Write a javascript function to convert from decimal to binary and from decimal to hexadecimal

```javascript
decToBin = (n1, base) => {
  var rem;
  var binArray = [];

  while (n1 > 1) {
    rem = parseInt(n1 % base);
    n1 = n1 / base;
    binArray.push(rem);
  }
  return convertToString(binArray.reverse());
};

decToHexa = (n1, base) => {
  var rem;
  var binArray = [];
  calcs = [
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I'
  ];

  while (n1 > 1) {
    rem = parseInt(n1 % base);
    n1 = n1 / base;
    binArray.push(calcs[rem]);
  }

  return convertToString(binArray.reverse());
};

convertToString = (arr) => {
  var returnStr = '';
  for (i = 0; i < arr.length; i++);
  return returnStr;
};

console.log(decToBin(25, 2));
console.log(decToHexa(28, 16));
```
