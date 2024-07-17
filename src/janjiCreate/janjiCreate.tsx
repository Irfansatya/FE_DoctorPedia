
import { createSignal, onMount, Component } from "solid-js";
import { Link, useRoutes, useLocation } from "@solidjs/router";
import { routes } from "../routes";
import styles from "./janjiCreate.module.css";



const Tester2: Component = () => {
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


      <main class={styles.main}>
      <div class={styles.mainSectDiv}>
        <div class={styles.janjiTemu}>
          <div class={styles.Title}>
            <h2 class={styles.h2}>Janji Temu</h2>
            <h4 class={styles.h4}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </h4>
          </div>

          <div class={styles.form}>
            <div class={styles.rightform}>


              <div class={styles.input}>
                <p  class={styles.p}>Nama Pasien</p>
                <input type="text" />
              </div>

              <div class={styles.subInput}>
                
                <div class={styles.input}>
                  <p class={styles.p}>Umur</p>
                  <input type="text" />
                </div>
                
                <div class={styles.input}>
                  <p class={styles.p}>Berat</p>
                  <input type="text" />
                </div>

                <div class={styles.input}>
                  <p class={styles.p}>Tinggi</p>
                  <input type="text" />
                </div>

                <div class={styles.input}>
                  <p class={styles.p}>Gol. Darah</p>
                  <input type="text" />
                </div>

              </div>

              <div class={styles.input}>
                <p class={styles.p}>Poli</p>
                <input type="text" />
              </div>

              <div class={styles.input}>
                <p class={styles.p}>Dokter</p>
                <input type="text" />
              </div>

              <div class={styles.subInputDua}>

                <div class={styles.input}>
                  <p class={styles.p}>Hari, tanggal</p>
                  <input type="text" />
                </div>

                <div class={styles.input}>
                  <p class={styles.p}>Sesi</p>
                  <input type="text" />
                </div>

              </div>
            </div>  
          </div>
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

export default Tester2;