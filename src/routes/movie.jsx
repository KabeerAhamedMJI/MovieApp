import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useLoaderData, Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import ReviewCard from '../Components/ReviewCard';
import ReviewForm from '../Components/ReviewForm'
import { useDispatch, useSelector } from 'react-redux';
import { addReview } from '../app/features/reviews/reviewSlice';

export async function loader({ params }) {
    const response = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/movies/${params.movieId}`);
    const movie = response.data;

    const verifyResponse = await axios.get('${import.meta.env.VITE_API_BASE_URL}/auth/verify', { withCredentials: true })

    const loginStatus = verifyResponse.data.verified

    return { movie, loginStatus };
}
function Movie() {
    // const [reviews, setReviews] = useState([]);
    const { movie } = useLoaderData();
    const navigate = useNavigate();
    const loggedIn = useSelector(state => state.login.loggedIn)
    const review = useSelector(state => state.reviews.review)
    const dispatch = useDispatch()

    useEffect(() => {
        axios.get(`${import.meta.env.VITE_API_BASE_URL}/reviews?movieId=${movie._id}`)
            .then(response => {
                dispatch(addReview(response.data))
            })
            .catch(error => console.log(error))
    }, [movie._id]);

    return (
        <main className="bg-gray-100 min-h-screen">
            <section className='container mx-auto py-8'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                    <div className='flex items-center justify-center'>
                        <img src={movie.thumbnail} alt={movie.title} className='rounded-lg shadow-md w-full md:w-auto' />
                    </div>
                    <div className='flex flex-col justify-center'>
                        <h2 className='text-3xl font-bold mb-4'>{movie.title}</h2>
                        <p className='text-gray-700 mb-4'>{movie.description}</p>
                        <div className='ButtonBox'>
                            <Link className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline' to={`#/${movie._id}`}>Book Now</Link>
                        </div>
                    </div>
                </div>
            </section>
            <section className='container mx-auto py-8 pt-4'>
                <h2 className='text-2xl font-bold mb-4'>Reviews</h2>
                {loggedIn && <ReviewForm movieId={movie._id} />}
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
                    {review.map(review => (
                        <ReviewCard key={review._id} review={review} />
                    ))}
                </div>
            </section>

        </main>
    );
}

export default Movie;
