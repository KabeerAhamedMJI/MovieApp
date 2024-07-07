import React from 'react';

function ReviewCard(props) {
    const { review } = props;

    return (
        <article className='bg-white shadow-md rounded-lg p-4 mb-4 max-w-md mx-auto md:max-w-2xl lg:max-w-4xl mt-10'>
            <h3 className='text-xl font-semibold mb-2'>{review.title}</h3>
            <p className='text-gray-700 mb-4'>{review.description}</p>
            <span className='text-gray-500'>- {review.user}</span>
        </article>
    );
}

export default ReviewCard;
