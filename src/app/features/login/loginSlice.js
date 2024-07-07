import { createSlice } from '@reduxjs/toolkit';

const loginSlice = createSlice({
    name: 'login',
    initialState: {
        loggedIn: false,
    },
    reducers: {
        changeLoginStatus: (state, action) => {
            state.loggedIn = action.payload;
        },
    },
});

export const { changeLoginStatus } = loginSlice.actions;
export default loginSlice.reducer;
