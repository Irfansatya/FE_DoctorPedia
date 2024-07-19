import { createSignal, onMount, Component } from "solid-js";
import { Link, useRoutes, useLocation } from "@solidjs/router";
import { routes } from "../routes";
import styles from "./appointmentCRUD.module.css"

import AgGridSolid from 'ag-grid-solid';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';

import { columnDefs } from './columnDefs';  // Definisikan kolom yang diperlukan untuk appointment
import DeleteButtonRenderer from './DeleteButtonRenderer';

const janjiCRUD: Component = () => {
  const location = useLocation();
  const Route = useRoutes(routes);

  const [username, setUsername] = createSignal('');
  const [appointments, setAppointments] = createSignal(JSON.parse(localStorage.getItem('Appointment')) || []);
  const [newAppointment, setNewAppointment] = createSignal({
    namaPasien: '',
    umur: '',
    berat: '',
    tinggi: '',
    golDarah: '',
    poli: '',
    dokter: '',
    tanggal: '',
    sesi: '',
    keluhan: ''
  });
  let nextId = appointments().length ? Math.max(...appointments().map(app => app.id)) + 1 : 1;

  onMount(() => {
    const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser')) || {};
    setUsername(loggedInUser.userName || 'Guest');
  });

  const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser')) || {};
  const userRole = loggedInUser.role || 'Guest';

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewAppointment((prev) => ({ ...prev, [name]: value }));
  };

  const addAppointment = () => {
    if (newAppointment().namaPasien && newAppointment().umur && newAppointment().poli && newAppointment().dokter && newAppointment().tanggal && newAppointment().sesi && newAppointment().keluhan) {
      const updatedAppointments = [...appointments(), { id: nextId, ...newAppointment() }];
      nextId += 1;
      setAppointments(updatedAppointments);
      localStorage.setItem('Appointment', JSON.stringify(updatedAppointments));
      setNewAppointment({ namaPasien: '', umur: '', berat: '', tinggi: '', golDarah: '', poli: '', dokter: '', tanggal: '', sesi: '', keluhan: '' });
    } else {
      alert('Please fill all fields.');
    }
  };

  const onCellValueChanged = (params) => {
    const updatedAppointments = appointments().map(app =>
      app.id === params.data.id ? { ...app, ...params.data } : app
    );
    setAppointments(updatedAppointments);
    localStorage.setItem('Appointment', JSON.stringify(updatedAppointments));
  };

  const deleteAppointment = (id) => {
    const updatedAppointments = appointments().filter(app => app.id !== id);
    setAppointments(updatedAppointments);
    localStorage.setItem('Appointment', JSON.stringify(updatedAppointments));
  };

  return (
    <div class={`${styles.container}`}>
      <header class={styles.header}>
        <div class={styles.headerContainer}>
            <div class={styles.logoH1}>
                <h1>Dokterpedia</h1>
            </div>
            <div class={styles.nav} data-visible="false">
                <ul class={styles.ul}>
                <li class={styles.li}><Link href="/login">Home</Link></li>
                <li class={styles.li}><Link href="/login">Login</Link></li>
                <li class={styles.li}><Link href="/new">Jadwal</Link></li>
                {userRole === "Admin" && (
                    <li class={styles.li}><Link href="/account-manage">Akun</Link></li>
                )}
                </ul>
            </div>
            <button aria-expanded="false" class={styles.mobile_navigation} aria-label="open"></button>
        </div>
    </header>
    <div class={styles.image}>
        <div class={styles.backgroundContainer}>
          <img src="assets/images/image-web-3-desktop 1.png" alt="Background" class={styles.backgroundImage} />
          <h1 class={styles.overlayText}>Selamat Datang, {username()}!</h1>
        </div>
      </div>
      <main class={styles.main}>
      <div class={styles.mainSectDiv}>
        <div class={styles.appointmentCRUD}>
          <div class={`${styles.InputDiv}`}>
            <div class={`${styles.InputDivColumn}`}>
              <p class={styles.p}>Nama Pasien</p>
              <input
                class={styles.input}
                type="text"
                name="namaPasien"
                placeholder="Nama Pasien"
                value={newAppointment().namaPasien}
                onInput={handleChange}
              />
              <p class={styles.p}>Umur</p>
              <input
                class={styles.input}
                type="text"
                name="umur"
                placeholder="Umur"
                value={newAppointment().umur}
                onInput={handleChange}
              />
              <p class={styles.p}>Berat</p>
              <input
                class={styles.input}
                type="text"
                name="berat"
                placeholder="Berat"
                value={newAppointment().berat}
                onInput={handleChange}
              />
            </div>
            <div class={`${styles.InputDivColumn}`}>
              <p class={styles.p}>Tinggi</p>
              <input
                class={styles.input}
                type="text"
                name="tinggi"
                placeholder="Tinggi"
                value={newAppointment().tinggi}
                onInput={handleChange}
              />
              <p class={styles.p}>Gol. Darah</p>
              <input
                class={styles.input}
                type="text"
                name="golDarah"
                placeholder="Gol. Darah"
                value={newAppointment().golDarah}
                onInput={handleChange}
              />
              <p class={styles.p}>Poli</p>
              <input
                class={styles.input}
                type="text"
                name="poli"
                placeholder="Poli"
                value={newAppointment().poli}
                onInput={handleChange}
              />
              <p class={styles.p}>Dokter</p>
              <input
                class={styles.input}
                type="text"
                name="dokter"
                placeholder="Dokter"
                value={newAppointment().dokter}
                onInput={handleChange}
              />
              <p class={styles.p}>Tanggal</p>
              <input
                class={styles.input}
                type="date"
                name="tanggal"
                placeholder="Tanggal"
                value={newAppointment().tanggal}
                onInput={handleChange}
              />
              <p class={styles.p}>Sesi</p>
              <input
                class={styles.input}
                type="text"
                name="sesi"
                placeholder="Sesi"
                value={newAppointment().sesi}
                onInput={handleChange}
              />
              <p class={styles.p}>Keluhan</p>
              <input
                class={styles.input}
                type="text"
                name="keluhan"
                placeholder="Keluhan"
                value={newAppointment().keluhan}
                onInput={handleChange}
              />
            </div>
          </div>
          <button class={styles.button} onClick={addAppointment}>Add Appointment</button>
        </div> 
        <div class="ag-theme-alpine custom-ag-theme" style={{ height: '800px', width: '100%' }}>
            <AgGridSolid
                rowData={appointments()}
                columnDefs={columnDefs}
                components={{ deleteButtonRenderer: DeleteButtonRenderer }}
                context={{ deleteAppointment }}
                onCellValueChanged={onCellValueChanged}
            />
        </div>
      </div>
    </main>

   
   {/* <---------------Footer---------------------------> */}
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
            <div class={styles.DocterSign}>
              <h5 class={styles.h5}>Apakah kamu seorang dokter?</h5>
              <button class={styles.button}>Sign Up!</button>
            </div>
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

export default janjiCRUD;
