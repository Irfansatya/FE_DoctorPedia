import { createSignal, onCleanup, onMount, Component } from "solid-js";
import { Link, useNavigate, useLocation } from "@solidjs/router";
import styles from "./headerFooter.module.css";

const Template: Component = () => {
  const navigate = useNavigate();
  const location = useLocation();

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
      <main></main>
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

export default Template;
