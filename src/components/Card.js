import React from 'react';
import StarIcon from '../images/Star-icon.png';

function Card(props) {
  return (
    <div className="cards-container">
      <div className="card">
        <div className="card-status">
          <p>{props.item.cardStatus}</p>
        </div>
        <img src={props.item.img} alt="Product Image" className="card-img" />
        <div className="card-rating">
          <img src={StarIcon} alt="Star Icon" className="star-icon" />
          <p>{props.item.stats.rating}</p>
          <p>
            ({props.item.stats.reviewCount}) • {props.item.country}
          </p>
        </div>
        <div className="card-details">
          <p>{props.item.title}</p>
        </div>
        <div className="card-price">
          <p>
            <b>From ${props.item.price}</b>/ person
          </p>
        </div>
      </div>
    </div>
  );
}

export default Card;
