import React from 'react';
import { createRoot } from 'react-dom/client';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import './index.css';
import Foocus from './Default';

let buckets = localStorage.getItem("buckets")
if (buckets === null) {
  localStorage.setItem("buckets", JSON.stringify([]))
  localStorage.setItem("totalBuckets", 0)
}
localStorage.setItem("page", localStorage.getItem("login") === "true" ? "/buckets" : "/")

const root = createRoot(document.getElementById("root"))

root.render(
  <BrowserRouter>
    <Foocus />
  </BrowserRouter>
)
// ReactDOM.render(
//   document.getElementById('root')
// );
