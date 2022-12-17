function createCardMovie(arr){
    return arr.map(item=>`<li class="gallery__item">
    <img src="${item.poster_path}" alt="${item.title}">
    <h3 class="film-title">${item.title}</h3>
    <p class="film-genre">${genre_ids}</p>
    <p class="film-data">${release_date}</p>
  </li>`).join("")
}

fetch("https://api.themoviedb.org/3/trending/movie/week?api_key=27cddf1230eab22bdf20f54c99a70037")
.then(response=>response.json())
.then(data=>console.log(data.results))