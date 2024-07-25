import { Component, createSignal } from "solid-js";
import styles from "./Modal.module.css";

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

const Modal: Component<{
  show: boolean;
  onClose: () => void;
  onSave: (updatedData: Partial<CardData>) => void;
  initialData: CardData;
}> = (props) => {
  const [formData, setFormData] = createSignal({ ...props.initialData });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    props.onSave(formData());
    props.onClose();
  };

  return (
    <div class={`${styles.modal} ${props.show ? styles.show : ''}`}>
      <div class={styles.modalContent}>
        <button class={styles.closeButton} onClick={props.onClose}>Close</button>
        <h2 class={styles.h4}>UBAH PENGAJUAN</h2>
        <form>
          <div class={styles.form}>
            <div class={styles.upperForm}>
              <div class={styles.RightForm}>
                <label class={`${styles.formContent} ${styles.h6}`}>
                  Nama Pasien
                  <input class={styles.InputForm}
                    name="namaPasien"
                    value={formData().namaPasien}
                    onInput={handleInputChange}
                  />
                </label>
                <div class={styles.GroupForm}>
                  <label class={`${styles.formGroupingContent} ${styles.h6}`}>
                    Umur
                    <input class={styles.InputForm}
                      name="umur"
                      type="number"
                      value={formData().umur}
                      onInput={handleInputChange}
                    />
                  </label>
                  <label class={`${styles.formGroupingContent} ${styles.h6}`}>
                    Berat
                    <input class={styles.InputForm}
                      name="berat"
                      type="number"
                      value={formData().berat}
                      onInput={handleInputChange}
                    />
                  </label>
                  <label class={`${styles.formGroupingContent} ${styles.h6}`}>
                    Tinggi
                    <input class={styles.InputForm}
                      name="tinggi"
                      type="number"
                      value={formData().tinggi}
                      onInput={handleInputChange}
                    />
                  </label>
                  <label class={`${styles.formGroupingContent} ${styles.h6}`}>
                    Gol. Darah
                    <input class={styles.InputForm}
                      name="golDarah"
                      value={formData().golDarah}
                      onInput={handleInputChange}
                    />
                  </label>
                </div>
                <label class={`${styles.formContent} ${styles.h6}`}>
                  Poli
                  <input class={styles.InputForm}
                    name="poli"
                    value={formData().poli}
                    onInput={handleInputChange}
                  />
                </label>
                <label class={`${styles.formContent} ${styles.h6}`}>
                  Dokter
                  <input class={styles.InputForm}
                    name="dokter"
                    value={formData().dokter}
                    onInput={handleInputChange}
                  />
                </label>
              </div>
              <div class={styles.LeftForm}>
                <label class={`${styles.formContent} ${styles.h6}`}>
                  Tanggal
                  <input class={styles.InputForm}
                    name="tanggal"
                    type="date"
                    value={formData().tanggal}
                    onInput={handleInputChange}
                  />
                </label>
                <label class={`${styles.formContent} ${styles.h6}`}>
                  Sesi
                  <input class={styles.InputForm}
                    name="sesi"
                    value={formData().sesi}
                    onInput={handleInputChange}
                  />
                </label>
              </div>
            </div>
            <div class={styles.BottomForm}>
              <div class={styles.grouping}>
                <label class={`${styles.keluhanForm} ${styles.h6}`}>
                  Keluhan
                  <textarea class={`${styles.scrollable} ${styles.keluhanDesc}`}
                    name="keluhan"
                    value={formData().keluhan}
                    onInput={handleInputChange}
                  />
                </label>
              </div>
              <button type="button" onClick={handleSave} class={styles.button}>Save</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;
