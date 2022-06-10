//working with numbers

console.log(Math.floor(0.9)); // return 0
console.log(Math.floor(1.1)); //return 1

//round works differently

console.log(Math.round(0.49)) // return 0
console.log(Math.round(0.5)) //return 1

//checking numbers with floating point approximations
function numberEquals(x,y){
    console.log(Math.abs(x - y))
    return Math.abs(x - y) < Number.EPSILON;
}

numberEquals(0.5 + 0.2 , 0.6)

Number.MAX_SAFE_INTEGER + 1.111 === Number.MAX_SAFE_INTEGER + 2.022;
// false
console.log(Number.MAX_SAFE_INTEGER)
console.log(Number.MIN_SAFE_INTEGER)
Number.MAX_VALUE + 1 === Number.MAX_VALUE + 2; // true

//Number Algorithms
function isPrime(n){
    if (n <= 1) return false;
    if (n <= 3) return true;

    if (n%2 == 0 || n%3 == 0) return false;

    for (var i = 5; i * i <= n; i = i + 6){
        if(n%i == 0 || n%(i+2) == 0) return false;
    }

    return true;
}

console.log(`Is the number 1506 prime? ${isPrime(1506)}`);

function primeFactors(n){
    //print the number of 2s that divide n
    while(n%2 == 0){
        console.log(2);
        n = n/2;
    }

    for(var i = 3; i* i <= n; i = i + 2){
        while(n%i == 0){
            console.log(i);
            n = n / i;
        }
    }

    if (n > 2){
        console.log(n);
    }
}

primeFactors(15207);

console.log(Math.floor(Math.random() * 100)); // integer between 0 and 99
console.log(Math.round(Math.random() * 25) + 5); // integer between 5 and 30
console.log(Math.ceil(Math.random() * 10) - 100); // integer between -100 and -90

function modularExponentiation(base, exponent, modulus){
    if (modulus == 1) return 0;

    var value = 1;

    for (var i = 0; i < exponent; i++){
        value = (value * base) % modulus;
    }

    return value;
}

function maxDivide(number, divisor){
    while(number % divisor == 0){
        number /= divisor;
    }
    return number;
}

function isUgly(number){
    number = maxDivide(number, 2);
    number = maxDivide(number, 3);
    number = maxDivide(number, 5);
    return number === 1;
}

function arrayNUglyNumbers(n){
    var counter = 0, currentNumber = 1, uglyNumbers = [];
    while (counter != n){

        if (isUgly(currentNumber)){
            counter++;
            uglyNumbers.push(currentNumber);
        }

        currentNumber++;
    }

    return uglyNumbers;
}