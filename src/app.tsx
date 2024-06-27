import { Component } from "solid-js";
import "./app.module.css"; // Import your CSS
import { Link, useRoutes, useLocation } from '@solidjs/router';

import { routes } from './routes';

const App: Component = () => {
  const location = useLocation();
  const Route = useRoutes(routes);



  return (
    <div class="container">
      <header>
        <div class="logo">
          <img src="./assets/images/logo.svg" alt="Web 3 logo icon" />
        </div>
        
        <nav data-visible="false">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>  <Link href="/login" class="no-underline hover:underline">
                  Login
            </Link></li>
          </ul>
        </nav>

        <button aria-expanded="false" class="mobile_navigation" aria-label="open"></button>
      </header>
      <main>
        <section>
          <div class="col_one">
            <picture>
              <source media="(min-width:60rem)" srcset="./assets/images/image-web-3-desktop.jpg" />
              <img src="./assets/images/image-web-3-mobile.jpg" alt="a colorful hero" />
            </picture>
            <div class="col_flex">
              <h1>The Bright Future of Web 3.0?</h1>
              <div class="spc_top">
                <p class="grey">
                  We dive into the next evolution of the web that claims to put the power of the platforms
                  back into the hands of the people. But is it really fulfilling its promise?
                </p>
                <a href="#" class="read">READ MORE</a>
              </div>
            </div>
          </div>
          <div class="col_two">
            <h2>New</h2>
            <article class="col_space">
              <h3>Hydrogen VS Electric Cars</h3>
              <p class="grey">Will hydrogen-fueled cars ever catch up to EVs</p>
            </article>
            <article class="col_space">
              <h3>The Downsides of AI Artistry</h3>
              <p class="grey">What are the possible adverse effects of on-demand AI image generation?</p>
            </article>
            <article class="col_top">
              <h3>Is VC Funding Drying Up?</h3>
              <p class="grey">Private funding by VC firms is down 50% YOY. We take a look at what that means.</p>
            </article>
          </div>
        </section>
        <aside>
          <article class="flex">
            <img src="./assets/images/image-retro-pcs.jpg" alt="Retro PCs" />
            <div>
              <h4>01</h4>
              <h5>Reviving Retro PCs</h5>
              <p class="grey">What happens when old PCs are given modern upgrades?</p>
            </div>
          </article>
          <article class="flex">
            <img src="./assets/images/image-top-laptops.jpg" alt="top Laptops" />
            <div>
              <h4>02</h4>
              <h5>Top 10 Laptops of 2022</h5>
              <p class="grey">Our best picks for various needs and budgets.</p>
            </div>
          </article>
          <article class="flex">
            <img src="./assets/images/image-gaming-growth.jpg" alt="Game pad" />
            <div>
              <h4>03</h4>
              <h5>The Growth of Gaming</h5>
              <p class="grey">How the pandemic has sparked fresh opportunities.</p>
            </div>
          </article>
        </aside>
      </main>
      <footer class="attribution">
        <p>
          Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
          Coded by <a href="#">Ibimina</a>.
        </p>
      </footer>
    </div>
  );
};

export default App;
