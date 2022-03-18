import styles from "./Card.module.css";

const Card = () => {
  return (
    <div className={styles.card}>
      <img
        src="./images/Breaddible.jpg"
        alt=""
        className={styles.card__image}
      />
      <h3 className={styles.card__title}>Title</h3>
      <p className={styles.card__desc}>Lorem ipsum dolor sit amet.</p>
      <button className={styles.card__button}>Add to cart</button>
    </div>
  );
};

export default Card;
