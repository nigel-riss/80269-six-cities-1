import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app.jsx';

import offers from './mocks/offers.js';

const init = (offersData) => {
  ReactDOM.render(
      <App
        offers = {offersData}
      />,
      document.querySelector(`#root`)
  );
};

init(offers);
