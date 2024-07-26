import { createSignal, onMount, Component } from "solid-js";
import { Link, useRoutes, useLocation } from "@solidjs/router";
import CryptoJS from 'crypto-js';
import styles from "../appointmentShow/appoitmentShow.module.css";

const secretKey = 'your-secret-key';

const encryptPassword = (password) => {
  return CryptoJS.AES.encrypt(password, secretKey).toString();
};

const decryptPassword = (encryptedPassword) => {
  const bytes = CryptoJS.AES.decrypt(encryptedPassword, secretKey);
  return bytes.toString(CryptoJS.enc.Utf8);
};

const getUserData = () => {
  const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
  if (loggedInUser) {
    return {
      username: loggedInUser.userName,
      namaDepan: loggedInUser.firstName,
      namaBelakang: loggedInUser.lastName,
      jenisKelamin: loggedInUser.jenisKelamin || "",
      nomorTelefon: loggedInUser.mobileNumber,
      email: loggedInUser.email,
      berat: loggedInUser.berat || "",
      tinggi: loggedInUser.tinggi || "",
      umur: loggedInUser.umur || "",
      golDarah: loggedInUser.golDarah || "",
      password: decryptPassword(loggedInUser.password),
      riwayatPenyakit: loggedInUser.riwayatPenyakit || ""
    };
  }
  return {
    username: "",
    namaDepan: "",
    namaBelakang: "",
    jenisKelamin: "",
    nomorTelefon: "",
    email: "",
    berat: "",
    tinggi: "",
    umur: "",
    golDarah: "",
    password: "",
    riwayatPenyakit: ""
  };
};

const saveUserData = (data) => {
  const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
  const updatedUser = {
    ...loggedInUser,
    userName: data.username,
    firstName: data.namaDepan,
    lastName: data.namaBelakang,
    jenisKelamin: data.jenisKelamin,
    mobileNumber: data.nomorTelefon,
    email: data.email,
    berat: data.berat,
    tinggi: data.tinggi,
    umur: data.umur,
    golDarah: data.golDarah,
    password: encryptPassword(data.password),
    riwayatPenyakit: data.riwayatPenyakit
  };
  localStorage.setItem('loggedInUser', JSON.stringify(updatedUser));
};

const AppointmentShow: Component = () => {
  const [formData, setFormData] = createSignal(getUserData());

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSave = () => {
    saveUserData(formData());
    console.log("Form data saved:", formData());
  };

  return (
    <div class={styles.container}>
      <main class={styles.profile}>
        <div class={styles.form}>
          <div class={styles.upperForm}>
            <div class={styles.RightForm}>
              <label class={`${styles.formContent} ${styles.h6}`}>
                Username
                <input class={styles.InputForm}
                  name="username"
                  value={formData().username}
                  onInput={handleInputChange}
                />
              </label>
              <label class={`${styles.formContent} ${styles.h6}`}>
                Nama Depan
                <input class={styles.InputForm}
                  name="namaDepan"
                  value={formData().namaDepan}
                  onInput={handleInputChange}
                />
              </label>
              <label class={`${styles.formContent} ${styles.h6}`}>
                Nama Belakang
                <input class={styles.InputForm}
                  name="namaBelakang"
                  value={formData().namaBelakang}
                  onInput={handleInputChange}
                />
              </label>
              <label class={`${styles.formContent} ${styles.h6}`}>
                Jenis Kelamin
                <input class={styles.InputForm}
                  name="jenisKelamin"
                  value={formData().jenisKelamin}
                  onInput={handleInputChange}
                />
              </label>
              <label class={`${styles.formContent} ${styles.h6}`}>
                Nomor Telefon
                <input class={styles.InputForm}
                  name="nomorTelefon"
                  value={formData().nomorTelefon}
                  onInput={handleInputChange}
                />
              </label>
              <label class={`${styles.formContent} ${styles.h6}`}>
                E-mail
                <input class={styles.InputForm}
                  name="email"
                  type="email"
                  value={formData().email}
                  onInput={handleInputChange}
                />
              </label>
              <label class={`${styles.formContent} ${styles.h6}`}>
                Berat
                <input class={styles.InputForm}
                  name="berat"
                  type="number"
                  value={formData().berat}
                  onInput={handleInputChange}
                />
              </label>
              <label class={`${styles.formContent} ${styles.h6}`}>
                Tinggi
                <input class={styles.InputForm}
                  name="tinggi"
                  type="number"
                  value={formData().tinggi}
                  onInput={handleInputChange}
                />
              </label>
              <label class={`${styles.formContent} ${styles.h6}`}>
                Umur
                <input class={styles.InputForm}
                  name="umur"
                  type="number"
                  value={formData().umur}
                  onInput={handleInputChange}
                />
              </label>
              <label class={`${styles.formContent} ${styles.h6}`}>
                Golongan Darah
                <input class={styles.InputForm}
                  name="golDarah"
                  value={formData().golDarah}
                  onInput={handleInputChange}
                />
              </label>
              <label class={`${styles.formContent} ${styles.h6}`}>
                Password
                <input class={styles.InputForm}
                  name="password"
                  type="password"
                  value={formData().password}
                  onInput={handleInputChange}
                />
              </label>
            </div>
            <div class={styles.LeftForm}>
              <label class={`${styles.formContent} ${styles.h6}`}>
                Riwayat Penyakit
                <textarea class={`${styles.scrollable} ${styles.riwayatPenyakitDesc}`}
                  name="riwayatPenyakit"
                  value={formData().riwayatPenyakit}
                  onInput={handleInputChange}
                />
              </label>
            </div>
          </div>
          <div class={styles.BottomForm}>
            <button type="button" onClick={handleSave} class={styles.button}>Save</button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AppointmentShow;
