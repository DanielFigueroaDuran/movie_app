const apiKey = 'ef425755653455b52b557384ba45e2c1';
const apiPopular = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`;
const apiImage = 'https://image.tmdb.org/t/p/original'; 
const d = document;

const slider = () => {
  const nextBtn = d.querySelector(".slider-btns .next");
  const preBtn = d.querySelector(".slider-btns .prev");
  const slides = d.querySelector(".slider-slides");

  
  const getDataPopular = async (url) => {
  
 

       const responsePopular = await fetch(url);
       const dataPopular = await responsePopular.json();
       //console.log(dataPopular.results);
       

 
  
    dataPopular.results.forEach(e => {
    
       slides.innerHTML = `
                  
                  <div class="slider-slide active">
                      <img src="${apiImage+e.poster_path}" alt="popular">                
                  </div>              

              
         `;
    });

     
     

  };

     getDataPopular(apiPopular);



  let i = 0;

  d.addEventListener("click", e => {
     e.preventDefault();
    //----------------------------condicional pre---------------------------
    
    if (e.target === preBtn) {
        e.preventDefault();
        slides[i].classList.remove("active");
        i--;

        if (i < 0) {
          i = slides.length - 1;
        }

        slides[i].classList.add("active");
    }
    
    //----------------------------condicional next---------------------------

    if (e.target === nextBtn) {
      slides[i].classList.remove("active");
      i++;

      if (i >= slides.length) {
        i = 0;
        
      }
      slides[i].classList.add("active");
    }


  });

};

slider();


