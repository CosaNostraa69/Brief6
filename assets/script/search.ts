    import { fetchMovie, fetchMovie2 } from "./script";

    
    const key = "048688e79e8205e4d8c66bf89622c505"; 
    const baseurl='https://api.themoviedb.org/3';


    const searchInput: HTMLElement | null = document.getElementById("search");
const moviesContainer = document.getElementById("movies_container");
const moviesContainer2 = document.getElementById("movies_container2");


async function searchMovies(query) {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${key}&query=${query}`
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
        <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title}" />
        <div class="movie-info">
          <h3>${movie.title}</h3>
          <span>${movie.vote_average}</span>
        </div>
        <div class="overview">
          <h3>Overview</h3>
          ${movie.overview}
        </div>
      `;
    container.appendChild(movieDiv);
  });
}

searchInput.addEventListener("keyup", async (event) => {
  const query = event.target.value;
  if (query.length > 2) {
    const movies = await searchMovies(query);
    displayMovies(movies, moviesContainer);
  } else {
    moviesContainer!.innerHTML=""
    moviesContainer2!.innerHTML=""
fetchMovie()
fetchMovie2()  }
});

// async function getTopRatedMovies() {
//   try {
//     const response = await fetch(
//       `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=fr-FR&page=1`
//     );
//     const data = await response.json();
//     const movies = data.results.slice(0, 6);
//     displayMovies(movies, moviesContainer2);
//   } catch (error) {
//     console.log(error);
//   }
// }

// getTopRatedMovies();


