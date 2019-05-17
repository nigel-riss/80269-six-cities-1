import React from 'react';
import renderer from 'react-test-renderer';
import App from './app.jsx';

it(`App correctly renders`, () => {
  const tree = renderer
    .create(<App
      places = {[
        `Beautiful &amp; luxurious apartment at great location`,
        `Wood and stone place`,
        `Canal View Prinsengracht`,
        `Nice, cozy, warm big bed apartment`,
      ]}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
