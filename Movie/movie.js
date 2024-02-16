// GET/MOVIES FROM aPI 
// display films 
// search for films by name (SELECT INPUT Search)
// Drop down for films 
 // -->  by genre --> dropdown: romance,Drama, comedie.
//  -->  films by rating 
//   --> Recent films 
// responsive web design

// 1. Get the movies from the API
const APIURL = "https://api.themoviedb.org/3/discover/movie?api_key=04c35731a5ee918f014970082a0088b1";
const IMGPATH = "https://image.tmdb.org/t/p/w1280";

const SEARCHAPI =
"https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";

const main = document.getElementById('main');
const form = document.getElementById('form');
const search = document.getElementById('search');
