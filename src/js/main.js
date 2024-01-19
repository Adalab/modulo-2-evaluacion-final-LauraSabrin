'use strict';
console.log('ready :)');
//VARIABLES:
//search:
const form = document.querySelector('.js-form-search');
const inputSearch = document.getElementById ('inputSearch');
const searchButton = document.querySelector('.js-search-btn');
const url = 'https://api.jikan.moe/v4/anime?q=';

//reset:
const resetButton = document.querySelector('.js-reset-btn');

//results:
const results = document.querySelector('.js-result-list');
const favorites = document.querySelector('.js-favorites-list');
let dataAnime= [];

let resultSearchAnime = [];


//FUNCTIONS:

//event function (get input value for searching + complete API's URL):
const handleSearchAnime =(event)=> {
    event.preventDefault();
    
//get value from user function:
const valueAnime = inputSearch.value;
const urlComplete = url + valueAnime;

//Get data from API, save datait there is a result --> create a card with its picture and title
const getDataAnime =(titles, images)=> {
    fetch(urlComplete)
    .then ((response) => response.json())
    .then((data)=> {
        resultSearchAnime = dataAnime.filter
        
     
});

   }
}

getDataAnime();


//click event listener on search button:
searchButton.addEventListener('click', handleSearchAnime);

    




