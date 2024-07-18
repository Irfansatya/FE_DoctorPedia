import { createSignal } from "solid-js";
import styles from "./Card.module.css"; // Pastikan Anda memiliki file CSS terpisah

const Card = ({ data }) => {
  return (
    <div class={styles.card}>
      <img src={data.imageUrl} alt={data.name} class={styles.cardImage} />
      <div class={styles.cardContent}>
        <h2>{data.name}</h2>
        <p>Age: {data.age}</p>
      </div>
    </div>
  );
};

export default Card;
