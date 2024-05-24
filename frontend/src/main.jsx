import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

/* ------ Import pages ------*/
import HomePage from './HomePage.jsx';
import About from './About.jsx';
import Contact from './Contact.jsx';
import NotFound from './NotFound.jsx';
import AnimalsList from './AnimalsList.jsx';

/* ------ define routes ------*/
const router = createBrowserRouter([
  { 
    path: '/', 
    element: <HomePage/>,
    errorElement: <NotFound />,
  },
  { 
    path: '/about',
    element: <About/>,
  },
  { 
    path: '/contact',
    element: <Contact/>,
  },
  { 
    path: '/animals',
    element: <AnimalsList />,
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
