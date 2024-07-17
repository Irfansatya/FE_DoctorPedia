
import { createSignal, onMount, Component } from "solid-js";
import { Link, useRoutes, useLocation } from "@solidjs/router";
import { routes } from "../routes";
import styles from "./Article.module.css"



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
          <img src="assets\images\image-web-3-desktop 1.png" alt="Background" class={styles.backgroundImage} />
          <h1 class={styles.overlayText}>Selamat Datang, {username()}!</h1>
        </div>
      </div>

      <main class={styles.main}>
      <div class={styles.mainSectDiv}>
        <div class={styles.articles}>
            <div class={styles.title}>
                <h1 class={styles.h1}>Khasiat Buah Matoa yang Mampu 
                Meningkatkan Imunitas Tubuh</h1>
                <h2 class={styles.h4}>Ditinjau oleh dr. Rizal Fadli 24 September 2024</h2>
            </div>
            <div class={styles.img}>
                <img src="assets\images\Artikel.png" alt="" />
            </div >
            <div class={styles.articlesContent}>
                <hr class={styles.hr}/>

                <p class={styles.p}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi non lacinia ipsum. Fusce tempor sit amet turpis at lobortis. Vestibulum sed odio mi. Proin libero purus, accumsan ac nisl eget, aliquam dignissim magna. Nunc non viverra mi, at pretium urna. Nam ut congue mi. Suspendisse mattis cursus neque, vitae venenatis metus malesuada quis.</p>


                <p class={styles.p}>Nam semper ipsum id ipsum faucibus, in hendrerit mauris tristique. Suspendisse a nunc vehicula, facilisis nisi sit amet, aliquet odio. Aenean a vestibulum eros, posuere auctor est. Nulla facilisi. Integer volutpat tortor ac massa ornare, vitae tincidunt magna varius. Integer sit amet aliquam turpis. Donec ultricies sodales orci a sagittis. Duis tellus metus, ultricies vitae urna sit amet, suscipit cursus diam. Mauris suscipit sit amet dui eget malesuada. Vivamus ornare dui cursus turpis consectetur convallis. Vivamus ultrices turpis ac neque ultricies, sit amet luctus risus ultricies. In hac habitasse platea dictumst. Curabitur ullamcorper ornare ipsum, et porttitor purus hendrerit id. Phasellus nec magna egestas turpis ornare sodales sit amet ac dolor. Phasellus non aliquet nisl.</p>


                <p class={styles.p}>Nullam sem orci, consequat vitae justo vitae, varius sodales odio. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Praesent nisi massa, tincidunt et sapien in, maximus dapibus leo. Aliquam id pulvinar turpis, ut condimentum est. Maecenas pellentesque mi quis arcu ornare sollicitudin. Nunc volutpat at metus ut tincidunt. Duis efficitur lobortis ex non placerat. Morbi non elit et massa porttitor tempor ac tincidunt erat. Ut a sapien efficitur, elementum ligula vitae, aliquam quam. Duis condimentum massa ut condimentum ullamcorper. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur placerat dictum nisi quis egestas. Nunc euismod, urna eget aliquam aliquam, odio purus euismod metus, sed vulputate dui arcu sed lacus. Quisque aliquet iaculis felis in volutpat. Sed non aliquam felis, sit amet feugiat nisl. Praesent ultricies nibh id sem vestibulum ullamcorper.</p>

                <p class={styles.p}>
                Duis non volutpat odio. Nullam non viverra risus. Pellentesque eget tristique urna, sit amet imperdiet mi. Pellentesque eu posuere risus, in gravida purus. Cras sem lacus, ornare pulvinar libero non, aliquet placerat tortor. Integer vitae gravida tellus. Nam id tristique lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce sit amet lectus suscipit, pellentesque nisl a, tristique quam. Praesent tempor hendrerit sem eget porta. Curabitur blandit quis erat id tincidunt. Etiam sed dui nisl. Mauris vitae neque eget magna tincidunt efficitur eget id tortor. Proin maximus eu mi vel sollicitudin.</p>

                <hr class={styles.hr}/>
            </div>

            <div class={styles.footerArticles}>
                <p class={styles.p}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
            </div>
            <div>

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