import { Link } from 'react-router-dom'
import './Movies.css'

export default function Movies() {

  return (
    <div className='movies-wrapper'>
      <Link className='backto-portfolio' to='/portfolio'> &larr; Portfolio </Link>
      <h1 className='title'>Movie Search App </h1>
      <div className='open-app-div'>
        <a href='https://movie-actor-search.herokuapp.com' target='_blank' rel='noreferrer'><button className='open-app-button'>Open App</button></a>
        <a href='https://github.com/toddcford/Movie_App' target='_blank' rel='noreferrer'><button className='open-app-button'>Code Repository</button></a>
      </div>
      <div className='movie-content-wrapper'>
        <p>
          This movie search app allows users to search for movies in the IMDB database and returns
          the names and images of the three leading actors/actresses. It's built using React, Next.js, Express,
          and Mongoose/MongoDB. The app utilizes both the IMDB API and Google Image's Custom Search API.
        </p>
        <p> </p>
        <iframe src="https://giphy.com/embed/FNfbi3fdPf5b6cUNmM" title='my-gif' width="650" height="300" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/FNfbi3fdPf5b6cUNmM"> </a></p>
        <p></p>
        <p>
          The app works by first checking if the data for the user's input is located in the browser's cache. If so, it immediately
          returns that data- i.e. in the above gif the data for Titanic is displayed much quicker
          when it is searched the second time compared with the first. 
        </p>
        <p>
          If the browser has not yet stored the movie's data, the program checks the MongoDB database. Only if there is no
          data for the movie stored there either does it then call the IMDB and Google Image APIs. Upon receiving 
          that data, the program displays it to the user, caches it, and saves it to the database. 
        </p>
        <p></p>
        <p></p>
        <p></p>
        <div></div>
        <div></div>
      </div>
    </div>
  )
}