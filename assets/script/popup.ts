import key from "./key";


const moviesContainer = document.getElementById("movies_container");
const moviesContainer2 = document.getElementById("movies_container2");
const popUp = document.getElementById("pop_up");
const popUpImage = popUp?.querySelector("img")
const popUpTitle = document.querySelector(".popup_title");
const popUpYear = document.querySelector(".popup_year");
const popUpOverview = document.querySelector(".popup_overview");
const popUpRated = document.querySelector(".popup_rated");
const baseurl='https://api.themoviedb.org/3'




export async function openPopUp(movieId) {
  try {
    const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId.target.id}?api_key=${key}`);
    const data = await response.json();
    popUpImage!.src = `https://image.tmdb.org/t/p/w342${data.backdrop_path}`
    popUpTitle.innerHTML = data.title;
    popUpYear.innerHTML = new Date(data.release_date).getFullYear();
    popUpOverview.innerHTML = data.overview;
    popUpRated.innerHTML = `${data.vote_average}/10`;
    popUp.classList.remove("hidden");

  } catch (error) {
    console.log(error);
  }
}



popUp.addEventListener("click", (event) => {
  if (event.target.classList.contains("pop_up") || event.target.classList.contains("popup_close")) {
    popUp.classList.add("hidden");
  }
});
