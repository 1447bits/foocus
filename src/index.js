import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import { LoginPage } from "./pages/LoginPage";
import BucketPage from './pages/Buckets';
import Default from './Default';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Default>
      {/* <LoginPage /> */}
      <BucketPage />
    </Default>
  </React.StrictMode>
);
