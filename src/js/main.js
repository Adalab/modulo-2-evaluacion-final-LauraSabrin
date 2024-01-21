"use strict";
console.log("ready :)");
//VARIABLES:
//search:
const form = document.querySelector(".js-form-search");
const inputSearch = document.getElementById("inputSearch");
const searchButton = document.querySelector(".js-search-btn");
const url = "https://api.jikan.moe/v4/anime?q=";

//results:
const favContainer = document.querySelector(".js-favorites-container");
const favList = document.querySelector(".js-favorites-list");
let allContainer = document.querySelector(".js-all-container");
let allList = document.querySelector(".js-all-list");
let dataApiAnime = [];
let resultSearchAnime = [];
let favoritesAnime = [];

//create anime card list
const animeCard = `<div class="allContainer__list js-all-list"
     <article class="allContainer__list--card">
     <figure>
     <img src="${dataApiAnime.image}" alt="Anime picture"/>
    </figure>
    </article>
    <h4>${dataApiAnime.title}</h4>
    </div>`;

//FUNCTIONS:
//1)Get data from API, save data if there is any results --> create a card with its picture and title
const getDataAnime = () => {
  const valueAnime = inputSearch.value;
  console.log(inputSearch.value);
  console.log(valueAnime);
  const urlComplete = url + valueAnime;
  console.log(urlComplete);
  fetch(urlComplete)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      dataApiAnime = data.data;
      console.log(data.data);
      console.log(dataApiAnime);
      console.log(dataApiAnime.title);
      console.log(typeof dataApiAnime);
      renderAnime();
    });
};

//2)I have modified data so i have to create a function to update the info
const renderAnime = () => {
    for (let i = 0 ; i <= dataApiAnime.length; i++);
    if(valueAnime === dataApiAnime[1].title) {

        allContainer.innerHTML += animeCard;
    } else {
        return 'No results to show.'
    }
  //   localStorage.setItem('dataApiAnime', JSON.stringify(dataApiAnime));
};

//event function get input value for searching + complete API's URL):
const handleSearchAnime = (event) => {
  event.preventDefault();
  //get value from user function:
  getDataAnime();
};

//click event listener on search button:
searchButton.addEventListener("click", handleSearchAnime);
