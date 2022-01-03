// 1 задание 
function sumAndRes(valueA, valueB) {
    if (typeof valueA === 'string' || typeof valueB === 'string') {
       return 'Error';
    } else {
       return valueA % 2 == 0 ? valueA * valueB : valueA + valueB;
    }
}
console.log(sumAndRes(3 , 4));

// 2 задание 
function quatResolver(x, y) {
    if (typeof x === 'string' || typeof y === 'string') {
       return 'Error';
    } else if (x === 0 || y === 0) {
        return x === 0 && y === 0 ? 'Center' : ` It's axis ${((x === 0 ? 'Y' : 'X'))}`;
    }
    else {
        let horiz = (x > 0 ? [1, 2] : [3, 4]);
        let vertical = (y > 0 ? [1, 4] : [2, 3]);
        for (let element of horiz) {
            if (vertical.includes(element)) {
                return(element + ' quater');
            }
        }
    }
}
console.log(quatResolver(0, 0));

// 3 задание 
const firstThree = array =>{ 
let res = 0;
for (let i = 0; i < array.length; i++) {
    if (array[i] >= 100 && array[i] < 1000) {
        res += array[i];
    }
}
return res;
}
console.log(firstThree([1, 2, -1,"string"]))

//  4 задание
const maxValue = (a, b, c) => Math.max(a * b * c, a + b + c) + 3;
console.log(maxValue(0, 1, 5));

// 5 задание
const rating = mark => {
    let res;
    switch (true) {
        case mark >= 0 && mark <= 19:
            res='Your mark is F';
            break;
        case mark >= 20 && mark <= 39:
            res= 'Your mark is E';
            break;
        case mark >= 40 && mark <= 59:
            res='Your mark is D';
            break;
        case mark >= 60 && mark <= 74:
            res='Your mark is C';
            break;
        case mark >= 75 && mark <= 89:
            res='Your mark is B';
            break;
        case mark >= 90 && mark <= 100:
            res='Your mark is A';
            break;
        default:
            res=`Your ${mark} isn't valid value`;
            break;
    }
return res;
}
console.log(rating(1));