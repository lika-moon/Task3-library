//СЛОЖНЫЕ ЗАДАЧИ 
//           (29) № 1 Задача: Управление библиотекой 

// 
// Цель: создать систему управления для небольшой библиотеки. Ваша задача - разработать функционал для
// учета книг и запросов читателей.
// Базовые требования:
// У вас есть массив объектов books, где каждый объект представляет книгу с полями: id (уникальный
// идентификатор), title (название), author (автор), и isAvailable (доступность книги для выдачи).
// Есть массив объектов requests, где каждый объект содержит userId (идентификатор пользователя) и
// bookId (идентификатор запрашиваемой книги).
//                  Задачи:
// 1. Проверка доступности книги: Напишите функцию, которая принимает bookId и возвращает true, если
// книга доступна для выдачи, и false - в противном случае.
// 2. Поиск книги по автору: Разработайте функцию, которая принимает имя автора и возвращает массив всех
// книг этого автора, доступных в библиотеке.
// 3. Обработка запросов на выдачу книг: Создайте функцию, которая обрабатывает массив requests,
// проверяя каждый запрос. Если книга доступна, функция должна обновить статус isAvailable на false и
// выводить сообщение о том, что книга выдана пользователю. Если книга недоступна, выводить сообщение о
// том, что книга уже выдана.
// 4. Возврат книги: Напишите функцию, которая принимает bookId и обновляет статус isAvailable данной
// книги на true, с выводом сообщения о возврате книги.
//                  Примерданных:
// const books = [
// { id: 1, title: "Войнаимир", author: "ЛевТолстой", isAvailable: true },
// { id: 2, title: "ГарриПоттерифилософскийкамень", author: "Дж. К. Роулинг", isAvailable: false },
// { id: 3, title: "Улисс", author: "ДжеймсДжойс", isAvailable: true }
// ];
// const requests = [
// { userId: 101, bookId: 1 },
// { userId: 102, bookId: 2 },
// { userId: 103, bookId: 3 }
// ];
// Результаты вызовов функций, которые вы напишете (для самопроверки). Можете использовать такие же
// названия функций
// Проверяем доступность книги с ID 1
// console.log(isBookAvailable(books, 1)); // Должновернуть true
// Находим книги автора "Лев Толстой"
// console.log(findBooksByAuthor(books, "Лев Толстой")); // Должен вернуть массив с одной книгой
// Обрабатываем запросы на выдачу книг
// processRequests(books, requests);
// Возвращаем книгу с ID 1
// returnBook(books, 1);
// Проверяем, снова доступна ли книга с ID 1
// console.log(isBookAvailable(books, 1)); // Должно вернуть true
// Требования к выполнению:
// Используйте циклы для обхода массивов.
// Примените условные конструкции для проверки доступности книг.
// Управляйте объектами для обновления их состояния


const books = [
    { id: 1, title: "Войнаимир", author: "ЛевТолстой", isAvailable: true },
    { id: 2, title: "ГарриПоттерифилософскийкамень", author: "Дж. К. Роулинг", isAvailable: false },
    { id: 3, title: "Улисс", author: "ДжеймсДжойс", isAvailable: true },

];
console.log()

const requests = [
    { userId: 101, bookId: 1 },
    { userId: 102, bookId: 2 },
    { userId: 103, bookId: 3 }
];

let needBook = [];
let allAvtorBooks = [];
let bookRegest = [];
let bookReturn = [];
let twinsId = [];
let arrRequestsId = [];
let arrBooksId = [];

function isBookAvailable(mass, num) {

    for (let i = 0; i < mass.length ; i++) {
        if (books[i].id === num) {
            needBook = books[i].isAvailable
            // console.log(needBook);
        }
    }
}
isBookAvailable(books, 1);
console.log(needBook);



function findBooksByAuthor(books, str) {
    for (let i = 0; i < books.length; i++) {
        if (books[i].author.includes(str)) {
            allAvtorBooks.push(books[i])
        }
    }
}
findBooksByAuthor(books, "Дж. К. Роулинг")
console.log(allAvtorBooks)



function processRequests(books, requests) {
    for (let i = 0; i < requests.length; i++) {
        (arrRequestsId = requests.map(function (elem) {
            return elem = elem.bookId
        }))
    }
    for (i = 0; i < books.length; i++) {
        (arrBooksId = books.map(function (elem) {
            return elem = elem.id
        }))
        if (arrRequestsId.filter(elem => arrBooksId.includes(elem))) {
            bookRegest.push(books[i].isAvailable)
        }
    }
    for (i = 0; i < bookRegest.length; i++) {
        if (bookRegest[i] === true) {
            console.log('книгу можно взять')
        }
        else {
            console.log('книгa на руках')
        }
    }
}
processRequests(books, requests);


function returnBook(books, num) {
    for (let i = 0; i < books.length; i++) {
        if (books[i].id === num) {
            bookReturn = books[i].isAvailable
            console.log(bookReturn);
        }
    }
    for (let i = 0; i < books.length; i++) {
        if (bookReturn === true) {
            console.log(bookReturn !== true)

        }
        else if (bookReturn === false) { console.log(bookReturn !== true) }

    }
}
returnBook(books, 2);