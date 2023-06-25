// Api key = 156de9a632e94cfb9b9a113793c69ef8 millard
// Api key = ef425755653455b52b557384ba45e2c1 daniel

//------------------------Comensando la Api-------------------------------------------

const movieName = document.querySelector("#buscar");
const button = document.querySelector("#btn");
const container = document.querySelector(".container");


const apiUrl = 'https://api.themoviedb.org/3';
const apiKey   = 'ef425755653455b52b557384ba45e2c1';
const movieTrailer = `https://api.themoviedb.org/3/movie/157336?api_key=${apiKey}&append_to_response=videos,images`;
const apiImage = 'https://image.tmdb.org/t/p/original'; 
const apiPopular = `https://api.themoviedb.org/3/movie/popular?api_key=ef425755653455b52b557384ba45e2c1`;

//-------------------------Peliculas Populares----------------------------
// #region nombre

 const getDataPopular = async (url) => { 
  
  const responsePopular = await fetch(url);
  const dataPopular = await responsePopular.json();
   //console.log(dataPopular.results);
   const slides = document.querySelector(".slider-slides");

  
  dataPopular.results.forEach((e) => {
    slides.innerHTML = `             
                         <div class="slider-slide active">                        
                            <img src="${apiImage+e.poster_path}" alt="popular">                
                         </div> 
                          
                        `;                     
                        
  });                                                  

 };

 getDataPopular(apiPopular);


 button.addEventListener("click", () => { 
   //console.log(buscar.value);
   const apiName = `https://api.themoviedb.org/3/search/movie?query=${movieName.value}&api_key=${apiKey}&append_to_response=videos,images`;
   
   getDataName(apiName);

});

const getDataName = async (apiName) => { 
    try {
        const response = await fetch(apiName);
        const dataApi = await response.json();
      const dataMovies = dataApi.results; 
      //console.log(dataApi);
      
        
      
      //console.log(dataMovies[0].);
      dataMovies.forEach((e) => {
        //console.log(e.poster_path);

        if (e.poster_path === null) {
          return delete(e.poster_path);
        }
            container.innerHTML += `            
                
                  <div class="card">
                        <img class="movie" src="${apiImage+e.poster_path}" alt="">
                        <h2>Título: ${e.title}</h2>                        
                        <p>Date: ${e.release_date}</p>
                      <div>
                          <a href="./pages/movie.html?id=${e.id}"><button class="btnMore" type="button">More</button></a>
                      </div>          
                  </div>       
                        `;
                      });

    } catch (error) {
      console.log('Error');
  
    }
  
};
// #endregion