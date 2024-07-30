import { createSignal, onCleanup, onMount, Component } from "solid-js";
import CryptoJS from 'crypto-js';
import { Link, useNavigate, useLocation } from "@solidjs/router";
import styles from "./profile.module.css";

const secretKey = 'your-secret-key';

const encryptPassword = (password) => {
  return CryptoJS.AES.encrypt(password, secretKey).toString();
};

const decryptPassword = (encryptedPassword) => {
  const bytes = CryptoJS.AES.decrypt(encryptedPassword, secretKey);
  return bytes.toString(CryptoJS.enc.Utf8);
};

const [username, setUsername] = createSignal('');
const [menuOpen, setMenuOpen] = createSignal(false);


const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser')) || {};
const userRole = loggedInUser.role || 'Guest';
onMount(() => {
  const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser')) || {};
  setUsername(loggedInUser.userName || 'Guest');

  // Handle clicks outside of the menu to close it
  const handleClickOutside = (event) => {
    if (!event.target.closest(`.${styles.nav}`) && !event.target.closest(`.${styles.mobile_navigation}`)) {
      setMenuOpen(false);
    }
  };

  document.addEventListener('click', handleClickOutside);
  onCleanup(() => document.removeEventListener('click', handleClickOutside));
});
const toggleMenu = () => setMenuOpen(!menuOpen());

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
      tanggallahir: loggedInUser.tanggallahir || "",
      golDarah: loggedInUser.golDarah || "",
      password: decryptPassword(loggedInUser.password),
      riwayatPenyakit: loggedInUser.riwayatPenyakit || "",
      alamat: loggedInUser.alamat || "",
      userPhotoProfile: loggedInUser.userPhotoProfile || ""
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
    tanggallahir: "",
    golDarah: "",
    password: "",
    riwayatPenyakit: "",
    alamat: "",
    userPhotoProfile: ""
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
    tanggallahir: data.tanggallahir,
    golDarah: data.golDarah,
    password: encryptPassword(data.password),
    riwayatPenyakit: data.riwayatPenyakit,
    alamat: data.alamat,
    userPhotoProfile: data.userPhotoProfile
  };
  localStorage.setItem('loggedInUser', JSON.stringify(updatedUser));
};

