import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import MovieCard from '../Components/MovieCard';

export async function loader() {
    const response = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/movies`);
    const movies = response.data;
    return { movies };
}

function Home(props) {
    const { movies } = useLoaderData();
    const [movieList, setMovieList] = useState([]);

    useEffect(() => {
        if (movies) {
            setMovieList(movies);
        }
    }, [movies]);

    return (
        <section className='px-4 py-8'>
            <div className='container mx-auto'>
                <h2 className='text-2xl font-bold mb-4'>Currently Running</h2>
                <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4'>
                    {movieList.map(movie => (
                        <MovieCard key={movie._id} movie={movie} />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Home;
