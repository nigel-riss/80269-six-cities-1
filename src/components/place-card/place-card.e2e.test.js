import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import PlaceCard from './place-card.jsx';

Enzyme.configure({adapter: new Adapter()});

it(`PlaceCard correctly handles click`, () => {
  const clickHandler = jest.fn();

  const placeCard = shallow(<PlaceCard
    title = {`Beautiful &amp; luxurious apartment at great location`}
    onClick = {clickHandler}
  />);

  const cardImageLink = placeCard.find(`.place-card__image-wrapper a`);
  cardImageLink.simulate(`click`, {preventDefault() {}});

  expect(clickHandler).toHaveBeenCalledTimes(1);
});
