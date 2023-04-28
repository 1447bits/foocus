import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import './index.css';
import Foocus from './Default';

ReactDOM.render(
  <BrowserRouter>
    <Foocus />
  </BrowserRouter>,
  document.getElementById('root')
);
