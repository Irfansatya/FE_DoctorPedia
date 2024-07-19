import styles from "./Card.module.css"; // Pastikan Anda memiliki file CSS terpisah

const Card = ({ data }) => {
  return (
    <div class={styles.card}>
      <img src={data.imageUrl} alt={data.namaPasien} class={styles.cardImage} />
      <div class={styles.cardContent}>
        <h2>{data.namaPasien}</h2>
        <p>Umur: {data.umur}</p>
        <p>Berat: {data.berat}</p>
        <p>Tinggi: {data.tinggi}</p>
        <p>Golongan Darah: {data.golDarah}</p>
        <p>Poli: {data.poli}</p>
        <p>Dokter: {data.dokter}</p>
        <p>Tanggal: {data.tanggal}</p>
        <p>Sesi: {data.sesi}</p>
        <p>Keluhan: {data.keluhan}</p>
        <button onClick={() => data.deleteAppointment(data.id)}>Hapus</button>
      </div>
    </div>
  );
};

export default Card;
