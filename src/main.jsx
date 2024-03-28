import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root/Root';
import Home from './Components/Home/Home';
import ListedBooks from './Components/ListedBooks/ListedBooks';
import ErrorPage from './Components/ErrorPage/ErrorPage';
import BookDetails from './Components/BookDetails/BookDetails';
import PageToLoad from './Components/PageToLoad/PageToLoad';
import Library from './Components/Library/Library';
import Contact from './Components/Contact/Contact';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/listedBooks',
        element: <ListedBooks></ListedBooks>,
        loader: () => fetch('/books.json')
      },
      {
        path:'/book/:bookId',
        element: <BookDetails></BookDetails>,
        loader: ()=> fetch('../books.json')
      },
      {
        path: '/pageToLoad',
        element: <PageToLoad></PageToLoad>,
        loader: () => fetch('/books.json')
      },
      {
        path: '/library',
        element: <Library></Library>,
        loader: () => fetch('/books.json')
      },
      {
        path: '/contact',
        element: <Contact></Contact>
      }

    ]
  },
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
