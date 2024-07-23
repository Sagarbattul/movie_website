import React,{useState,useEffect} from 'react'
import { NavLink, useParams } from 'react-router-dom'
import { API_URL } from './contact';

const Singlemovie = () => {
   const {id} =useParams();

   const [isLoading, setIsLoading] = useState(true);
    const [movie, setMovie] = useState([])
    

    const getMovies = async (url) => {
        setIsLoading(true)
        try {
            const res = await fetch(url);
            const data = await res.json();
            console.log(data);
            if (data.Response === "True") {
                setIsLoading(false)
                setMovie(data)
            } else {
               
            }
        } catch (error) {
            console.log(error);
        }
    };
    useEffect(() => {
        // ye debouncing hain bar bar reponse nahi aane ke liye
        let timerOut=setTimeout(()=>{

            getMovies(`${API_URL}&i=${id}`)
        },500);
        return ()=>clearTimeout(timerOut);
    }, [id]);

    if(isLoading){
        return(
            <div className="">
            <div className="loading">Loading...</div>
            </div>
        )
    }
    
  return (
    <section className="movie-section">
    <div className="movie-card">
    <figure>
    <img src={movie.Poster} alt="" />
    </figure>

    <div className="card-content">
    <p className="title">{movie.Title}</p>
    <p className="card-text">{movie.Actors}</p>
    <p className="card-text">{movie.Language}</p>
    <p className="card-text">{movie.Released}</p>
    <p className="card-text">{movie.imdbRating}/10</p>
    <p className="card-text">{movie.Country}</p>
    {/* <p className="card-text">{movie.Genre}</p> */}
    {/* <p className="card-text">{movie.Runtime}</p> */}
    {/* <p className="card-text">{movie.Director}</p> */}
    <NavLink to="/" className="back-btn">Go Back</NavLink>
    </div>
    </div>
    </section>
  )
}

export default Singlemovie