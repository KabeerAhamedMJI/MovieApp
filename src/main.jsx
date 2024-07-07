import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import './index.css';
import Root from './routes/root';
import ErrorPage from './error-page';
import Home, { loader as homeLoader } from './routes/home';
import Actors from './routes/actors';
import Actor from './routes/actor';
import About from './routes/about';
import Movies from './routes/movies';
import Movie, { loader as movieLoader } from './routes/movie';
import SignUp from './routes/signup';
import Login from './routes/login';
import Logout from './routes/logout';
import store from './app/store';
import { Provider } from 'react-redux';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />,
        loader: homeLoader
      },
      {
        path: '/actors',
        element: <Actors />
      },
      {
        path: '/actors/:actorId',
        element: <Actor />
      },
      {
        path: '/movies',
        element: <Movies />
      },
      {
        path: '/movies/:movieId',
        element: <Movie />,
        loader: movieLoader
      },
      {
        path: '/signup',
        element: <SignUp />
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/logout',
        element: <Logout />
      },
      {
        path: '/about',
        element: <About />
      }
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
