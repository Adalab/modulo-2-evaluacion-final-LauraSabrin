"use strict";
console.log("ready :)");
//VARIABLES:
//search:
const form = document.querySelector(".js-form-search");
const inputSearch = document.getElementById("inputSearch");
const searchButton = document.querySelector(".js-search-btn");
const url = "https://api.jikan.moe/v4/anime?q=";
const clickedFavorite = document.querySelector(".js-container-clicked");
const errorMsg = document.querySelector(".js-msg-error");



//results:
const favCard = document.querySelector(".js-favorites-card");
const favList = document.querySelector(".js-favorites-list");
let allContainer = document.querySelector(".js-all-container");
let allList = document.querySelector(".js-all-list");
let dataApiAnime = [];
let favoritesAnime = [];
const valueAnime = inputSearch.value;

//FUNCTIONS:
//1)Get data from API, save data if there is any results --> create a card with its picture and title
const getDataAnime = () => {
  const urlComplete = url + valueAnime;

  fetch(urlComplete)
    .then((response) => response.json())
    .then((data) => {
         dataApiAnime = data.data;
         renderAnime();
   
    });
  

};

const renderAnime = () => {
  for (let i = 0; i < dataApiAnime.length; i++){
    allList.innerHTML += `<article class="allContainer__list--card  js-favorites-card">
    <figure class="figure__anime">
    <img src="${dataApiAnime[i].images.jpg.image_url}" class="figure__anime--img" alt="Anime picture"/>
   </figure>
   <h4 class="figure__anime--title">${dataApiAnime[i].title}</h4>
   </article>`;
  
  }  
  }
  // const handleAddFavorite =()=> {
  //   if(favCard === )

  //   }
  


const handleSearchAnime = (event) => {
  event.preventDefault();
  getDataAnime();
};

//click event listener on search button:
searchButton.addEventListener('click', handleSearchAnime);
allList.addEventListener('click', (event) => {
  console.log(event.currentTarget);
});
