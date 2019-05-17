import React from 'react';
import renderer from 'react-test-renderer';
import PlaceCard from './place-card.jsx';

it(`PlaceCard correctly renders`, () => {
  const tree = renderer
    .create(<PlaceCard
      title = {`Beautiful &amp; luxurious apartment at great location`}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
