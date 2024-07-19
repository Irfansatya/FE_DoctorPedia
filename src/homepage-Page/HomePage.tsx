import { createSignal, onMount, Component } from "solid-js";
import { Link, useRoutes, useLocation, Routes } from "@solidjs/router";
import { routes } from "../routes";

import styles from "./HomePage.module.css";
import CreateAppointment from "../appointmentCreate/appointmentCreate";

const HomePage: Component = () => {
  const location = useLocation();
  const Route = useRoutes(routes);

  // Step 1: Create a signal for the username
  const [username, setUsername] = createSignal('');

  // Step 2: Initialize the username from local storage
  onMount(() => {
    const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser')) || {};
    setUsername(loggedInUser.userName || 'Guest');
  });

  const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser')) || {};
  const userRole = loggedInUser.role || 'Guest';

  function handleClick() {
    console.log('Card diklik');
  }

  
  return (
    <div class={`${styles.container}`}>
      {/* Header section */}
      <header class={styles.header}>
        <div class={styles.headerContainer}>
            <div class={styles.logoH1}>
                <h1>Dokterpedia</h1>
            </div>
            <div class={styles.nav} data-visible="false">
                <ul class={styles.ul}>
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



      {/* -----------------------------------Hub Atas------------------------------------------------ */}
      <div class={styles.image}>
        <div class={styles.backgroundContainer}>
          <img src="../assets/images/image-web-3-desktop 1.png" alt="Background" class={styles.backgroundImage} />
          <h1 class={styles.overlayText}>Selamat Datang, {username()}!</h1>
        </div>
      </div>




      <main class={styles.main}>
        <div class={styles.mainSectDiv}>
          {/* <----------------Feature---------------------------> */}
          <div class={styles.Mainfeature}>
            <div class={styles.titleMain}>
              <h1 class={styles.titleSec}>FITUR UTAMA</h1>
              <h2 class={styles.subTitleSec}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eu pharetra velit. </h2>
            </div>

            <div class={styles.cardFeature}>
              <Link href="/appointment" class={styles.inCardFeature}>
                <div class={styles.inCardFeature}>
                  <img src="" alt="" />
                </div>
                <h4 class={`${styles.h4} ${styles.decs1}`}>Fitur pertama</h4>
              </Link>
            </div>
            </div>

          {/* <---------------Tutorial---------------------------> */}
          <div class={styles.tutorial}>
            <div class={styles.titleTutor}>
              <h1 class={styles.h1}>ISINYA TUTORIAL MAKE</h1>
            </div>
            <div class={styles.tutorialRow}>
              <div class={styles.tutorialInCOntent}>
                <img class={styles.tutorialimg} src="assets/images/Ellipse 13.png" alt="" />
                <div class={styles.tutorialText}>
                  <h3 class={styles.h3}>Lorem Ipsum Dolor</h3>
                  <h4 class={styles.h4}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h4>
                </div>
              </div>
              <div class={styles.tutorialInCOntent}>
                <img class={styles.tutorialimg} src="assets/images/Ellipse 13.png" alt="" />
                <div class={styles.tutorialText}>
                  <h3 class={styles.h3}>Lorem Ipsum Dolor</h3>
                  <h4 class={styles.h4}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h4>
                </div>
              </div>
              <div class={styles.tutorialInCOntent}>
                <img class={styles.tutorialimg} src="assets/images/Ellipse 13.png" alt="" />
                <div class={styles.tutorialText}>
                  <h3 class={styles.h3}>Lorem Ipsum Dolor</h3>
                  <h4 class={styles.h4}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h4>
                </div>
              </div>
            </div>
          </div>

          {/* <---------------RS Content---------------------------> */}
          <div class={styles.rumahSakit}>
            <div class={styles.rumahSakitTitle}>
              <h1 class={styles.h1}>YA POKONYA TITLE BUAT BAGIAN RS</h1>
              <h3 class={styles.h3}>Berikut adalah beberapa rumah sakit yang bekerja sama dengan kami:</h3>       
            </div>

            <div class={styles.townRow}>
              <div class={styles.town}>
                <h3>Purwokerto</h3>
              </div>
              <div class={styles.town} onclick={handleClick}>
                <h3>Purwokerto</h3>
              </div>
            </div>
            
            <div class={styles.rumahSakitRow}>
              <div class={styles.rumahSakitcard} onclick={handleClick}>
                <div class={styles.rumahSakitImage}>
                  <div class={styles.town} onclick={handleClick}>
                    <h3>Purwokerto</h3>
                  </div>    
                </div>
                <div class={styles.rumahSakitUnitTitle}> 
                  <h2 class={`${styles.h2} ${styles.scrollable}`}>RSUD Margono bla bla bla bla bla bla</h2>
                  <h3 class={`${styles.h3} ${styles.scrollable}`}>Rumah Sakit Umum, Jl. bla bla bla bla bla bla</h3>
                </div>
              </div>
            </div>
          </div>

          {/* <---------------Poli content---------------------------> */}
          <div class={styles.poli}>
            <div class={styles.titlePoli}>
              <h1 class={styles.h1}>POLI KAMI:</h1>
            </div>
            <div class={styles.poliRow}>
              <div class={styles.poliCard}>
                <div class={styles.circle} onclick={handleClick}></div>
                <h6 class={styles.h6}>Gigi</h6>
              </div>
            </div>
          </div>

          {/* <---------------Artikel content---------------------------> */}
          <div class={styles.artikel}>
            <div class={styles.artikelTitle}>
              <h1 class={styles.h1}>Artikel</h1>
              <h3 class={styles.h3}>Berikut adalah beberapa artikel-artikel yang mungkin dapat membantu permasalahan kesehatan anda</h3>
            </div>
            <div class={styles.artikelRow}>
              <div class={styles.artikelCard} onclick={handleClick}>
                <div class={styles.artikelImg}>
                  <div class={styles.artikelCardTitle}>
                    <h1 class={styles.h1}>TITLE</h1>
                    <h3 class={styles.h3}>Lorem ipsum dolor sit amet;</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* <---------------Footer---------------------------> */}
      <footer class={styles.footer}>
        <div class={styles.footerup}>
          <div class={styles.rightcontainer}>
            <h2 class={styles.h1}>DocterPedia</h2>
            <div class={styles.pengaduan}>
              <h5 class={styles.h5}>Layanan Pengaduan Konsumen</h5>
              <p class={styles.pfooter}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eu pharetra velit. Lorem ipsum dolor sit amet.</p>
            </div>
            <div class={styles.alamat}>
              <h5 class={styles.h5}>Alamat:</h5>
              <p class={styles.palamat}>Lorem ipsum dolor sit amet, adipiscing elit. Aenean eu pharetra velit.</p>
            </div>
          </div>
          <div class={styles.leftcontainer}>
            <div class={styles.DocterSign}>
              <h5 class={styles.h5}>Apakah kamu seorang dokter?</h5>
              <button class={styles.button}>Sign Up!</button>
            </div>
          </div>
        </div>
        <div class={styles.footerdown}>
          <p class={styles.pfooter}>
            Dibuat oleh <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" class={styles.a}>EJBFSUE</a>.
            WFEHIEWF <a href="#">HOME</a>.
          </p>
        </div>
      </footer>
    </div>
  );
};
export default HomePage;
