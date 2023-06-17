// Api key = 156de9a632e94cfb9b9a113793c69ef8 millard
// Api key = ef425755653455b52b557384ba45e2c1 daniel

//------------------------Comensando la Api-------------------------------------------

const movieName = document.querySelector("#buscar");
const button = document.querySelector("#btn");
const section = document.querySelector("section");


const apiUrl = 'https://api.themoviedb.org/3';
const apiKey   = 'ef425755653455b52b557384ba45e2c1';
const movieTrailer = `https://api.themoviedb.org/3/movie/157336?api_key=ef425755653455b52b557384ba45e2c1&append_to_response=videos,images`;
const apiImage = `https://image.tmdb.org/t/p/original`; //image_path

 

 //https://api.themoviedb.org/3/movie/157336?api_key=ef425755653455b52b557384ba45e2c1&append_to_response=videos,images

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
      console.log(dataApi);
      
      
      //console.log(dataMovies[0].);
      dataMovies.forEach((e) => {

            section.innerHTML += `
            <div class="container">
                <div class="cardGroup">
                  <div class="card">
                        <img src="${e.backdrop_path.jpg}" alt="">
                        <h2>Título: ${e.title}</h2>                        
                        <p>Año de estreno:${e.release_date}</p>
                        <p>Duración</p>
                        <p>Sinopsis: ${e.overview}</p>
                  </div>
                </div>
            </div>

   
       
         `;
      });

    } catch (error) {
      console.log('Error');
  
    }
  
};
