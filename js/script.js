'use strict';

const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?");
const personalMoiveDB = {
          count : numberOfFilms,
          movies :{},
          actors :{},
          generes : [''],
          privat : false

      };

const lastMovie1 = prompt("Последний просмотренный фильм?"),
      lastMovieRate1 = prompt('На сколько оцените его ?'),
      lastMovie2 = prompt("Последний просмотренный фильм?"),
      lastMovieRate2 = prompt('На сколько оцените его ?');

personalMoiveDB.movies[lastMovie1] = lastMovieRate1;
personalMoiveDB.movies[lastMovie2] = lastMovieRate2;