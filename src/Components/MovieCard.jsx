import React from 'react';
import { Link } from 'react-router-dom';

function MovieCard(props) {
    const movie = props.movie;
    return (
        <article className="movie p-4 rounded-lg shadow-lg bg-white">
            <div className="box">
                <Link to={`/movies/${movie._id}`} className="block overflow-hidden rounded-lg">
                    <img src={movie.thumbnail} alt={movie.title} className="w-full h-auto transform hover:scale-105 transition-transform duration-300" />
                </Link>
                <h3 className="MvTitle mt-4 text-xl font-bold text-center text-gray-800">{movie.title}</h3>
            </div>
        </article>
    );
}

export default MovieCard;
