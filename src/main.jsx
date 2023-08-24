// Here, we enable the "routing" for our page, so that it can determine what content to render.
import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';

//Here, we instruct the page to render the appropriate content, depending on the route name (portion after the 2nd "/" in each path below). These route names match our various folder names, within the "components" folder. Javascript will default to finding the file "index.js" files in each folder specified, which is why the exact file does not need to be listed here.
import App from './App.jsx'
import ErrorPage from './components/Error';
import About from './components/About';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <About />,
      },
      {
        path: 'portfolio',
        element: <Portfolio />,
      },
      {
        path: 'contact',
        element: <Contact />,
      },
      {
        path: 'resume',
        element: <Resume />,
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
