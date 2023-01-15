import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';
import React from 'react';
import ReactDOM from 'react-dom';
import './css/main.scss';
import Common from './js/common';
import Intro from './js/intro';
import Profile from './js/profile';
import Info from './js/info';
import Footer from './js/footer';
import reportWebVitals from './reportWebVitals';
import { ReactComponent as LoadingSVG } from './images/loading.svg';


ReactDOM.render(
  <React.StrictMode>
    <Common />
  </React.StrictMode>,
  document.getElementById('header')
);

ReactDOM.render(
  <React.StrictMode>
    <Footer />
  </React.StrictMode>,
  document.getElementById('footer')
);

ReactDOM.render(
  <React.StrictMode>
    <div className="loading-area">
      <LoadingSVG/>
      <p>LOADING</p>
    </div>
  </React.StrictMode>,
  document.getElementById('loading_wrap')
);

ReactDOM.render(
  <React.StrictMode>
    <Intro />
  </React.StrictMode>,
  document.getElementById('intro')

);

ReactDOM.render(
  <React.StrictMode>
    <Profile />
  </React.StrictMode>,
  document.getElementById('profile')

);


ReactDOM.render(
  <React.StrictMode>
    <Info />
  </React.StrictMode>,
  document.getElementById('info')

);

reportWebVitals();