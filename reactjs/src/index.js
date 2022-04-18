/* ~ ~ ~ ~ ~ <1> Import Required Dependencies </1> ~ ~ ~ ~ ~ */
import React from 'react';
import ReactDOM from 'react-dom/client';

/* ~ ~ ~ ~ ~ <2> Import Application & Stylesheets </2> ~ ~ ~ ~ ~ */
import App from './App';
import './index.css';

/* ~ ~ ~ ~ ~ <3> Create the Root DOM Element </3> ~ ~ ~ ~ ~ */
const root = ReactDOM.createRoot(document.getElementById('root'));

/* ~ ~ ~ ~ ~ <4> Render [React] Application </4> ~ ~ ~ ~ ~ */
root.render(
  <App />,
);