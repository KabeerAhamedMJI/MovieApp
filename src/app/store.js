import { configureStore } from '@reduxjs/toolkit'
import loginReducer from '../app/features/login/loginSlice'
import reviewReducer from '../app/features/reviews/reviewSlice'

export default configureStore({
  reducer: {
    login: loginReducer,
    reviews: reviewReducer
  },
})