export default function createCardMovie(arr){
    const IMG_PATH='https://image.tmdb.org/t/p/original/';
    return arr.map(items=>`<li class="gallery__item">
    <img src="${IMG_PATH}${items.poster_path}" alt="${items.title}">
        <h3 class="film-title">${items.title}</h3>
    <div class="thumb-text">
        <p class="film-genre">${items.genre_ids}</p>
        <span class="text-element">|</span>
        <p class="film-data">${items.release_date}</p>
    </div>
  </li>`).join("")
}

