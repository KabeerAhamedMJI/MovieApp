import React from 'react';
import TheaterImage from '../img/Theater.jpg';

function About(props) {
    return (
        <div className="container mx-auto p-6">
            <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">About MovieSpot</h1>
            <div className="flex flex-col md:flex-row items-center md:items-center">
                <div className="md:w-1/2 mb-6 md:mb-0 md:mr-6 flex justify-center">
                    <img className="w-full h-auto object-cover rounded-lg shadow-lg md:max-w-md" src="./img/Theater.jpg" alt="Theater" />
                </div>
                <div className="md:w-1/2 space-y-4">
                    <p className="text-lg text-gray-700 leading-relaxed">
                        Welcome to <span className="font-bold text-blue-600">MovieSpot</span>, your ultimate destination for movie ticket booking and reviews. At MovieSpot, we bring you the latest movies, easy ticket booking, and insightful reviews all in one place.
                    </p>
                    <p className="text-lg text-gray-700 leading-relaxed">
                        Our user-friendly platform ensures a seamless experience, allowing you to book tickets for your favorite movies effortlessly. Whether you're a fan of the latest blockbusters, indie films, or timeless classics, MovieSpot makes it simple and convenient to secure your seats.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default About;
