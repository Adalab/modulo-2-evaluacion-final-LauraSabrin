"use strict";
console.log("ready :)");
//VARIABLES:
//search:
const form = document.querySelector(".js-form-search");
const inputSearch = document.getElementById("inputSearch");
const searchButton = document.querySelector(".js-search-btn");
const url = "https://api.jikan.moe/v4/anime?q=";
const clickedAnime = document.querySelector(".js-container-clicked");

//results:
const favContainer = document.querySelector(".js-favorites-container");
const favList = document.querySelector(".js-favorites-list");
let allContainer = document.querySelector(".js-all-container");
let allList = document.querySelector(".js-all-list");
let dataApiAnime = [];
let resultSearchAnime = [];
let favoritesAnime = [];
const valueAnime = inputSearch.value;

//create anime card list
let animeCard = " ";

//FUNCTIONS:
//1)Get data from API, save data if there is any results --> create a card with its picture and title
const getDataAnime = () => {
  const urlComplete = url + valueAnime;

   fetch(urlComplete)
    .then((response) => response.json())
    .then((data) => {
        dataApiAnime = data.data;
        renderAnime();

  //   localStorage.setItem('dataApiAnime', JSON.stringify(dataApiAnime));
});
      console.log(data);
      console.log(data.title);
      console.log(dataApiAnime);
      //console.log(dataApiAnime[1]);
      //console.log(typeof dataApiAnime[4]);
      //console.log(typeof data);
      
      //getTitles();
};

const renderAnime = () => {
    for (let i = 0; i <= dataApiAnime.length; i++) {
        animeCard += `<div class="allContainer__list js-all-list"
        <article class="allContainer__list--card">
        <figure>
        <img src="${dataApiAnime.images}" alt="Anime picture"/>
       </figure>
       </article>
       <h4>${dataApiAnime.title}</h4>
       </div>`;
    }
    console.log(animeCard);

};
// function getTitles(valueAnime) {
//   return dataApiAnime.filter((anime) => anime.title === valueAnime);
// }
// getTitles();

const handleSearchAnime = (event) => {
  event.preventDefault();
   getDataAnime();
};

//click event listener on search button:
searchButton.addEventListener("click", handleSearchAnime);
