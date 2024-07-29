import { Component, createSignal } from "solid-js";
import styles from "./Card.module.css";
import Modal from "./modal";

// Define the CardData type
type CardData = {
  id: string;
  namaPasien: string;
  umur: string;
  berat: string;
  tinggi: string;
  golDarah: string;
  poli: string;
  dokter: string;
  tanggal: string;
  sesi: string;
  keluhan: string;
  pengirim: string;
};

const Card: Component<{
  data: CardData;
  updateAppointment: (id: string, updatedData: Partial<CardData>) => void;
  deleteAppointment: (id: string) => void;
}> = (props) => {
  const [isModalOpen, setIsModalOpen] = createSignal(false);

  const handleSave = (updatedData: Partial<CardData>) => {
    props.updateAppointment(props.data.id, updatedData);
  };

  return (
    <div class={styles.card}>
      <div class={styles.upperDiv}>
        
        <div class={styles.rightDiv}>

          <div class={styles.subdesc}>
            <h5 class={styles.h5}>Nama Pasien</h5>
            <p class={styles.p}>{props.data.namaPasien}</p>
          </div>
          
          <div class={styles.groupdesc}>
            <div class={styles.groupsubdesc}>
              <h5 class={styles.h5}>Umur</h5>
              <p class={styles.p}>{props.data.umur}</p>
            </div>
            <div class={styles.groupsubdesc}>
              <h5 class={styles.h5}>Berat</h5>
              <p class={styles.p}>{props.data.berat}</p>
            </div>
            <div class={styles.groupsubdesc}>
              <h5 class={styles.h5}>Tinggi</h5>
              <p class={styles.p}>{props.data.tinggi}</p>
            </div>
            <div class={styles.groupsubdesc}>
              <h5 class={styles.h5}>Golongan Darah</h5>
              <p class={styles.p}>{props.data.golDarah}</p>
            </div>
          </div>

          <div class={styles.subdesc}>
            <h5 class={styles.h5}>Dokter</h5>
            <p class={styles.p}>{props.data.dokter}</p>
          </div>
          <div class={styles.subdesc}>
            <h5 class={styles.h5}>Poli</h5>
            <p class={styles.p}>{props.data.poli}</p>
          </div>
          
          
          </div>
          <div class={styles.leftDiv}>
            <div class={styles.subdesc}>
              <h5 class={styles.h5}>Tanggal</h5>
              <p class={styles.p}>{props.data.tanggal}</p>
            </div>
            <div class={styles.subdesc}>
              <h5 class={styles.h5}>Sesi</h5>
              <p class={styles.p}>{props.data.sesi}</p>
            </div>
          </div>
        </div>
        
          <div class={styles.bottomDiv}>
            <div class={styles.subdesc}>
              <h5 class={styles.h5}>Keluhan:</h5>
              <p class={`${styles.p} ${styles.scrollable}`}>{props.data.keluhan}</p>
            </div>
            <div class={styles.buttonsUnd}>
              <button class={styles.buttonedit} onClick={() => setIsModalOpen(true)}>Edit</button>
              <button class={styles.buttonDelete}onClick={() => props.deleteAppointment(props.data.id)}>Hapus</button>
            </div>
          
      </div>
      <Modal
        show={isModalOpen()}
        onClose={() => setIsModalOpen(false)}
        onSave={handleSave}
        initialData={props.data}
      />
    </div>
  );
};

export default Card;
