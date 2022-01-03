// 1 задание 
const array = [20, -1, 10, 100];
let min = Math.min(...array);
console.log(min);

// 2 задание 
const array = [20, -1, 10, 100];
let max = Math.max(...array);
console.log(max);

// 3 задание
const array = [20, -1, 10, 100];
console.log(array.indexOf(Math.min(...array)));

// 4 задание 
const array = [20, -1, 10, 100];
console.log(array.indexOf(Math.max(...array)));

// 5 задание 
const array = [1, 2, 1, 2, 1, 2, 1, 2, 1];
const oddNum = num => num.filter(e => !(e & 1));
const arraySum = arr => oddNum(arr).reduce((a, b) => a + b);
console.log((arraySum(array)));

// 6 задание 
let array = [1, 2, 3, 4, 5];
const reverse = array.reverse();
console.log(reverse);

// 7 задание 
let array = [1, 2, 3, 4];
console.log(array.reduce((a, b) => a + b % 2, 0));

// 8 задание 
let array = [1, 2, 3, 4, 5, 6];
for (let i = 0; i < (array.length / 2); i++) {
    let temp = array[i];
    array[i] = array[(array.length / 2) + i];
    array[(array.length / 2) + i] = temp;
}
console.log(array);

// 9 задание 
// Пузырьком
const arr = [0, 3, 2, 5, 6, 8, 23, 9, 4];
function bubbleSort(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            if (array[j + 1] < array[j]) {
                let tmp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = tmp;
            }

        }
    }
    return array;
}
console.log(bubbleSort(arr));
// Select
const arr = [0, 3, 2, 5, 6, 8, 1, 9, 4, 2];
function selectionSort(array) {
    for (let i = 0; i < array.length; i++) {
        let indexMin = i;
        for (let j = i + 1; j < array.length; j++) {
            if (array[j] < array[indexMin]) {
                indexMin = j
            }
        }
        let temp = array[i];
        array[i] = array[indexMin];
        array[indexMin] = temp;
    }
    return array;
}
console.log(selectionSort(arr));
// Insert
const arr = [0, 3, 2, 5, 6, 8, 1, 9, 4, 2];
const insertionSort = arr => {
    for (let i = 1, l = arr.length; i < l; i++) {
        const current = arr[i];
        let j = i;
        while (j > 0 && arr[j - 1] > current) {
            arr[j] = arr[j - 1];
            j--;
        }
        arr[j] = current;
    }
    return arr;
};
console.log(insertionSort(arr));