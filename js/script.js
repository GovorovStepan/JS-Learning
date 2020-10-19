'use strict';

const personalMovieDB = {

    count: 0,
    movies: {},
    actors: {},
    genres: [''],
    privat: false,

    start() {
        personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
        }
    },

    rememberMyFilms() {
        for (let i = 0; i < personalMovieDB.count; i++) {
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
    },
    detectPersonalLevel() {
        if (personalMovieDB.count < 10) {
            console.log('Просмотренно слишком мало');
        } else if (personalMovieDB.count > 10 && personalMovieDB.count < 30) {
            console.log('Вы классический зритель');
        } else if (personalMovieDB.count > 30) {
            console.log('Вы киноман');
        } else {
            console.log('Произошла ошибка');
        }
    },

    showMyDB(hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        }
    },

    toggleVisibleMyDB() {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    },
    writeYourGenres() {
        for (let i = 1; i <= 3; i++) {
            let genre = prompt(`Ваш любимый жанр под номером ${i}`);
            if (genre == '' || genre == null || isNaN(genre)) {
                personalMovieDB.genres[i - 1] = genre;
            } else {
                i--;
            }
        }
        personalMovieDB.genres.forEach((genre, i) => console.log(`Любимый жанр #${i+1}- это ${genre}`));
    }
};
personalMovieDB.start();
personalMovieDB.rememberMyFilms();
personalMovieDB.detectPersonalLevel();
personalMovieDB.showMyDB();
personalMovieDB.toggleVisibleMyDB();
personalMovieDB.writeYourGenres();