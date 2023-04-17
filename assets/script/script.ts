import key from "./key";
import {openPopUp} from "./popup"

const baseurl='https://api.themoviedb.org/3'

export async function fetchMovie() {

    try {
        const response = await fetch(`${baseurl}/movie/popular?api_key=${key}&language=fr-FR&page=1`)
        const data = await response.json()

        console.log(data.results);

        const PopularMovies = data.results
        const moviesContainer = document.getElementById('movies_container') as HTMLDivElement;

        PopularMovies.forEach(movie => {
            const movieElement = document.createElement('div');
            movieElement.classList.add('movie');

            const moviePoster = document.createElement('img');
            moviePoster.src = `https://image.tmdb.org/t/p/w342${movie.poster_path}`;
            moviePoster.alt = movie.title;
            moviePoster.id= movie.id
            moviePoster.addEventListener("click", openPopUp)

            movieElement.appendChild(moviePoster);
            moviesContainer.appendChild(movieElement);
        });

    } catch (err) {
        console.log()
        }
}

fetchMovie()

export async function fetchMovie2() {

    try {
        const response = await fetch(`${baseurl}/movie/top_rated?api_key=048688e79e8205e4d8c66bf89622c505&language=fr-FR&page=1`)
        const data = await response.json()

        console.log(data.results);

        const PopularMovies = data.results
        const moviesContainer = document.getElementById('movies_container2') as HTMLDivElement;

        PopularMovies.forEach(movie => {
            const movieElement = document.createElement('div');
            movieElement.classList.add('movie2');

            const moviePoster = document.createElement('img');
            moviePoster.src = `https://image.tmdb.org/t/p/w342${movie.poster_path}`;
            moviePoster.alt = movie.title;
            moviePoster.id= movie.id
            moviePoster.addEventListener("click", openPopUp)


            movieElement.appendChild(moviePoster);
            moviesContainer.appendChild(movieElement);
        });

    } catch (err) {
        console.log()
        }
}

fetchMovie2()