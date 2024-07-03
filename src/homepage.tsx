// import { Component } from "solid-js";
// import { Link, useRoutes, useLocation } from "@solidjs/router";
// import { routes } from "./routes";
// import styles from "./homepage.module.css"; // Import the CSS module

// const HomePage: Component = () => {
//   const location = useLocation();
//   const Route = useRoutes(routes);

//   return (



    
//     // INI NAVBAR

//     <div class={`${styles.container} ${styles.homepage}`}>
//       <header>
//         <div class="logo">
//           {/* <img src="./assets/images/logo.svg" alt="Web 3 logo icon" /> */}
//           <h1>DoctorPedia</h1>
//         </div>
//         <nav data-visible="false">
//           <ul>
//             <li>Home</li>
//             <li>New</li>
//             <li>Popular</li>
//             <li>Trending</li>
//             <li>Categories</li>
//           </ul>
//         </nav>
//         <button aria-expanded="false" class={styles.mobile_navigation} aria-label="open"></button>
//       </header>
      

      


//       {/* DIBAWAH IMAGE, KOLOM KIRI */}
//       <main>
//         <section>





//           {/* DIBAWAH IMAGE, KOLOM KIRI */}
//           <div class={`${styles.container} ${styles.homepage} ${styles.col_one}`}>
//             <picture>
//               <source media="(min-width:60rem)" srcset="./assets/images/image-web-3-desktop.jpg" />
//               <img src="./assets/images/image-web-3-mobile.jpg" alt="a colorful hero" />
//             </picture>
//             <div class={styles.col_flex}>
//               <h1>The Bright Future of Web 3.0?</h1>
//               <div class="spc_top">
//                 <p class={styles.grey}>
//                   We dive into the next evolution of the web that claims to put the power of the platforms
//                   back into the hands of the people. But is it really fulfilling its promise?
//                 </p>
//                 <a href="#" class={styles.read}>READ MORE</a>
//               </div>
//             </div>
//           </div>




//           {/* KOLOM KANAN */}
//           <div class={`${styles.container} ${styles.homepage} ${styles.col_two}`}>
//             <h2>New</h2>
//             <article class={styles.col_space}>
//               <h3>Hydrogen VS Electric Cars</h3>
//               <p class={styles.grey}>Will hydrogen-fueled cars ever catch up to EVs?</p>
//             </article>
//             <article class={styles.col_space}>
//               <h3>The Downsides of AI Artistry</h3>
//               <p class={styles.grey}>What are the possible adverse effects of on-demand AI image generation?</p>
//             </article>
//             <article class={styles.col_top}>
//               <h3>Is VC Funding Drying Up?</h3>
//               <p class={styles.grey}>Private funding by VC firms is down 50% YOY. We take a look at what that means.</p>
//             </article>
//           </div>
//         </section>




//         {/* DIBAWAH KEDUA SECTION */}
//         <aside class={`${styles.container} ${styles.homepage}`}>
//           <article class={styles.flex}>
//             <img src="dist\assets\Homepage.asset\tester 1.png" alt="Retro PCs" />
//             <div>
//               <h4>01</h4>
//               <h5>Daftar akun</h5>
//               <p class={styles.grey}>What happens when old PCs are given modern upgrades?</p>
//             </div>
//           </article>
//           <article class={styles.flex}>
//             <img src="dist\assets\Homepage.asset\tester 2.png" alt="top Laptops" />
//             <div>
//               <h4>02</h4>
//               <h5>Membuat Janji</h5>
//               <p class={styles.grey}>Our best picks for various needs and budgets.</p>
//             </div>
//           </article>
//           <article class={styles.flex}>
//             <img src="dist\assets\Homepage.asset\tester 3.png" alt="Game pad" />
//             <div>
//               <h4>03</h4>
//               <h5></h5>
//               <p class={styles.grey}>How the pandemic has sparked fresh opportunities.</p>
//             </div>
//           </article>
//         </aside>
//       </main>