const UserProfile: Component = () => {
  const [formData, setFormData] = createSignal(getUserData());
  const [imagePreview, setImagePreview] = createSignal(formData().userPhotoProfile);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        const imageUrl = reader.result;
        setImagePreview(imageUrl);
        setFormData((prevData) => ({
          ...prevData,
          userPhotoProfile: imageUrl
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = () => {
    saveUserData(formData());
    console.log("Form data saved:", formData());
  };

  return (
    
    <div class={styles.container}>
    <header class={styles.header}>
      <div class={styles.headerContainer}>
        <div class={styles.logo}>
          <h1 class={styles.h1}>Dokterpedia</h1>
        </div>
        <nav class={`${styles.nav} ${menuOpen() ? styles.open : ''}`} data-visible={menuOpen()}>
          <ul class={styles.ul}>
            <li class={styles.li}><Link href="/login">Login</Link></li>
            <li class={styles.li}><Link href="/Appointment-Create">Buat Janji</Link></li>
            {userRole === "Admin" && (
              <li class={styles.li}><Link href="/account-manage">Akun</Link></li>
            )}
            <li class={styles.li}><Link href="/profile">Pengaturan Akun</Link></li>
            <li class={styles.li}><Link href="/Appointment-Show">Lihat Janji</Link></li>
          </ul>
        </nav>
        <button 
          aria-expanded={menuOpen()} 
          class={styles.mobile_navigation} 
          aria-label={menuOpen() ? 'close menu' : 'open menu'} 
          onClick={toggleMenu}
        ></button>
      </div>
    </header>
      <main class={styles.profile}>
        <div class={styles.form}>
          <div class={styles.upperForm}>
            <div class={styles.image}>
              <label class={`${styles.formContent} ${styles.h6}`}>
                <input
                  class={styles.InputForm}
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                />
              </label>
            </div>
            <div class={styles.userTitle}>
              {imagePreview() && (
                <img
                  src={imagePreview()}
                  alt="Profile Preview"
                  class={styles.profilePreview}
                />
              )}
              <h5 class={`${styles.formContent} ${styles.h6} username`}>
                {formData().username}
              </h5>
              <h5 class={`${styles.formContent} ${styles.h6} username`}>
                {`${formData().namaDepan} ${formData().namaBelakang}`}
              </h5>
            </div>
          </div>

          <div class={styles.midForm}>
            <h1 class={styles.h1}>Informasi Akun</h1>
            <div class={styles.content}>
              <div class={styles.right}>
                <label class={`${styles.formContent} ${styles.h6}`}>
                  Nama Depan
                  <input
                    class={styles.InputForm}
                    name="namaDepan"
                    value={formData().namaDepan}
                    onInput={handleInputChange}
                  />
                </label>
                <label class={`${styles.formContent} ${styles.h6}`}>
                  E-mail
                  <input
                    class={styles.InputForm}
                    name="email"
                    type="email"
                    value={formData().email}
                    onInput={handleInputChange}
                  />
                </label>
                <label class={`${styles.formContent} ${styles.h6}`}>
                  Password
                  <input
                    class={styles.InputForm}
                    name="password"
                    type="password"
                    value={formData().password}
                    onInput={handleInputChange}
                  />
                </label>
              </div>
              <div class={styles.left}>
                <label class={`${styles.formContent} ${styles.h6}`}>
                  Nama Belakang
                  <input
                    class={styles.InputForm}
                    name="namaBelakang"
                    value={formData().namaBelakang}
                    onInput={handleInputChange}
                  />
                </label>
                <label class={`${styles.formContent} ${styles.h6}`}>
                  Nomor Telefon
                  <input
                    class={styles.InputForm}
                    name="nomorTelefon"
                    value={formData().nomorTelefon}
                    onInput={handleInputChange}
                  />
                </label>
              </div>
            </div>
          </div>

          <div class={styles.bottomForm}>
            <h1 class={styles.h1}>Informasi Personal</h1>
            <div class={styles.content}>
              <div class={styles.jenisKelamin_TanggalLahir}>
                <label class={`${styles.formContent} ${styles.h6}`}>
                  Jenis Kelamin
                  <div>
                    <label>
                      <h6 class={styles.h6}>Wanita</h6>
                      <input
                        type="radio"
                        name="jenisKelamin"
                        value="Wanita"
                        checked={formData().jenisKelamin === "Wanita"}
                        onInput={handleInputChange}
                      />
                    </label>
                    <label>
                      <h6 class={styles.h6}>Pria</h6>
                      <input
                        type="radio"
                        name="jenisKelamin"
                        value="Pria"
                        checked={formData().jenisKelamin === "Pria"}
                        onInput={handleInputChange}
                      />
                    </label>
                    <label class={`${styles.formContent} ${styles.h6}`}>
                      Tanggal Lahir
                      <input
                        type="date"
                        name="tanggallahir"
                        class={styles.calendar}
                        value={formData().tanggallahir}
                        onInput={(e) => {
                          setFormData((prevData) => ({
                            ...prevData,
                            tanggallahir: e.target.value
                          }));
                        }}
                      />
                    </label>
                  </div>
                </label>
              </div>
              <div class={styles.subgroup}>
                <label class={`${styles.formContent} ${styles.h6}`}>
                  Berat
                  <input
                    class={styles.InputForm}
                    name="berat"
                    type="number"
                    value={formData().berat}
                    onInput={handleInputChange}
                  />
                </label>
                <label class={`${styles.formContent} ${styles.h6}`}>
                  Tinggi
                  <input
                    class={styles.InputForm}
                    name="tinggi"
                    type="number"
                    value={formData().tinggi}
                    onInput={handleInputChange}
                  />
                </label>
                <label class={`${styles.formContent} ${styles.h6}`}>
                  Golongan Darah
                  <input
                    class={styles.InputForm}
                    name="golDarah"
                    value={formData().golDarah}
                    onInput={handleInputChange}
                  />
                </label>
              </div>
              <label class={`${styles.formContent} ${styles.h6}`}>
                Riwayat Penyakit
                <textarea
                  class={`${styles.InputForm} ${styles.scrollable}`}
                  name="riwayatPenyakit"
                  value={formData().riwayatPenyakit}
                  onInput={handleInputChange}
                />
              </label>
              <label class={`${styles.formContent} ${styles.h6}`}>
                Alamat
                <textarea
                  class={`${styles.InputForm} ${styles.scrollable}`}
                  name="alamat"
                  value={formData().alamat}
                  onInput={handleInputChange}
                />
              </label>
            </div>
          </div>
        </div>

        <div class={styles.BottomForm}>
          <button type="button" onClick={handleSave} class={styles.button}>
            Save
          </button>
        </div>
      </main>
      <footer class={styles.footer}>
        <div class={styles.footerAboveDiv}>
          <div class={styles.rightcontainer}>
            <h1 class={styles.h1}>Dokterpedia</h1>
            <div class={styles.pengaduan}>
              <h5 class={styles.h5}>Layanan Pengaduan Konsumen</h5>
              <p class={styles.p}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eu pharetra velit. Lorem ipsum dolor sit amet.</p>
            </div>
            <div class={styles.alamat}>
              <h5 class={styles.h5}>Alamat:</h5>
              <p class={styles.p}>Lorem ipsum dolor sit amet, adipiscing elit. Aenean eu pharetra velit.</p>
            </div>
          </div>
          <div class={styles.leftcontainer}></div>
        </div>
        <div class={styles.footerBottom}>
          <p class={styles.p}>
            Dibuat oleh
            Fikri Hidayatulloh dan Kevin Priambudi 
          </p>
        </div>
      </footer>
    </div>
  );
};

export default UserProfile;
