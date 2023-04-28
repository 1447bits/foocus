import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import { LoginPage } from "./pages/LoginPage";
import BucketPage from './pages/Buckets';
import Default from './Default';

// returns default page
const page = (pagecomponent) => {
  return <Default>
    {pagecomponent}
  </Default>
}

const router = createBrowserRouter([
  {
    path: "/",
    element: (page(<LoginPage />)),

  },
  {
    path: "buckets",
    element: (page(<BucketPage />)),
  },
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={router} />);
