"use strict";




const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,


    start: function () {
        personalMovieDB.count = +prompt('Сколько фильмоф вы уже посмотрели?', '');
            
        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('Сколько фильмоф вы уже посмотрели?', '');
        }
    },
    rememberMyFilms: function () {
        for (let i = 0; i < 2; i++) {
            const a = prompt('Один из последних просмотренных фильмов?', ''),
                b = prompt('На сколько оцените его?', '');
        
            if (a != null && b != null && a != '' && b != '' && a.length < 50) {
                personalMovieDB.movies[a] = b;
                console.log('done');
            } else {
                console.log('error');
                i--;
            }
        }
    },
    detectPersonalLevel: function() {
        if (personalMovieDB.count < 10) {
            console.log('Просмотренно довольно мало фильмов');
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            console .log('Вы классный зритель')
        } else if (personalMovieDB.count >= 30) {
            console.log('Вы киноман')
        } else {
            console.log('Произошла ошибка');
        }
    },
    showMyDB: function (hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
    },
    
    toggleVisible: function {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    },
    writeYourGenres: function() {
    for (let i = 1; i <= 3; i++) {
        personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`, '');
        } 
    }

};


// Урок 17. Методы и свойства строк и чисел


// const str = 'test';

// console.log(str.toUpperCase());
// console.log(str.toLowerCase());
// console.log(str);

// const fruit = 'Some fruit';

// console.log(fruit.indexOf('fruit'));

// const logg = 'hello world';

// // console.log(logg.slice(6, 11));

// // console.log(logg.substring(6,11));

// console.log(logg.substr(6, 5));

// const num = 12.2;
// console.log(Math.round(num));

// const test = '12.2px';
// console.log(parseInt(test));
// console.log(parseFloat(test));




// let num = 20;

// function showFirstMessage(text) {
//     console.log(text);
//     let num = 10;
// }

// showFirstMessage('Hello  World!');
// console.log(num);

// function calc(a, b) {
//     return (a + b);
// }
// console.log(calc(4, 3));
// console.log(calc(5, 6));
// console.log(calc(10, 6));

// function ret() {
//     let num = 50;
//     return num;

// }
// const anotherNum = ret();
// console.log(anotherNum);

// const logger = function () {
//   console.log('Hello')  
// };
// logger();


// const calc = (a, b) => { return a + b };
    





// if (4 == 9) {
//     console.log('Ok!');
// } else {
//     console.log('Error');
// }

// const num = 50;
// if (num < 49) {
//     console.log('Error');
// } else if (num > 100) {
//     console.log('Много');
// } else {
//     console.log('Ok!');
// }

// (num === 50) ? console.log('Ok!') : console.log('Error');

// const num = 51;
// switch (num) {
//     case 49:
//         console.log('Неверно');
//         break;
//     case 100:
//         console.log('Неверно');
//         break;
//     case 50:
//         console.log('В точку');
//         break;
//     default:
//         console.log('Не в этот раз');
//         break;
// }

// let num = 50;

// while (num <= 55) {
//     console.log(num);
//     num++;
// }

// do {
//      console.log(num);
//     num++;
// }
// while (num < 55)


// for (let i = 1; i < 8; i++) {
//     if (i === 6) {
//         // break;
//         continue;
//     }
//     console.log(i);
// }

// Урок 19 Callback- функции

// первый вариант
// function learnJS(lang, Callback) {
//     console.log(`Я учу: ${lang}`);
//     Callback();
// }

// learnJS('JavaScript', function () {
//     console.log('Я прошел этот урок!');
// })

// // второй вариант callback

// function learnJS(lang, Callback) {
//     console.log(`Я учу: ${lang}`);
//     Callback();
// }
// function done() {
//     console.log('Я прошел этот урок!')
// }

// learnJS('JavaScript', done);



// Lesson 20. Объекты деструктуризация
// "use strict";

// const options = {
//     name: 'test',
//     width: 1024,
//     heigth: 1024,
//     colors: {
//         border: 'black',
//         bg: 'red'
//     },
//     makeTest: function () {
//         console.log("Test");
//     }
// };

// options.makeTest();

// const { border, bg } = options.colors;
// console.log(border);

// console.log(Object.keys(options).length);

// console.log(options.name);

// delete options.name;

// console.log(options);


// let counter = 0;

// for (let key in options) {
//     if (typeof (options[key]) === 'object') {
//         for (let i in options[key]) {
//             console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
//             counter++;
//         }
//     } else {
//         console.log(`Свойство ${key} имеет значение ${options[key]}`);
//         counter++;
//     }
    
// }

// console.log(counter);


// Урок 21. Массивы и псевдомассивы.

// "use strict";

// const arr = [1, 26, 21, 6, 8];
// arr.sort(compareNum);
// console.log(arr);

// function compareNum(a, b) {
//     return a - b;
// }


// arr[99] = 0;
//console.log(arr.lenght);
// console.log(arr);

// arr.forEach(function (item, i, arr) {
//     console.log(`${1}: ${item} внутри массива ${arr}`);
// });

// // arr.pop(); //удаляет последний элемент
// // arr.push(10); // добавляет элемент
// // console.log(arr);

// // for (let i = 0; i < arr.length; i++) {
// //     console.log(arr[i]);
// // }

// for (let value of arr) {
//     console.log(value);
// }
// const str = prompt("", "");
// const products = str.split(", ");
// products.sort();
// console.log(products.join('; '));


//  Урок 22. Передача данных по ссылке и по значению.

// "use dtrict";

// let a = 5,
//     b = a;

// b = b + 5;
// console.log(b);
// console.log(a);

// const obj = {
//     a: 5,
//     b: 1
// };
// const copy = obj; // ссылка

// copy.a = 10;

// console.log(copy);
// console.log(obj);

// function copy(mainObj) {
//     let objCopy = {

//     };
//     let key;
//     for (key in mainObj){
//         objCopy[key] = mainObj[key];
//     }
//     return objCopy;
// }

// const numbers = {
//     a: 2,
//     b: 5,
//     c: {
//         x: 7,
//         y: 4
//     }

// };

// const newNumbers = copy(numbers);

// newNumbers.a = 10;

// // console.log(newNumbers);
// // console.log(numbers);

// const add = {
//     d: 17,
//     e: 20
// };
// const clone = Object.assign({}, add);

// clone.d = 20;

// // console.log(add);
// // console.log(clone);

// const oldArray = ['a', 'b', 'c'];
// const newArray = oldArray.slice();

// newArray[1] = 'asdsfas';
// console.log(newArray);
// console.log(oldArray);


// const video = ['youtube', 'vimeo', 'rutube'],
//     blogs = ['wordpress', 'livejournal', 'blogger'],
//     internet = [...video, ...blogs, 'vk', 'facebook'];
// console.log(internet);



// // вариант
// function log(a, b, c) {
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }

// const num = [2, 5, 7];

// log(...num);



// const array = ["a", "b"];
// const newAarray = [...array];







// Урок 23. Основы ООП

// const soldier = {
//     helth: 400,
//     armor: 100,
//     sayHello: function() {
//         console.log("Hello");
//     }
// };

// const jonh = Object.create(soldier);

// Object.setPrototypeOf(jonh, soldier);

// jonh.sayHello();








