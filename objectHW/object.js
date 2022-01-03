// 1 задание
function getCookingTime(eggsAmount) {
    const rules = {
        cookingTime: 5,
        capacity: 5,
    }
    if (eggsAmount > rules.capacity) {
        const diff = eggsAmount / rules.capacity;
        return console.log(rules.cookingTime * Math.ceil(diff));
    } else if (eggsAmount === 0) {
        return console.log(eggsAmount);
    }
    else {
        return console.log(rules.cookingTime);
    }
}
getCookingTime(0); //returns 0
getCookingTime(5); //returns 5
getCookingTime(9); //returns 10 (because capacity is 5 so we need to do it 2 times)

// 2 задание 
/* function getNumber(array) {
    let result = { even: [], odd: [], }
    if (array.length) {
        for (let i = 0; i < array.length; i++) {
            if (array[i] % 2 !== 0) {
                result.odd.push(array[i]);
            }
            else {
                result.even.push(array[i]);
            }
        }
    }
    return console.log(result);
}
getNumber([1, 5, 7, 9, 15, 19, 777, -15, -11, 4, 9, 23, -17]) //returns 4
getNumber([0, 2, 8, -4, 0, -122, 13, -4, 28, 12]) //returns 13 */

// 3 задание
/* function findTitle(array, string) {
    let array1 = [];
    array.map(obj => {
        for (const key in obj) {
            if (obj[key].includes(string)) {
                array1.push(obj);
            }
        }
    })
    return console.log(array1);
}
let arr = [
    { title: 'Some title1', },
    { title: 'I like JS' },
    { user: 'This obj doesn\'t have key title js' },
    { title: 'JS - is the best!' }];
findTitle(arr, 'JS'); // return [{title: 'I like JS'}] , [{title: 'JS - is the best!'}] */

// 4 задание
/* function countCharacters(string) {
    const letterObj = {};
    for (const iterator of string.replace(/[^\w]/g).toLowerCase()) {
        letterObj[iterator] = letterObj[iterator] + 1 || 1;
    }
    return console.log(letterObj);
}
countCharacters('sparrow') // should return {s: 1, p: 1, a: 1, r: 2, o: 1, w: 1}
countCharacters('aabcddeffge') // should return {a: 2, b: 1, c: 1, d: 2, e: 2, f: 2,g: 1}
countCharacters('a2abd') // should return {a: 2, b:1, d:1, 2:1} */

// 5 задание
/* function reverse(number) {
    let reverse = "";
    for (let i = String(number).length - 1; i >= 0; i--) {
        reverse += String(number)[i];
    }
    return reverse;
}
function getNextPalindrome(num) {
    if (String(num).length < 2) {
        return num + 1;
    } else {
        for (let i = num + 1; ; i++) {
            if (String(i) === reverse(i)) {
                return i;
            }
        }
    }
}
console.log(getNextPalindrome(7)) // returns 11 тут ошибка в условии проверки -> Правильный ответ 8
console.log(getNextPalindrome(99)) //returns 101
console.log(getNextPalindrome(132)) // returns 141
console.log(getNextPalindrome(888)) // returns 898
console.log(getNextPalindrome(999)) // returns 1001  */

// 6 задание
/* const emulateSet = {
    add: (value) => {
        let obj = {};
        if (obj.hasOwnProperty(value) === value) {
            return;
        } else {
            return obj += value;
        }
    },
    has: (value) => {
        if (object.hasOwnProperty(value) === value) {
            return true;
        } else {
            return false;
        }
    },
    remove: () => {
       // idk как реализовать
    }
} */
