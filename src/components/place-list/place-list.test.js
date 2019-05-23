import React from 'react';
import renderer from 'react-test-renderer';
import PlaceList from './place-list.jsx';

const mock = {
  offers: [
    {
      title: `Beautiful &amp; luxurious apartment at great location`,
      imageSrc: `img/apartment-01.jpg`,
      price: 120,
      rating: 90,
      type: `apartment`,
      isPremium: true,
      isBookmarked: false,
    },
    {
      title: `Wood and stone place`,
      imageSrc: `img/room.jpg`,
      price: 80,
      rating: 80,
      type: `room`,
      isPremium: false,
      isBookmarked: true,
    },
  ],
};

it(`PlaceList correctly renders`, () => {
  const {offers} = mock;

  const tree = renderer
    .create(<PlaceList
      offers = {offers}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
