import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import * as ReactDOM from "react-dom/client";
import * as React from "react";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import RegisterPage from './pages/register.jsx';
import LoginPage from './pages/login.jsx';
import BookPage from './pages/book.jsx';
import UserPage from './pages/user.jsx';
import "./styles/globall.css"
import TodoApp from './components/todo/Todo-app.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    // errorElement </> for the wrong direction
    children: [
      {
        index: true,
        element: <TodoApp />
      },
      {
        path: "/product",
        element: <BookPage />,
      },
      {
        path: "/user",
        element: <UserPage />,
      },
    ]
  },
  {
    path: "/register",
    element: <RegisterPage />
  },
  {
    path: "/login",
    element: <LoginPage />,
  },

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
