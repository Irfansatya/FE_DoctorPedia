import { Component } from "solid-js";
import { Link, useRoutes, useLocation } from "@solidjs/router";
import { routes } from "./routes";
import styles from "./landingpage.module.css"; // Import the CSS module

const LandingPage: Component = () => {
  const location = useLocation();
  const Route = useRoutes(routes);

  return (


// HEADER
    
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
          </ul>
      </div>
      <button aria-expanded="false" class={styles.mobile_navigation} aria-label="open"></button>
  </div>
</header>

{/* KONTAINER KIRI */}


      <main>
        <section class={`${styles.main_section} ${styles.section}`} >
          <div class={`${styles.col_one}`}>
            <picture class={styles.picture}>
              <source media="(min-width:60rem)" srcset="./assets/images/image-web-3-desktop.jpg" />
              <img class={styles.img} src="./assets/images/image-web-3-mobile.jpg" alt="a colorful hero" />
            </picture>
            <div class={styles.col_flex}>
              <h1 class={styles.h1bawah}>Jagalah kesehatan keluarga anda!
              </h1>
              <div class={styles.spc_top}>
                <p class={styles.grey}>
                Kesehatan keluarga adalah prioritas utama. Lakukan pemeriksaan rutin, jaga pola makan yang sehat, dan tetap aktif. 
                </p>
                <br></br>
                <p class={styles.grey}>
                Dengan perawatan yang tepat, kita dapat menjaga kesejahteraan dan kebahagiaan bersama.
                </p>
                <a href="#" class={styles.read}>READ MORE</a>
              </div>
            </div>
          </div>



{/* KONTAINER KANAN */}


        <div class={`${styles.col_two}`}>
          <h2 class={styles.h2}>OUR FEATURE</h2>
          <article class={styles.col_space}>
            <h3 class={styles.h3}>Janji Temu Online</h3>
            <p class={styles.desc}>Membuat janji temu dengan dokter secara online tanpa perlu datang langsung ke klinik.</p>
          </article>
          <article class={styles.col_space}>
            <h3 class={styles.h3}>Timetable Dokter</h3>
            <p class={styles.desc}>Lihat jadwal dokter dan status kehadiran mereka secara real-time, memudahkan perencanaan kunjungan Anda.</p>
          </article>
          <article class={styles.col_top}>
            <h3 class={styles.h3}>Pembayaran Online</h3>
            <p class={styles.desc}>Lakukan pembayaran secara online dengan aman dan nyaman, dengan berbagai metode pembayaran.</p>
          </article>
        </div>
        </section>


{/* KONTAINER BAWAH */}


        <aside class={`${styles.main_section} ${styles.aside}`}>
          <article class={styles.flexContFoot}>
            <img class={`${styles.img} ${styles.pictbawah}`}   src="assets\images\Img-1.png" alt="Login/Regist" />
            <div>
              <h4 class={styles.h4}>01</h4>
              <h5 class={styles.h5}>Daftar akun</h5>
              <p class={styles.greyContFoot}>Silahkan login atau mendaftarkan akun!</p>
            </div>
          </article>
          <article class={styles.flexContFoot}>
            <img class={`${styles.img} ${styles.pictbawah}`}  src="assets\images\Img-2.png" alt="Create Appointments" />
            <div>
              <h4 class={styles.h4}>02</h4>
              <h5 class={styles.h5}>Membuat Janji</h5>
              <p class={styles.greyContFoot}>Pilih jadwal temu serta isi formulir yang diberikan!</p>
            </div>
          </article>
          <article class={styles.flexContFoot}>
            <img class={`${styles.img} ${styles.pictbawah}`}  src="assets\images\Img-3.png" alt="Done!" />
            <div>
              <h4 class={styles.h4}>03</h4>
              <h5 class={styles.h5}>Selesai!</h5>
              <p class={styles.greyContFoot}>Anda dapat menemui dokter sesuai dengan janji temu!</p>
            </div>
        

            </article>
        </aside>
      </main>

{/* FOOTER */}


      <footer class={`${styles.attribution}`}>
        {/* <p>
          Dibuat oleh <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">EJBFSUE</a>.
          WFEHIEWF <a href="#">HOME</a>.
        </p> */}
      </footer>
    </div>
  );
};

export default LandingPage;
