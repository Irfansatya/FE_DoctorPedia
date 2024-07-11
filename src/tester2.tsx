import { Component } from "solid-js";
import { Link, useRoutes, useLocation } from "@solidjs/router";
import { routes } from "./routes";
import styles from "./tester2.module.css";

const Tester2: Component = () => {
  const location = useLocation();
  const Route = useRoutes(routes);


  
  const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser')) || {};
  const userRole = loggedInUser.role || 'Guest';


  return (
    <div class={`${styles.container}`}>
      {/* Header section */}
      <header class={styles.header}>
        <div class={styles.headercontent}>
          <div class={styles.logo}>
            <h1>DocterPedia</h1>
          </div>
          <nav class={styles.nav} data-visible="false">
            <ul class={styles.ul}>
              <li class={styles.li}><Link href="/login">Login</Link></li>
              <li class={styles.li}><Link href="/new">Jadwal</Link></li>
              {userRole === "Admin" && (
                <li class={styles.li}><Link href="/account-manage">Akun</Link></li>
              )}
            </ul>
          </nav>
        </div>
        <button aria-expanded="false" class={styles.mobile_navigation} aria-label="open"></button>
      </header>


      <div class={styles.image}>
        <div class={styles.backgroundContainer}>
        <img src="../assets/images/image-web-3-desktop 1.png" alt="Background" class={styles.backgroundImage} />
          <h1 class={styles.overlayText}>Selamat Datang, "Nama User"</h1>
        </div>
      </div>

      <main class={styles.main}>
        <div class={styles.mainSectDiv}>


          <div class={styles.Mainfeature}>
            <div class={styles.titleMain}>
              <h1 class={styles.titleSec}>FITUR UTAMA</h1>
              <h2 class={styles.subTitleSec}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eu pharetra velit. </h2>
            </div>
            <div class={styles.feature}>
              <div class={styles.cardFeature}>
                <div class={styles.inCardFeature}>
                <img src="" alt="" />
                </div>   
                <h3 class={`${styles.h3} ${styles.decs1}`}>Fitur pertama</h3>
              </div>
              <div class={styles.cardFeature}>
                <div class={styles.inCardFeature}>
                <img src="" alt="" />
                </div>   
                <h3 class={`${styles.h3} ${styles.decs1}`}>Fitur pertama</h3>
              </div>
              <div class={styles.cardFeature}>
                <div class={styles.inCardFeature}>
                <img src="" alt="" />
                </div>   
                <h3 class={`${styles.h3} ${styles.decs1}`}>Fitur pertama</h3>
              </div>
            </div>
          </div>


          <div class={styles.tutorial}>
            <div class={styles.titleTutor}>
              <h1>ISINYA TUTORIAL MAKE</h1>
            </div>
            <div class={styles.tutorialRow}>
              <div class={styles.tutorialInCOntent}>
              
              </div>
          </div>
          </div>

        </div>
        
      </main>

      {/* Footer section */}
      <footer class={styles.footer}>
        <div class={styles.footerup}>
          <div class={styles.rightcontainer}>
            <h2  class={styles.h1}>DocterPedia</h2>
            <div class={styles.pengaduan}>
              <h4 class={styles.h4}>Layanan Pengaduan Konsumen</h4>
              <p class={styles.pfooter}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eu pharetra velit. Lorem ipsum dolor sit amet.</p>
            </div>
            <div class={styles.alamat}>
              <h4 class={styles.h4}>Alamat:</h4>
              <p class={styles.palamat}>Lorem ipsum dolor sit amet, adipiscing elit. Aenean eu pharetra velit.</p>
            </div>
          </div>
          <div class={styles.leftcontainer}>
            <div class={styles.DocterSign}>
              <h4 class={styles.h5}>Apakah kamu seorang dokter?</h4>
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

export default Tester2;
