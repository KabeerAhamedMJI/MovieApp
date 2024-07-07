import { createSlice } from '@reduxjs/toolkit';

const reviewSlice = createSlice({
    name: 'reviews',
    initialState: {
        review: [],
    },
    reducers: {
        addReview: (state, action) => {
            state.review = [...action.payload]
        },
        addOneReview: (state, action) => {
            state.review.push(action.payload)
        }
    },
});

export const { addReview, addOneReview } = reviewSlice.actions;
export default reviewSlice.reducer;
