import ApiService from "./Api-service";
import createCardMovie from "./create-card";
import Notiflix from "notiflix";


const refs={
    formEl:document.querySelector('.form-search'),
    inputEL:document.querySelector('.input-search-h'),
    btnHEl:document.querySelector('.form-btn-h'),
    galleryEl:document.querySelector('.gallery'),
    labelEl:document.querySelector('.form__label'),
}
console.log(refs)


const apiService = new ApiService();
console.log(apiService)

apiService.fetchMovieTrending().then(results=>{
    console.log(results);
    refs.galleryEl.insertAdjacentHTML('beforeend',createCardMovie(results))

});

refs.formEl.addEventListener('submit', onFormSubmit)

function onFormSubmit(e){
    e.preventDefault();
   
   
   
    clearGallery();

    apiService.query=e.currentTarget.elements.filmSearch.value;

    clearInputEl(e);

    if (apiService.query.trim() === '') {
           refs.labelEl.style.opacity=1;
           
    }else{ refs.labelEl.style.opacity=0;}
   
    
    apiService.fetchMovieSearch().then(results=>{
        refs.galleryEl.insertAdjacentHTML('beforeend',createCardMovie(results));
        
        
});
  
    

}

function clearGallery(){
    refs.galleryEl.innerHTML="";
}



function clearInputEl(e){
    e.currentTarget.elements.filmSearch.value='';
}