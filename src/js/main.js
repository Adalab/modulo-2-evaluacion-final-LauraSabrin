'use strict';

//FORM:
const form = document.querySelector('.js-form-search');
const searchInput = document.querySelector('.js-input-search');
const searchButton = document.querySelector('.js-search-btn');
const resultList = document.querySelector('.js-result-list');

const resetButton = document.querySelector('.js-reset-btn');
let results = [];
let favorites = [];

const searchAnime =()=> {
    fetch('https://api.jikan.moe/v4/anime/{id}/full'),
    .then((response) => response.json())
    .then ((data => )=> {
    results = data.titles + data.images
    });
};


// const handleSearch =()=> {}

// 

//click event listener on search button:
searchButton.addEventListener('click', handleSearch);



