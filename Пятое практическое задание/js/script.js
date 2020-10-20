/* Задания на урок:

1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
"Добавляем любимый фильм"

5) Фильмы должны быть отсортированы по алфавиту */
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

const adv = document.querySelectorAll('.promo__adv img'),
    poster = document.querySelector('.promo__bg'),
    genre = poster.querySelector('.promo__genre'),
    movieList = document.querySelector('.promo__interactive-list'),
    addButton = document.querySelector('button'),
    deleteButton = document.querySelector('.delete'),
    check = document.querySelector('#check');


adv.forEach(item => {
    item.remove();
});

check.addEventListener('click', () => {
    if (check.checked) {
        console.log('Добавляем любимый фильм');
    }
});

addButton.addEventListener('click', (e) => {
    e.preventDefault();
    if (document.querySelector('.adding__input').value.length < 21) {
        movieDB.movies.push(document.querySelector('.adding__input').value);
    } else {
        movieDB.movies.push(`${document.querySelector('.adding__input').value.slice(0,21)}...`);
    }
    createMovieList(movieDB.movies, movieList);
});

genre.textContent = 'драма';

poster.style.backgroundImage = 'url("img/bg.jpg")';

const sortArr = (arr) => {
    arr.sort();
};

function createMovieList(films, parent) {
    parent.innerHTML = "";
    sortArr(films);

    films.forEach((film, i) => {
        parent.innerHTML += `
            <li class="promo__interactive-item">${i + 1} ${film}
                <div class="delete"></div>
            </li>
        `;
    });

    document.querySelectorAll('.delete').forEach((btn, i) => {
        btn.addEventListener('click', () => {
            btn.parentElement.remove();
            movieDB.movies.splice(i, 1);

            createMovieList(films, parent);
        });
    });
}

createMovieList(movieDB.movies, movieList);