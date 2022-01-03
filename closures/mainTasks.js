// 1 task
function tickets(person) {
    moneyValue = {
        '25': 0,
        '50': 0,
        '100': 0
    }
    for (let i = 0; i < person.length; i++) {
        if (person[i] === 25) {
            moneyValue['25'] += 1;
        }
        else if (person[i] === 50) {
            if (moneyValue['25'] > 0) {
                moneyValue['50'] += 1;
                moneyValue['25'] -= 1;
            }
            else {
                return 'NO';
            }
        }
        else {
            if (moneyValue['50'] > 0 && moneyValue['25'] > 0) {
                moneyValue['50'] -= 1;
                moneyValue['25'] -= 1;
                moneyValue['100'] += 1;
            }
            else if (moneyValue['25'] >= 3) {
                moneyValue['25'] -= 3;
                moneyValue['100'] += 1;
            }
            else {
                return 'NO';
            }
        }
    }
    return 'YES';
}
console.log(tickets([25, 25, 50]));
console.log(tickets([25, 100]));   // NO. Vasya will not have enough money togive change to 100 dollars
console.log(tickets([25, 25, 50, 100])); // Yes
console.log(tickets([25, 50, 100])); // No
console.log(tickets(['25', '25', '50', '100'])); // Yes . У вас ошибка.Правильно No, у Васи на руках будет 50,а нужно будет вернуть 75.
console.log(tickets(['25', '50', '100'])); // No

// 2 task
const getSum = (firstNum, secondNum) => Number(firstNum) + Number(secondNum)
console.log(getSum('11111111111111111111111111111111111111111111111111', '23333333333333333333333333333333333333333333333333'));

// 3 task
let listOfPosts2 = [
    {
        id: 1,
        post: 'some post1',
        title: 'title 1',
        author: 'Ivanov',
        comments: [
            {
                id: 1.1,
                comment: 'some comment1',
                title: 'title 1',
                author: 'Rimus',
            },
            {
                id: 1.2,
                comment: 'some comment2',
                title: 'title 2',
                author: 'Uncle',
            }
        ]
    },
    {
        id: 2,
        post: 'some post2',
        title: 'title 2',
        author: 'Ivanov',
        comments: [
            {
                id: 1.1,
                comment: 'some comment1',
                title: 'title 1',
                author: 'Rimus',
            },
            {

                id: 1.2,
                comment: 'some comment2',
                title: 'title 2',
                author: 'Uncle',
            },
            {
                id: 1.3,
                comment: 'some comment3',
                title: 'title 3',
                author: 'Rimus',
            }
        ]
    },
    {
        id: 3,
        post: 'some post3',
        title: 'title 3',
        author: 'Rimus',
    },
    {
        id: 4,
        post: 'ome post4',
        title: 'title 4',
        author: 'Uncle',
    }
]
function getQuntityPostsByAuthor(listOfPosts, nameAuth) {
    let post = 0;
    let comments = 0;
    const authorStatist = listOfPosts.reduce((accumulator, someItem) => {
        if (someItem.author === nameAuth) {
            accumulator.post += 1;
        }
        if (someItem.comments) {
            accumulator.comments += someItem.comments.reduce((accum, message) => (message.author === nameAuth) ? ++accum : accum, 0);
            return accumulator;
        } else {
            return accumulator;
        }
    }, { post, comments });
    return authorStatist;
}
console.log(getQuntityPostsByAuthor(listOfPosts2, 'Rimus'));

// 4 задание
const complexFunction = () => {
    const cache = {};
    return (arg1, arg2) => {
        if (arg1 in cache || arg2 in cache) {
            console.log('Взято из кэша');
            return cache[arg1] || cache[arg2];
        }
        else {
            console.log('Посчитано не из кэша');
            let result = arg1 + arg2;
            cache[arg2] = result;
            return result;
        }
    }
}
const cachedFunc = complexFunction();

console.log(cachedFunc('foo', 'bar')) // complexFunction должна выполнится
console.log(cachedFunc('foo', 'bar')) // complexFunction не должна выполняться
console.log(cachedFunc('foo', 'baz')) // complexFunction должна выполнится  //потому что метод не вызывался раньше с этими аргументами