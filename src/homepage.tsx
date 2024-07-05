import { Component } from "solid-js";
import { Link, useRoutes, useLocation } from "@solidjs/router";
import { routes } from "./routes";
import styles from "./HomePage.module.css"; // Import the CSS module

const HomePage: Component = () => {
  const location = useLocation();
  const Route = useRoutes(routes);

  return (


// HEADER
    
    <div class={`${styles.container} ${styles.homepage}`}>
      <header class={styles.header}>

        <div class="logo">
          <h1 class={styles.h1}>DocterPedia</h1>
        </div>
        <nav class={styles.nav}data-visible="false">
          <ul class={styles.ul}>
            <li class={styles.li}><Link href="/login">Login</Link></li>
            <li class={styles.li}><Link href="/new">Jadwal</Link></li>
            <li class={styles.li}><Link href="/categories">Akun</Link></li>
            
          </ul>
        </nav>
        <button aria-expanded="false" class={styles.mobile_navigation} aria-label="open"></button>

      </header>


{/* KONTAINER Gambar BG */}


{/* KONTAINER Formulir */}


   




      


{/* KONTAINER BAWAH */}


      
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

export default HomePage;
