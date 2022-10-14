import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'
import App from './App';
import $ from 'jquery';

// bot
// $(document).ready(function(){
//   $('.chat-icon').click(function(event){
//       $('.chatbox').toggleClass(active)
//   })
// })

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);