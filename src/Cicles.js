// 1 задание
let sum = 0;
for (let i = 0; i <= 100; i++)
    if (i % 2 == 0) {
        console.log(sum += i);
    }

// 2 задание
const isSimple = num => (num % 2 === 0) ? console.log(false) : console.log(true)
isSimple(11);

// 3 задание
const RootNumber = number => {
    if (number <= 0 || typeof number === 'string' || !number) {
        return console.log('Bad number');
    }
    else {
        return console.log(Math.floor(Math.sqrt(number)));
    }
}
RootNumber(4);

// 4 задание 
const factorial = n => (n !== 1) ? n * factorial(n - 1) : 1;
console.log(factorial(4));

// 5 задание 
const sumOfNumbers = (y) => {
    let sum = 0;
    let number = String(y);
    for (let i = 0; i < number.length; i++) {
        sum += Number(number[i]);
    }
    return console.log(sum);
}
sumOfNumbers(55);

// 6 задание 
let a = 12512;
console.log((String(a).split('').reverse().join('')));