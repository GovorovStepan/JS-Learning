/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};
//1
document.querySelector('.promo__adv').remove(),

    //2
    document.querySelector('.promo__genre').remove(),
    document.querySelector('.promo__bg').insertAdjacentHTML('afterbegin', '<div class="promo__genre">Драма</div>')

//3
document.querySelector('.promo__bg').style.background = 'url("img/bg.jpg") center no-repeat ';
document.querySelector('.promo__bg').style.backgroundSize = 'cover';

//4
document.querySelector('.promo__interactive-list').innerHTML = "";

movieDB.movies.sort();

movieDB.movies.forEach((film, i) => {
    document.querySelector('.promo__interactive-list').innerHTML += `
        <li class="promo__interactive-item">${i + 1} ${film}
            <div class="delete"></div>
        </li>
    `;
});