const container = document.querySelector(".container");
const button = document.querySelector("#btn");
//console.log(button);


const parameter = window.location.search;
const newParam = new URLSearchParams(parameter);
const idMovie = newParam.get("id");

//console.log(idMovie);

const apiKey   = 'ef425755653455b52b557384ba45e2c1';
const apiName = `https://api.themoviedb.org/3/movie/${idMovie}?api_key=ef425755653455b52b557384ba45e2c1`;
 
 const apiImage = 'https://image.tmdb.org/t/p/original'; 


const getDataMovie = async (url) => {

  //console.log(url);
  try {
     const responseMovie = await fetch(url);
     const dataMovie = await responseMovie.json();    
       
    console.log(dataMovie);
    console.log(dataMovie.title);
    
    container.innerHTML = `
          <div class="card">
                          <img class="movie" src="${apiImage+dataMovie.poster_path}" alt="">
                          <h2>Título: ${dataMovie.title}</h2>                        
                          <p>Date: ${dataMovie.release_date}</p>
                          <p>Duración: ${dataMovie.runtime}</p>
                          <p>Director: ${dataMovie.production_companies[0].name}</p> // tengo que hacer un forech
                          <p>Sinopsis: ${dataMovie.overview}</p>
                        
             </div>
    `;
    //movie.forEach(e => {
      //console.log(e.poster_path);
      //     if (e.poster_path === null) {
      //       return delete(e.poster_path);
      // }
      
    //   container.innerHTML += `
          
      
    //   `;
    // });
    


    
  } catch (error) {
    console.log('Error');
  }
};

getDataMovie(apiName);




 






