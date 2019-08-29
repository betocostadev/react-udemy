import React from 'react';
import './card.styles.css';

/* Roborash site provides images based on a number, so we can use the monster id to change it */
export const Card = props => (
  <div className="card-container">
    <img
      alt="monster"
      src={`https://robohash.org/${props.monster.id}?set=set2&size=180x180`}
    />
    <h2> {props.monster.name} </h2>
    <p> {props.monster.email} </p>
  </div>
);