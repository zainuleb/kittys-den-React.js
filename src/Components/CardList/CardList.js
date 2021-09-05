import React from 'react';
import styles from './CarList.module.css';

import Card from '../Card/Card';

const CardList = (props) => {
  return (
    <div className={styles.cardList}>
      {props.doctors.map((doctor) => (
        <Card key={doctor.id} doctor={doctor} />
      ))}
    </div>
  );
};

export default CardList;
