import React from 'react';
import PropTypes from 'prop-types';

const typeToTypeTextMap = {
  apartment: `Apartment`,
  room: `Private room`,
};

const PlaceCard = (props) => {
  const {
    offer,
    onClick,
    onHover,
    onHoverEnd,
  } = props;

  const {
    title,
    imageSrc,
    price,
    rating,
    type,
    isPremium,
    isBookmarked,
  } = offer;

  return <article className="cities__place-card place-card" onMouseEnter={onHover} onMouseLeave={onHoverEnd}>
    <div className={`place-card__mark
      ${isPremium ? `` : `visually-hidden`}
    `}>
      <span>Premium</span>
    </div>
    <div className="cities__image-wrapper place-card__image-wrapper">
      <a href="#" onClick={onClick}>
        <img className="place-card__image" src={imageSrc} width="260" height="200" alt="Place image" />
      </a>
    </div>
    <div className="place-card__info">
      <div className="place-card__price-wrapper">
        <div className="place-card__price">
          <b className="place-card__price-value">&euro;{price}</b>
          <span className="place-card__price-text">&#47;&nbsp;night</span>
        </div>
        <button className={`place-card__bookmark-button button
            ${isBookmarked ? `place-card__bookmark-button--active` : ``}
          `} type="button">
          <svg className="place-card__bookmark-icon" width="18" height="19">
            <use xlinkHref="#icon-bookmark"></use>
          </svg>
          <span className="visually-hidden">{isBookmarked ? `In` : `To`} bookmarks</span>
        </button>
      </div>
      <div className="place-card__rating rating">
        <div className="place-card__stars rating__stars">
          <span style={{width: `${rating}%`}}></span>
          <span className="visually-hidden">Rating</span>
        </div>
      </div>
      <h2 className="place-card__name">
        <a href="#">{title}</a>
      </h2>
      <p className="place-card__type">{typeToTypeTextMap[type]}</p>
    </div>
  </article>;
};

PlaceCard.propTypes = {
  offer: PropTypes.shape({
    title: PropTypes.string.isRequired,
    imageSrc: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
    isPremium: PropTypes.bool.isRequired,
    isBookmarked: PropTypes.bool.isRequired,
  }),
  onClick: PropTypes.func,
  onHover: PropTypes.func,
  onHoverEnd: PropTypes.func,
};

export default PlaceCard;
