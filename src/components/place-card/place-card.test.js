import React from 'react';
import renderer from 'react-test-renderer';
import PlaceCard from './place-card.jsx';

const mock = {
  offer: {
    title: `Beautiful &amp; luxurious apartment at great location`,
    imageSrc: `img/apartment-01.jpg`,
    price: 120,
    rating: 90,
    type: `apartment`,
    isPremium: true,
    isBookmarked: false,
  }
};

it(`PlaceCard correctly renders`, () => {
  const {offer} = mock;

  const tree = renderer
    .create(<PlaceCard
      offer = {offer}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
