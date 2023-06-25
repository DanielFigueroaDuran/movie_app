// import {saveMovie} from './movie.js'

// saveMovie();

const container = document.querySelector(".container");

const movieData = JSON.parse(localStorage.getItem("movie"));

//-------------------------------------------------------Paint Favorities----------------

const paintMovie = (movieData) => { 
  
  movieData.forEach((e) => {
    //console.log(e.title);
    container.innerHTML += `
          <div class="card">
                        <img class="movie" src="${e.img}" alt="">
                        <h2>Título: ${e.title}</h2>                        
                        <p>Date: ${e.date}</p>
                      <div class="buttonGroup">
                          <a href="./movie.html?id=${e.id}">
                              <button class="btnMore" type="button">More</button>
                          </a>
                              <button class="btnMore btnDelete" type="button">Delete</button>
                      </div>          
                  </div> 
    `;    
  });

     //-----------------------------------------Eliminando De Favorities--------------------------------------------
    
    const eliminate = document.querySelectorAll(".btnDelete");
    
    
    eliminate.forEach((element,i) => { 
      //console.log(element);
      
      element.addEventListener("click", (event) => {
        
        deleteMovie(movieData[i].id);
        //console.log(event.target.parentNode.parentNode);
        const divCard = event.target.parentNode.parentNode;
        //console.log(divCard);
        divCard.remove();
        
        const movieData2 = JSON.parse(localStorage.getItem("movie"));
        //console.log(movieData2.length);

        if (movieData2.length === 0) {
          container.innerHTML = `
                  <div class="card">
                    <p>No Movies!</p>
                  </div>                
          
          
          `;
            
          
       }
        
      });
    });

};

paintMovie(movieData);


    const deleteMovie = (id) => { 
      //console.log(id);

      const movie = JSON.parse(localStorage.getItem("movie"))
     
      const movieDelete = movie.filter(movie => movie.id !== id);
     
       localStorage.setItem("movie", JSON.stringify(movieDelete));

     
};