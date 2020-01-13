import React from 'react';

const Card = (props) => (
  <div style={{ float: 'left', paddingRight: 30, width: 270 }}>
    <div className="card">
      <div className="card-image" style={{ width: 240 }}>
        <img src={props.payload.image} alt={props.payload.header} />
        <span className="card-title">{props.payload.header}</span>
      </div>
      <div className="card-content">
        <p>{props.payload.description}</p>
        <p><a href="/">{props.payload.price}</a></p>
      </div>
      <div className="card-action">
        <a target="_blank" rel="noopener noreferrer" href={props.payload.link}>Get now</a>
      </div>
    </div>
  </div>
);

export default Card;