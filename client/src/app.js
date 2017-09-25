import React from 'react';
import ReactDOM from 'react-dom';
import RatingBox from './components/RatingBox'

window.addEventListener('load', function () {
  ReactDOM.render(
    <RatingBox/>, 
    document.getElementById('app')
  );
});