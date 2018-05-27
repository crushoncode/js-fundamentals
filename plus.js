// Write a javascript function to convert from decimal to binary 
// Write another javascript function to convert from decimal and hexadecimal

function decToBase(n1, base) {
    var rem; 
    var binArray = []; 

while (n1 > 1) {
    rem = parseInt(n1 % base);
    n1 = n1 / base;    
    binArray.push(rem);
}

return convertToString(binArray.reverse());
}

function decToBase16(n1, base) {
    var rem; 
    var binArray = []; 
    calcs = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F","G","H","I"];

while (n1 > 1) {
    rem = parseInt(n1 % base);
    n1 = n1 / base;    
    binArray.push(calcs[rem]);
}
 
return convertToString(binArray.reverse());
}

function convertToString(arr) {
    var returnStr = "";
    for (i=0; i < arr.length; i++) {
        returnStr += arr[i];
    }
    return returnStr;
}

function convertToHex(num) {
    return decToBase16(num, 16);
}

console.log(decToBase(25, 2));

console.log(convertToHex(28));



