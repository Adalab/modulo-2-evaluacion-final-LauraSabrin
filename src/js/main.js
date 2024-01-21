'use strict';
console.log('ready :)');
//VARIABLES:
//search:
const form = document.querySelector('.js-form-search');
const inputSearch = document.getElementById('.js-input-search');
const searchButton = document.querySelector('.js-search-btn');
const url = 'https://api.jikan.moe/v4/anime?q=';

//reset:
const resetButton = document.querySelector('.js-reset-btn');

//results:
const favContainer = document.querySelector('.js-favorites-container');
const favList = document.querySelector('.js-favorites-list');
const allContainer = document.querySelector('.js-all-container'); 
const allList = document.querySelector('.js-all-list');

let dataApiAnime = [];
let resultSearchAnime = [];
let favoritesAnime = [];


//FUNCTIONS:
////Get data from API, save data if there is any results --> create a card with its picture and title
const getDataAnime =()=> {
    fetch(urlComplete)
    .then ((response) => response.json())
    .then((data)=> {
        resultSearchAnime =  dataApiAnime.filter  
});

   }
//event function (get input value for searching + complete API's URL):
const handleSearchAnime =(event)=> {
    event.preventDefault();
//get value from user function:
const valueAnime = inputSearch.value;
const urlComplete = url + valueAnime;
getDataAnime();

}



//click event listener on search button:
searchButton.addEventListener('click', handleSearchAnime);

    




