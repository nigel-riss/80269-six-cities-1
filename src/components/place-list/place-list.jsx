import React, {Component} from 'react';
import PropTypes from 'prop-types';

import PlaceCard from '../place-card/place-card.jsx';

class PlaceList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentPlaceCardId: -1,
    };
  }

  render() {
    const {offers} = this.props;

    return <div className="cities__places-list places__list tabs__content">
      {offers.map((offer, index) => {
        return <PlaceCard
          key = {index.toString()}
          offer = {offer}
          onClick = {(evt) => {
            evt.preventDefault();
            this.setState({currentPlaceCardId: index});
          }}
          onHover = {(evt) => {
            evt.preventDefault();
            this.setState({currentPlaceCardId: index});
          }}
          onHoverEnd = {(evt) => {
            evt.preventDefault();
            this.setState({currentPlaceCardId: -1});
          }}
        />;
      })}
    </div>;
  }
}

PlaceList.propTypes = {
  offers: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    imageSrc: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
    isPremium: PropTypes.bool.isRequired,
    isBookmarked: PropTypes.bool.isRequired,
  })),
};

export default PlaceList;
