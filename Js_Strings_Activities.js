console.log('dog'.charAt(1))

console.log('Youtube'.substring(5,7))

//interesting way the strings are compared in JS
var a = 'add';
var b = 'ab';

console.log(a < b);

console.log('Red Dragon'.indexOf('Red')); // returns 0
console.log('Red Dragon'.indexOf('RedScale')); // returns -1
console.log('Red Dragon'.indexOf('Dragon', 0)); // returns 4
console.log('Red Dragon'.indexOf('Dragon', 4)); // returns 4

function existsInString(stringValue, search){
    return stringValue.indexOf(search) !== -1;
}

console.log(existsInString('redea','b')) // returns false

//You can use an additional parameter to search after a certain index in a string.

var str = 'He is the king from this day until he has last breath';

var count = 0;

var pos = str.indexOf('a');

while(pos !== -1){
    console.log(pos)
    count++;
    pos = str.indexOf('a', pos + 1);
}

console.log(count)

//splitting 

var test1 = 'chicken, noodel, soup, broth';
console.log(test1.split(','));

var test2 = 'chicken';
console.log(test2.split(''));

var temp = 'Wisard of Aon'.replace('of', 'in');
console.log(temp);

/*
i Perform case-insensitive matching

g Perform a global match (find all matches rather than stopping after
first match)

m Perform multiline matching

^: Indicates the start of a string/line
\d: Finds any digit
[abc]: Finds any character between the brackets
[^abc]: Finds any character not between the brackets
[0-9]: Finds any digit between the brackets
[^0-9]: Finds any digit not between the brackets
(x|y): Finds any of the alternatives specified

*/


var str = 'JavaScript DataStructures';

console.log(str.match(/a/g));

//URL parsing 

var url_re = '([^?=&]+)(=([^&]*))?';

var uri = 'http://your.domain/product.aspx?category=4&product_id=2140&query=lcd+tv'

var queryString = {};

uri.replace(
    new RegExp(url_re, 'g'), function($0, $1, $2, $3){
        queryString[$1] = $3;
    }
);

console.log(queryString)

//Base 64 encoding
var btoa = Buffer.from('hello I love learning to computer program', 'binary').toString('base64');

console.log(btoa);

var atob = Buffer.from(btoa,'base64').toString();

console.log(atob);

var DICTIONARY = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'.split('');

function encodeId(num){
    var base = DICTIONARY.length;
    var encoded = '';

    if (num === 0){
        return DICTIONARY[0];
    }

    while(num > 0){
        encoded += DICTIONARY[(num % base)];
        num = Math.floor(num / base);
    }
    return reverseWord(encoded);
}
//below function reverses the string
function reverseWord(str){
    var reversed = '';
    for (var i = str.length - 1; i >= 0; i--){
        reversed += str.charAt(i);
    }
    return reversed;
}

//below function decodes the id

function decodeId(id){
    var base = DICTIONARY.length;
    var decoded = 0;

    for (var index = 0; index < id.split('').length; index++){
        decoded = decoded * base + DICTIONARY.indexOf(id.charAt(index));
    }
    
    return decoded;
}

console.log(encodeId(11231230));
console.log(decodeId('VhU2'));

function modInverse(e, phi) {
    var m0 = phi, t, q;
    var x0 = 0, x1 = 1;
        if (phi == 1)
    
        return 0;
        while (e > 1) {
    // q is quotient
    
    q = Math.floor(e / phi);

    t = phi;

    // phi is remainder now, process same as
    // Euclid's algo
    phi = e % phi, e = t;
    t = x0;
    x0 = x1 - q * x0;
    x1 = t;
    }

    if (x1 < 0) x1 += m0;
    
    return x1;
}


const { isPrime } = require('./numbers.js');

function RSAKeyPair(p, q){
    if(!(isPrime(p) && isPrime(q))) return;

    if (p===q) return;

    var n = p * q;

    var phi = (p - 1) * (q - 1);

    var e = 3;

    var d = modInverse(e, phi);

    return [[e, n],[d,n]];
} 

console.log(RSAKeyPair(5, 11))
