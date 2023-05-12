import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import './index.css';
import Foocus from './Default';

let buckets = localStorage.getItem("card-buckets")
if (buckets === null) {
  localStorage.setItem("card-buckets", JSON.stringify([]))
  localStorage.setItem("totalBuckets", 0)
  localStorage.setItem("logs", JSON.stringify([]))
}

// initially if page is not defined default will be set to "/" i.e. Home
// and afterwords all reloads set the page to previous page set  
// even if you reload or close and restart the page navBar will set the state of current page from Url
localStorage.setItem("page", localStorage.getItem("page") === null ? "/" : localStorage.getItem("page"))

const root = createRoot(document.getElementById("root"))

root.render(
  <BrowserRouter>
    <Foocus />
  </BrowserRouter>
)
