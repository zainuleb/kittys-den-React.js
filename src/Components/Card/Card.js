import React from 'react';
import styles from './Card.module.css';

const Card = (props) => {
  return (
    <div className={styles.cardContainer}>
      <img
        alt="doctors"
        src={`https://robohash.org/${props.doctor.id}?set=set4&size=120x120`}
      />
      <h1> {props.doctor.name}</h1>
      <h2>{props.doctor.email}</h2>
    </div>
  );
};

export default Card;
