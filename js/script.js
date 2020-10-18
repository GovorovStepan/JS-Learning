'use strict';

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?');
const personalMovieDB= {
    count: numberOfFilms,
    movies: {},
    actors: {},
    generes: [''],
    privat: false

};
if (personalMovieDB.count < 10) {
    console.log('Просмотренно слишком мало')
} else if (personalMovieDB.count > 10 && personalMovieDB.count < 30) {
    console.log('Вы классический зритель')
} else if (personalMovieDB.count > 30) {
    console.log('Вы киноман')
} else {
    console.log('Произошла ошибка')
}

for (let i = 1; i < numberOfFilms; i++) {
    const lastMovie = prompt('Последний просмотренный фильм?'),
        lastMovieRate = prompt('На сколько оцените его ?');
    if (lastMovie != null && lastMovieRate != null && lastMovie != '' && lastMovieRate != '' && lastMovie.length < 50) {
        personalMovieDB.movies[lastMovie] = lastMovieRate;
        console.log('done');
    } else {
        console.log('error');
        i--;
    }


}