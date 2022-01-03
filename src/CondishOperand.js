// 1 задание 
function sumAndRes(valueA, valueB) {
    if (typeof valueA === 'string' || typeof valueB === 'string') {
        console.log('Error');
    } else {
        console.log(valueA % 2 == 0 ? valueA * valueB : valueA + valueB);
    }
}
sumAndRes('sdfs', 4);

// 2 задание 
function quatResolver(x, y) {
    if (typeof x === 'string' || typeof y === 'string') {
        console.log('Error');
    } else if (x === 0 || y === 0) {
        console.log(x === 0 && y === 0 ? 'Center' : ` It's axis ${((x === 0 ? 'Y' : 'X'))}`);
    }
    else {
        let horiz = (x > 0 ? [1, 2] : [3, 4]);
        let vertical = (y > 0 ? [1, 4] : [2, 3]);
        for (let element of horiz) {
            if (vertical.includes(element)) {
                console.log((element + ' quater'));
            }
        }
    }
}
quatResolver(2, 2);

// 3 задание 
const array = [1, 2, 3, 200, 300, 500, 800, -3]
let res = 0;
for (let i = 0; i < array.length; i++) {
    if (array[i] >= 100 && array[i] < 1000) {
        console.log(res += array[i]);
    }
}

//  4 задание
const maxValue = (a, b, c) => console.log(Math.max(a * b * c, a + b + c) + 3);
maxValue(2, 2, 5);

// 5 задание
const rating = mark => {
    switch (true) {
        case mark >= 0 && mark <= 19:
            console.log('Your mark is F');
            break;
        case mark >= 20 && mark <= 39:
            console.log('Your mark is E ');
            break;
        case mark >= 40 && mark <= 59:
            console.log('Your mark is D');
            break;
        case mark >= 60 && mark <= 74:
            console.log('Your mark is C');
            break;
        case mark >= 75 && mark <= 89:
            console.log('Your mark is B');
            break;
        case mark >= 90 && mark <= 100:
            console.log('Your mark is A');
            break;
        default:
            console.log(`Your ${mark} isn't valid value`);
            break;
    }
}
rating(NaN);