import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app.jsx';

const placesNames = [
  `Beautiful &amp; luxurious apartment at great location`,
  `Wood and stone place`,
  `Canal View Prinsengracht`,
  `Nice, cozy, warm big bed apartment`,
];

const init = () => {
  ReactDOM.render(
      <App
        places = {placesNames}
      />,
      document.querySelector(`#root`)
  );
};

init();
