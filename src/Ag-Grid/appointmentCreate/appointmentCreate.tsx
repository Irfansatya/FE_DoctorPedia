import { createSignal, onMount, Component } from "solid-js";
import { Link, useNavigate, useLocation } from "@solidjs/router";
import styles from "./appointmentCreate.module.css";

const CreateAppointment: Component = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const golDarahOptions = [
    "A",
    "B",
    "AB",
    "O"
  ];
  // Step 1: Create a signal for the username
  const [username, setUsername] = createSignal('');

  // Step 2: Initialize the username from local storage
  onMount(() => {
    const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser')) || {};
    setUsername(loggedInUser.userName || 'Guest');
  });

  const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser')) || {};
  const userRole = loggedInUser.role || 'Guest';

  // State untuk setiap input
  const [namaPasien, setNamaPasien] = createSignal('');
  const [umur, setUmur] = createSignal('');
  const [berat, setBerat] = createSignal('');
  const [tinggi, setTinggi] = createSignal('');
  const [golDarah, setGolDarah] = createSignal('');
  const [poli, setPoli] = createSignal('');
  const [dokter, setDokter] = createSignal('');
  const [tanggal, setTanggal] = createSignal('');
  const [sesi, setSesi] = createSignal('');
  const [keluhan, setKeluhan] = createSignal('');

  // Fungsi untuk menyimpan data ke local storage
  const saveAppointment = () => {
    const newAppointment = {
      id: Date.now(), // Menggunakan timestamp sebagai ID unik
      namaPasien: namaPasien(),
      umur: umur(),
      berat: berat(),
      tinggi: tinggi(),
      golDarah: golDarah(),
      poli: poli(),
      dokter: dokter(),
      tanggal: tanggal(),
      sesi: sesi(),
      keluhan: keluhan(),
      pengirim: username() // Tambahkan kolom pengirim
    };

    // Ambil data existing dari local storage
    const existingData = JSON.parse(localStorage.getItem('Appointment')) || [];

    // Tambahkan appointment baru
    const updatedData = [...existingData, newAppointment];

    // Simpan kembali ke local storage
    localStorage.setItem('Appointment', JSON.stringify(updatedData));

    console.log("Appointment saved:", newAppointment);
    alert('Appointment created successfully!');

    // Redirect setelah menyimpan data
    navigate('/AppointmentShow');
  };

  return (
    <div class={styles.container}>
      <header class={styles.header}>
        <div class={styles.headerContainer}>
            <div class={styles.logoH1}>
                <h1>Dokterpedia</h1>
            </div>
            <div class={styles.nav} data-visible="false">
                <ul class={styles.ul}>
                <li class={styles.li}><Link href="/login">Login</Link></li>
                <li class={styles.li}><Link href="/appointment">Buat Janji</Link></li>
                {userRole === "Admin" && (
                    <li class={styles.li}><Link href="/account-manage">Akun</Link></li>
                )}
                <li class={styles.li}><Link href="/profile">Pengaturan Akun</Link></li>
                <li class={styles.li}><Link href="/dokter">Jadwal Dokter</Link></li>
                </ul>
            </div>
            <button aria-expanded="false" class={styles.mobile_navigation} aria-label="open"></button>
        </div>
    </header>

      <main class={styles.main}>
        <div class={styles.mainSectDiv}>
          <div class={styles.janjiTemu}>
            <div class={styles.Title}>
              <h2 class={styles.h2}>Janji Temu</h2>
              <h4 class={styles.h4}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </h4>
            </div>

            <div class={styles.form}>
              <div class={styles.rightForm}>
                <div class={styles.input}>
                  <p class={styles.p}>Nama Pasien</p>
                  <input type="text" value={namaPasien()} onInput={(e) => setNamaPasien(e.target.value)} />
                </div>

                <div class={styles.subInput}>
                  <div class={styles.input}>
                    <p class={styles.p}>Umur</p>
                    <input type="text" value={umur()} onInput={(e) => setUmur(e.target.value)} />
                  </div>
                  
                  <div class={styles.input}>
                    <p class={styles.p}>Berat</p>
                    <input type="number" value={berat()} onInput={(e) => setBerat(e.target.value)} />
                  </div>

                  <div class={styles.input}>
                    <p class={styles.p}>Tinggi</p>
                    <input type="number" value={tinggi()} onInput={(e) => setTinggi(e.target.value)} />
                  </div>

                  <div class={styles.input}>
                    <p class={styles.p}>Gol. Darah</p>
                    <input
                      type="text"
                      list="golDarahList"
                      value={golDarah()}
                      onInput={(e) => setGolDarah(e.target.value)}
                    />
                    <datalist id="golDarahList">
                      {golDarahOptions.map(option => (
                        <option value={option} />
                      ))}
                    </datalist>
                  </div>

                </div>

                <div class={`${styles.input} ${styles.poli}`}>
                <p class={styles.p}>Poli</p>
                <select
                  class={styles.InputForm}
                  value={poli()}
                  onInput={(e) => setPoli(e.target.value)}
                >
                  <option value="">Pilih Poli</option>
                  <option value="Poli Umum">Poli Umum</option>
                  <option value="Poli Anak">Poli Anak</option>
                  <option value="Poli Gigi">Poli Gigi</option>
                  <option value="Poli Mata">Poli Mata</option>
                  {/* Add more options as needed */}
                </select>
              </div>

                <div class={styles.input}>
                  <p class={styles.p}>Dokter</p>
                  <input type="text" value={dokter()} onInput={(e) => setDokter(e.target.value)} />
                </div>

                <div class={styles.subInputDua}>
                  <div class={styles.input}>
                    <p class={styles.p}>Hari, tanggal</p>
                    <input type="date" id="start" name="start-date" class={styles.calendar} value={tanggal()} onInput={(e) => setTanggal(e.target.value)} />
                  </div>

                  <div class={styles.input}>
                    <p class={styles.p}>Sesi</p>
                    <input type="text" value={sesi()} onInput={(e) => setSesi(e.target.value)} />
                  </div>
                </div>

                <div class={styles.withaccount}>
                  <input type="checkbox" id="accountcb" name="accountdb" value="yes" class={styles.cb} />
                  <p class={styles.p}>Gunakan data akun?</p>
                </div>
              </div>

              <div class={styles.leftForm}>
                <div class={styles.input}>
                  <p class={styles.p}>Keluhan</p>
                  <textarea id="description" name="description" rows="4" cols="50" class={styles.textarea} value={keluhan()} onInput={(e) => setKeluhan(e.target.value)}></textarea>
                  <div class="buttonACC">
                    <button class={styles.button} onClick={saveAppointment}>Kirim!</button>
                  </div>
                </div>
              </div>  
            </div>
          </div>
        </div>
      </main>

      <footer class={styles.footer}>
        <div class={styles.footerAboveDiv}>
          <div class={styles.rightcontainer}>
            <h2 class={styles.h1}>DocterPedia</h2>
            <div class={styles.pengaduan}>
              <h5 class={styles.h5}>Layanan Pengaduan Konsumen</h5>
              <p class={styles.p}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eu pharetra velit. Lorem ipsum dolor sit amet.</p>
            </div>
            <div class={styles.alamat}>
              <h5 class={styles.h5}>Alamat:</h5>
              <p class={styles.p}>Lorem ipsum dolor sit amet, adipiscing elit. Aenean eu pharetra velit.</p>
            </div>
          </div>
          <div class={styles.leftcontainer}>
            
          </div>
        </div>
        <div class={styles.footerBottom}>
          <p class={styles.p}>
            Dibuat oleh <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" class={styles.a}>EJBFSUE</a>.
            WFEHIEWF <a href="#">HOME</a>.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default CreateAppointment;
