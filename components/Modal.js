import { useState } from 'react';
import styles from '../styles/Modal.module.scss';

export const Modal = (props) => {
  const BeerModalMarkup = () => {
    if (!props.show) {
      return null;
    }
    return (
      <div className={styles.modal}>
        <p>HelloModal</p>
      </div>
    );
  };
  return <BeerModalMarkup />;
};
