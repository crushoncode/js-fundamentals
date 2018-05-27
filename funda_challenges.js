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

// *Problem 6 (sychronicity)*
// This will show the way JS functions when acting synchronously.
// Here we are doing something a bit different, and I just want you to follow these instructions like a recipe. 
// If you need help I can give you a hand or send you the code. 
// First put these two lines of code up at the top of your file:
// console.log("Problem 6")
// console.time('problem-6')
// I want you to now make a function called looper. This takes one argument, a callback function. In the body of the function first 
// start a timer with this code:
// console.time('looper')
// I want you to insert a for loop that iterates 1000000000 times. Put the following code in the loop:
// x = Math.random()
// Immediately after the loop log out "After loop!". End the 'looper' timer. Then return your callback with no arguments.
// Now run looper with only the callback as an argument (and as mentioned this takes no arguments itself). Within the callback 
// end the console.time, and then return console.log("Finished 6 in the callback") (which will return undefined, 
//     but it's not relevant for this). 
// Loops in JS are synchronous (blocking), so the functioning of the program stops while the loop is running. 
// The code in the callback is run after the outer function's code is completed. 
// Now write this code after your looper function is called 
// console.log("After looper")
// console.log("..now heading off to other parts of the program!")
// console.log("==================")
// Take note of the timing and order that things are logged.


// console.log("Problem 6")
// console.time('problem-6')

// const looper = (cb) => {
//     console.time('looper')
//     for(i=0; i<1000000000; i++){
// 	x = Math.random()
//     }
//     console.log("In looper")
//     console.log("After loop!")
//     console.timeEnd('looper')
//     console.log("..now passing through to the cb..")
//     return cb()
// }

// looper(() => {
//     console.timeEnd('problem-6')
//     return console.log("Finished 6 in the callback")
// })

// console.log("After looper")
// console.log("..now heading off to other parts of the program!")
// console.log("==================")

// Problem 7 (asychronicity)
// Copy and past the code you wrote in the previous example. Change all instances of 'looper' to 'timeouter'. 
// Here we are going to run some code in the main function that is asynchronous, and see the difference in behaviour. 
// Instead of the loop followed by the console.log, put this code:
// setTimeout(function() {
//     console.log('After setTimeout!')
//     console.log("..now passing through to the cb..")
//     return cb()
// }, 6000)
// setTimeout is one of the asynchronous aspects of JS, and so the code behaves differently. 
// Change every reference to Problem 6 with 7.
// Take note of the order that things are logged to the terminal. 
// To see this clearly, run both Problem 6 and 7 in the same file and watch as they log to the terminal. 

// console.log("Problem 7")
// console.time('problem-7')

// const timeouter = (cb) => {
//     console.time('timeouter')
//     setTimeout(function() {
//         console.log('After setTimeout!')
//         console.log("..now passing through to the cb..")
//         return cb()
//     }, 6000)
//     console.log('In timeouter')
//     console.timeEnd('timeouter')
// }

// timeouter(() => {
//     console.timeEnd('problem-7')
//     return console.log("Finished 7 in the callback!")
// })

// console.log("After timeouter")
// console.log("..now heading off to other parts of the program!")
// console.log("==================")

// Now contrast that with the functions that we encountered in Problem 6. You can see that while in 6 the entire program stops to 
// wait for the loop, in 7 the program continues on, and other code would have been run before finally logging that it finally 
// fully finished for real, it had escaped from the timeout, called the callback, and executed the callback code. 
// Turn your mind to the Express apps that we built earlier. In many tutorials when we set up our routes we see code like this:

// app.get('/', function (req, res) {
//     res.send('hello world')
// })
// or 
// app.get('/', (req, res) => {
//     res.send('hello world')
// })
// This is a function call, and within it is a callback that we define. We don't know how Express provides what it does, 
// but it does some bulk work with some http requests and dealing with XHR, and then hands over control to us to fiddle at the edges. 
// We set the path, and then Express provides us the request and response objects - much like we provided the multiplication calculation 
// to our callback in Problem 1. Our outer function there was trivial, but the functioning is the much same - except for being synchronous. 
// That is, the outer function does some work and then passes that work to the callback as an argument. We then had an argument in our 
// callback created by this outer function being run (which is synchronous code, unlike Express), and we then acted on this in the callback.
//  In the case of Express they let you set the path when you call their function, they do some asynchronous magic behind the scenes and 
//  then they hand over control of the request and response objects to your callback function, which you then customise and deal with 
//  (within the Express spec functionality), while also doing any other logic you require. 
// In this instance (Express) it is important to note that the functionality within the main function (out of sight) is asynchronous 
// - Express waits for input from the user and when it receives this input it runs the relevant function and does what it needs to do, 
// but while this is happening it hands back control to the rest of the code (meaning that a user can still use the page while the function
//      is doing its work). When their function completes it produces its req and res, and then after that our callback is run and we deal
//       with the req and res objects as required. 
// This is a bit like in Problem 6 where the code continues after hitting the asynchronous function, although in that case we didn't 
// pass anything to the callback as an argument.
// How this actually works in the browser is a little complex, but this is a brilliant talk that gives you the flavour of this in a
//  digestible form --
// https://www.youtube.com/watch?v=8aGhZQkoFbQ
// (It's ok if you don't follow this fully - just get the general idea and you'll be ahead of most junior JS coders.)