import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import PlaceCard from './place-card.jsx';

Enzyme.configure({adapter: new Adapter()});

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

it(`PlaceCard correctly handles click`, () => {
  const {offer} = mock;
  const clickHandler = jest.fn();

  const placeCard = shallow(<PlaceCard
    offer = {offer}
    onClick = {clickHandler}
  />);

  const cardImageLink = placeCard.find(`.place-card__image-wrapper a`);
  cardImageLink.simulate(`click`, {preventDefault() {}});

  expect(clickHandler).toHaveBeenCalledTimes(1);
});
