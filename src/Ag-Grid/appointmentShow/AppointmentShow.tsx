import { createSignal, onMount, Component } from "solid-js";
import { Link, useRoutes, useLocation } from "@solidjs/router";
import styles from "./appoitmentShow.module.css";

import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import DeleteButtonRenderer from './DeleteButtonRenderer';
import Card from "./Card";

const AppointmentShow: Component = () => {
  const location = useLocation();

  const [username, setUsername] = createSignal('');
  const [appointments, setAppointments] = createSignal<CardData[]>([]);

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

  const [newAppointment, setNewAppointment] = createSignal<CardData>({
    id: '',
    namaPasien: '',
    umur: '',
    berat: '',
    tinggi: '',
    golDarah: '',
    poli: '',
    dokter: '',
    tanggal: '',
    sesi: '',
    keluhan: '',
    pengirim: ''
  });

  let nextId = appointments().length ? Math.max(...appointments().map(app => parseInt(app.id))) + 1 : 1;

  onMount(() => {
    const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser')) || {};
    setUsername(loggedInUser.userName || 'Guest');
  });

  const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser')) || {};
  const userRole = loggedInUser.role || 'Guest';

  const updateAppointment = (id: string, updatedData: Partial<CardData>) => {
    const updatedAppointments = appointments().map(app =>
      app.id === id ? { ...app, ...updatedData } : app
    );
    setAppointments(updatedAppointments);
    localStorage.setItem('Appointment', JSON.stringify(updatedAppointments));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewAppointment((prev) => ({ ...prev, [name]: value }));
  };

  const allAppointments = JSON.parse(localStorage.getItem('Appointment')) || [];
  const userAppointments = allAppointments.filter(app => app.pengirim === loggedInUser.userName);
  setAppointments(userAppointments);

  const addAppointment = () => {
    if (newAppointment().namaPasien && newAppointment().umur && newAppointment().poli && newAppointment().dokter && newAppointment().tanggal && newAppointment().sesi && newAppointment().keluhan) {
      const updatedAppointments = [...appointments(), { ...newAppointment(), id: nextId.toString(), pengirim: username() }];
      nextId += 1;
      setAppointments(updatedAppointments);
      localStorage.setItem('Appointment', JSON.stringify(updatedAppointments));
      setNewAppointment({
        id: '',
        namaPasien: '',
        umur: '',
        berat: '',
        tinggi: '',
        golDarah: '',
        poli: '',
        dokter: '',
        tanggal: '',
        sesi: '',
        keluhan: '',
        pengirim: ''
      });
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

  const deleteAppointment = (id: string) => {
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
              <li class={styles.li}><Link href="/new">Jadwal</Link></li>
              <li class={styles.li}><Link href="/appointment">Buat Janji</Link></li>
              <li class={styles.li}><Link href="/profile">Profile</Link></li>
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
          <img src="assets/public/png/image-web-3-desktop 1.png" alt="Background" class={styles.backgroundImage} />
          <h1 class={styles.overlayText}>Selamat Datang, {username()}!</h1>
        </div>
      </div>
      <main class={styles.main}>
        <div class={styles.mainSectDiv}>
          <div class={styles.appointmentCRUD}>
            <div class={styles.cardsContainer}>
              {appointments().map((appointment) => (
                <Card 
                  data={appointment} 
                  updateAppointment={updateAppointment} 
                  deleteAppointment={deleteAppointment} 
                />
              ))}
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

export default AppointmentShow;
