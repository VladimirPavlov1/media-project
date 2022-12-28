const BASE_URL= 'https://api.themoviedb.org/3/';
const API_KEY = 'api_key=27cddf1230eab22bdf20f54c99a70037';

export default class {
    constructor(){
        this.searchQuery='';
        this.page=1;
        this.genresArr=this.getBaseGenresArr();
       
       
    }

    fetchMovieTrending(){
        return fetch(`${BASE_URL}trending/movie/week?${API_KEY}`)
        .then(response=>response.json())
        .then(data=>data.results)
        
        
    }
    fetchMovieSearch(){
        return fetch(`${BASE_URL}search/movie?${API_KEY}&query=${this.searchQuery}&page=${this.page}`)
        .then(response=>response.json())
        .then(data=>data.results)
    }

    getBaseGenresArr(arr){
        return fetch(`${BASE_URL}genre/movie/list?${API_KEY}`)
        .then(response=>response.json())
        
        
            
       
        
    }
    

    get query(){
        return this.searchQuery;
    }

    set query(newQuery){
        this.searchQuery=newQuery;

    }
}
