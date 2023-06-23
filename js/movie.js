const container = document.querySelector(".container");
const button = document.querySelector("#btn");
//console.log(button);


const parameter = window.location.search;
const newParam = new URLSearchParams(parameter);
const idMovie = newParam.get("id");

//console.log(idMovie);

const apiKey   = 'ef425755653455b52b557384ba45e2c1';
const apiId = `https://api.themoviedb.org/3/movie/${idMovie}?api_key=ef425755653455b52b557384ba45e2c1`;
 
const apiImage = 'https://image.tmdb.org/t/p/original'; 
const apiDirector = `https://api.themoviedb.org/3/movie/${idMovie}/credits?api_key=${apiKey}`
const apiTrailer = `https://api.themoviedb.org/3/movie/${idMovie}/videos?api_key=${apiKey}`;

const getDataMovie = async (apiId, apiDirector) => {
  
  
  //console.log(url);
  try {

    //console.log(apiTrailer);

    // const responseTrailer = await fetch(apiTrailer);
    // const dataTrailer = await responseTrailer.json();
    // console.log(dataTrailer.results);
    // console.log(dataTrailer.results[0].site);

    //------------------------Buscando Director-------------------------------------------

      const responseDirector = await fetch(apiDirector);
      const dataDirector = await responseDirector.json();
        //console.log(dataDirector);
      const arrdirector = dataDirector.crew.filter((e) => {
          if (e.job === 'Director') {
            return true;
          } else {
            return false;
          }
      });
    
    //console.log(arrdirector);


        //------------------------------------buscando por ID------------------------------
    
     const responseMovie = await fetch(apiId);
     const dataMovie = await responseMovie.json();    
       
    
    //console.log(dataMovie.id);
    
    container.innerHTML = `
          <div class="card">
                          <img class="movie" src="${apiImage+dataMovie.poster_path}" alt="">
                          <h2>Título: ${dataMovie.title}</h2>                        
                          <p>Date: ${dataMovie.release_date}</p>
                          <p>Duración: ${dataMovie.runtime} Minutos</p>
                          <div class="director"> </div>
                          <p>Sinopsis: ${dataMovie.overview}</p>
                      <div class="favorite">
                          <a href=""><button class="btnMore" type="button">Add to Favorites</button></a>
                          <p></p>
                      </div>
          </div>
               `;
                         
    const directores = document.querySelector(".director");   
    const btnMore = document.querySelector(".btnMore");
    btnMore.addEventListener("click", () => {
        saveMovie(dataMovie.id,apiImage + dataMovie.poster_path,dataMovie.title,dataMovie.release_date)
    })
    
    const director = arrdirector.forEach(e => {
      
      directores.innerHTML += `
          <p>Director: ${e.name}</p>
      `;
      
    });
    
    //console.log(director);
    
    const favorite = document.querySelector(".favorite button");

    //console.log(favorite);

    // favorite.addEventListener("click", (e) => {
      
    //   //console.log("hola");
    // });

    
  } catch (error) {
    console.log('Error');
  }
};

getDataMovie(apiId,apiDirector,apiTrailer);

//------------------------------Gardar en lacalStore------------------
export const saveMovie = async (id, img, title,date) => {
  
 
  const movie = JSON.parse(localStorage.getItem("movie")) || [];
  const repeated =  movie.find(newMovie => newMovie.id === id);

  if (repeated) {
    localStorage.setItem("movie", JSON.stringify(movie));    
      const message = document.querySelector(".favorite p");
      message.innerHTML = `La Pelicula ya se encuentra en favoritos`;
    //console.log(message);
    setTimeout(() => {
  message.innerHTML = ''
},4000)
  
    } else {
      //message.innerHTML = ` Pelicula agregada`;
      const moveData = {
        id: id,
        img: img,
        title: title,
        date: date
      };
      movie.push(moveData);
      localStorage.setItem("movie", JSON.stringify(movie));
  }
  
  
};







//saveMovie(apiId);







