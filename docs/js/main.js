console.log("ready :)");document.querySelector(".js-form-search");const c=document.getElementById("inputSearch"),a=document.querySelector(".js-search-btn"),l="https://api.jikan.moe/v4/anime?q=";document.querySelector(".js-container-clicked");document.querySelector(".js-msg-error");document.querySelector(".js-favorites-card");document.querySelector(".js-favorites-list");document.querySelector(".js-all-container");let n=document.querySelector(".js-all-list"),t=[];const i=c.value,o=()=>{const e=l+i;fetch(e).then(r=>r.json()).then(r=>{t=r.data,s()})},s=()=>{for(let e=0;e<t.length;e++)n.innerHTML+=`<article class="allContainer__list--card  js-favorites-card">
    <figure class="figure__anime">
    <img src="${t[e].images.jpg.image_url}" class="figure__anime--img" alt="Anime picture"/>
   </figure>
   <h4 class="figure__anime--title">${t[e].title}</h4>
   </article>`},u=e=>{e.preventDefault(),o()};a.addEventListener("click",u);n.addEventListener("click",e=>{console.log(e.currentTarget)});
//# sourceMappingURL=main.js.map
