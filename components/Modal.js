import styles from '../styles/Modal.module.scss';

export const Modal = ({ beer, onClick }) => {
  return (
    <div className={styles.modal}>
      <h2>{beer.name}</h2>
      <p>{beer.tagline}</p>
      <p>First brewed: {beer.first_brewed}</p>
      <p>{beer.description}</p>
      <p>Food pairing: {beer.food_pairing}</p>
      <button onClick={onClick}>Close</button>
    </div>
  );
};
