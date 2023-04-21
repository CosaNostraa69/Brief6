import { fetchMovie, fetchMovie2 } from "./script";
import {openPopUp2} from "./popup"
import key from "./key";

const baseurl = "https://api.themoviedb.org/3";

const searchInput: HTMLElement | null = document.getElementById("search");
const moviesContainer = document.getElementById("movies_container");
const moviesContainer2 = document.getElementById("movies_container2");
const containerAll = document.querySelector(".movies_container3")
const moviesTitle1 = document.getElementById("title");
const moviesTitle2 = document.getElementById("title2");
var page = 1;

async function searchMovies(query) {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${key}&language=fr-FR&query=${query}&page=${page}`
    );
    const data = await response.json();

    return data.results;
  } catch (error) {
    console.log(error);
  }
}

function displayMovies(movies, container) {

  container.innerHTML = "";
  movies.forEach((movie) => {

    const movieDiv = document.createElement("div");
    
    
    movieDiv.classList.add("movie");
    movieDiv.innerHTML = `
        <img class="movieImage" src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title}" />
        <div class="movieInfo">
          <h3 class="movieName" >${movie.title}</h3>
        </div>
      
      `;
      
    container.appendChild(movieDiv);
    const movieImage= document.querySelector(".movieImage")
    console.log(movieImage);
    
    movieDiv.addEventListener("click", ()=>{
      
            openPopUp2(movie.id)
      
          })
 
  });
}

searchInput.addEventListener("keyup", async (event) => {
  const query = event.target.value;
  if (query.length >= 1) {
    
    const movies = await searchMovies(query);
    const prevButton = document.createElement("button");
    prevButton.id = "prevButton";
    const nextButton = document.createElement("button");
    nextButton.id = "nextButton";
    prevButton.innerText = "Précédent";
    nextButton.innerText = "Suivant";

    prevButton.addEventListener("click", () => {
      if (page > 1) {
        page--;
        searchMovies(searchInput.value).then((movies) => {
          displayMovies(movies, moviesContainer);
        });
      }
    });
    nextButton.addEventListener("click", () => {
      page++;
      searchMovies(searchInput.value).then((movies) => {
        displayMovies(movies, moviesContainer);
      });
    });

    if( !document.querySelector("#prevButton")&& !document.querySelector("#nextButton")){
      containerAll?.appendChild(prevButton);
    containerAll?.appendChild(nextButton);

    }
    
    
    

    document.querySelector(".title").style.display = "none";
    document.querySelector(".title2").style.display = "none";
    document.querySelector("#movies_container2").style.display = "none";
    document.querySelector(".movies_container3").style.display= "flex";


    displayMovies(movies, moviesContainer);
  } else {
    console.log(document.querySelector("#prevButton"));
    
    document.querySelector(".title").style.display = "block";
    document.querySelector(".title2").style.display = "block";
    document.querySelector("#movies_container2").style.display = "flex";
    document.querySelector("#prevButton")?.remove();
    document.querySelector("#nextButton")?.remove();
    document.querySelector(".movies_container3").style.display= "none";


    moviesContainer!.innerHTML = "";
    moviesContainer2!.innerHTML = "";
    fetchMovie();
    fetchMovie2();
  }
});


                  