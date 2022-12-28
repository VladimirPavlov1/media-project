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



apiService.getBaseGenresArr().then(data=>{
   
    let genresBase=data.genres
    console.log(genresBase);
    function findGenre(el){
      
       let result;
        genresBase.forEach(genre =>{    
          if(el===genre.id){
            result= genre.name;
           
          }    
        
        })
        return result 
    }
    console.log(findGenre(28))
 
    apiService.fetchMovieTrending().then(data=>{
        return data.map(({genre_ids})=>{
        console.log(genre_ids)
        let newArrGenre=[];
        for(let i=0;i<genre_ids.length;i+=1){
            console.log(genre_ids[i])
            console.log(findGenre(genre_ids[i]))

           
        }
    }) 
        
    })
  
})


function rendPopular(){
    apiService.fetchMovieTrending().then(results=>{
        console.log(results);
        let genres_name ='';
        refs.galleryEl.insertAdjacentHTML('beforeend',createCardMovie(results))
    
    });
}

rendPopular();

refs.formEl.addEventListener('submit', onFormSubmit)

function onFormSubmit(e){
    e.preventDefault();
   
   
   
    clearGallery();

    apiService.query=e.currentTarget.elements.filmSearch.value;

    clearInputEl(e);

    if (apiService.query.trim() === '') {
           refs.labelEl.style.opacity=1;
           rendPopular();
           
    }else{ refs.labelEl.style.opacity=0;
        clearGallery();
    }
   
    
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