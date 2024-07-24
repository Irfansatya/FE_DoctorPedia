import { Component } from "solid-js";
import styles from "./Card.module.css";

// Define the TypeScript interface for the data prop
interface CardData {
  id: string;
  imageUrl: string;
  namaPasien: string;
  umur: number;
  berat: number;
  tinggi: number;
  golDarah: string;
  poli: string;
  dokter: string;
  tanggal: string;
  sesi: string;
  keluhan: string;
  deleteAppointment: (id: string) => void;
}

// Use the interface in the component props
const Card: Component<{ data: CardData }> = (props) => {
  return (
    <div class={styles.card}>
      <img src={props.data.imageUrl} alt={props.data.namaPasien} class={styles.cardImage} />
      <div class={styles.cardContent}>
        <h2>{props.data.namaPasien}</h2>
        <p>Umur: {props.data.umur}</p>
        <p>Berat: {props.data.berat}</p>
        <p>Tinggi: {props.data.tinggi}</p>
        <p>Golongan Darah: {props.data.golDarah}</p>
        <p>Poli: {props.data.poli}</p>
        <p>Dokter: {props.data.dokter}</p>
        <p>Tanggal: {props.data.tanggal}</p>
        <p>Sesi: {props.data.sesi}</p>
        <p>Keluhan: {props.data.keluhan}</p>
        <button onClick={() => props.data.deleteAppointment(props.data.id)}>Hapus</button>
      </div>
    </div>
  );
};

export default Card;