//       {/* FOOTER */}


//       <footer class={`${styles.attributiorz} ${styles.homepage}`}>
//         <p>
//           Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
//           Coded by <a href="#">Ibimina</a>.
//         </p>
//       </footer>
//     </div>
//   );
// };

// export default HomePage;

import { Component } from "solid-js";
import { Link, useRoutes, useLocation } from "@solidjs/router";
import { routes } from "./routes";
import styles from "./homepage.module.css"; // Import the CSS module

const HomePage: Component = () => {
  const location = useLocation();
  const Route = useRoutes(routes);

  return (
    <div class={`${styles.container} ${styles.homepage} homepage`}> {/* Add 'homepage' class */}
      <header>
        <div class="logo">
          <h1>DoctorPedia</h1>
        </div>
        <nav data-visible="false">
          <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/new">New</Link></li>
            <li><Link href="/popular">Popular</Link></li>
            <li><Link href="/trending">Trending</Link></li>
            <li><Link href="/categories">Categories</Link></li>
          </ul>
        </nav>
        <button aria-expanded="false" class={styles.mobile_navigation} aria-label="open"></button>
      </header>

      <main>
        <section>
          <div class={`${styles.container} ${styles.col_one}`}>
            <picture>
              <source media="(min-width:60rem)" srcset="./assets/images/image-web-3-desktop.jpg" />
              <img src="./assets/images/image-web-3-mobile.jpg" alt="a colorful hero" />
            </picture>
            <div class={styles.col_flex}>
              <h1 class={styles.homepage}>The Bright Future of Web 3.0?</h1>
              <div class="spc_top">
                <p class={styles.grey}>
                  We dive into the next evolution of the web that claims to put the power of the platforms
                  back into the hands of the people. But is it really fulfilling its promise?
                </p>
                <a href="#" class={styles.read}>READ MORE</a>
              </div>
            </div>
          </div>

          <div class={`${styles.container} ${styles.col_two}`}>
            <h2>New</h2>
            <article class={styles.col_space}>
              <h3>Hydrogen VS Electric Cars</h3>
              <p class={styles.grey}>Will hydrogen-fueled cars ever catch up to EVs?</p>
            </article>
            <article class={styles.col_space}>
              <h3>The Downsides of AI Artistry</h3>
              <p class={styles.grey}>What are the possible adverse effects of on-demand AI image generation?</p>
            </article>
            <article class={styles.col_top}>
              <h3>Is VC Funding Drying Up?</h3>
              <p class={styles.grey}>Private funding by VC firms is down 50% YOY. We take a look at what that means.</p>
            </article>
          </div>
        </section>

        <aside class={`${styles.container} ${styles.homepage}`}>
          <article class={styles.flex}>
            <img src="dist/assets/Homepage.asset/tester 1.png" alt="Retro PCs" />
            <div>
              <h4>01</h4>
              <h5>Daftar akun</h5>
              <p class={styles.grey}>What happens when old PCs are given modern upgrades?</p>
            </div>
          </article>
          <article class={styles.flex}>
            <img src="dist/assets/Homepage.asset/tester 2.png" alt="Top Laptops" />
            <div>
              <h4>02</h4>
              <h5>Membuat Janji</h5>
              <p class={styles.grey}>Our best picks for various needs and budgets.</p>
            </div>
          </article>
          <article class={styles.flex}>
            <img src="dist/assets/Homepage.asset/tester 3.png" alt="Game pad" />
            <div>
              <h4>03</h4>
              <h5></h5>
              <p class={styles.grey}>How the pandemic has sparked fresh opportunities.</p>
            </div>
          </article>
        </aside>
      </main>

      <footer class={`${styles.attribution} ${styles.homepage}`}>
        <p>
          Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
          Coded by <a href="#">Ibimina</a>.
        </p>
      </footer>
    </div>
  );
};

export default HomePage;

