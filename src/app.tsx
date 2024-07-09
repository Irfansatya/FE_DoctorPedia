import type { Component } from 'solid-js';
import { Link, useRoutes, useLocation } from '@solidjs/router';
// import Auth from "./Login";
// import DataFetcher from "./components/DataFetcher";
import { username } from './components/store.js';
import { routes } from './routes';
import styles from './app.module.css';
import UserGrid from './components/usergrid.jsx';

const app: Component = () => {
  const location = useLocation();
  const Route = useRoutes(routes);
  
  

  return (
    <>
      <nav class={styles.navbar}>
        <ul class="flex items-center">
          <li class="py-2 px-4">
            <Link href="/" class="no-underline hover:underline">
              Home
            </Link>
          </li>
          <li class="py-2 px-4">
            <Link href="/about" class="no-underline hover:underline">
              About
            </Link>
          </li>
          <li class="py-2 px-4">
            <Link href="/error" class="no-underline hover:underline">
              Error
            </Link>
          </li>
          <li class="py-2 px-4">
            <Link href="/login" class="no-underline hover:underline">
              Login
            </Link>
          </li>

          <li class={`text-sm flex items-center space-x-1 ml-auto ${styles.urlDisplay}`}>
            <span>URL:</span>
            <input
              class="w-75px p-1 bg-white text-sm rounded-lg"
              type="text"
              readOnly
              value={location.pathname}
            />
          </li>
        </ul>
        <li class="py-2 px-4 ml-auto">
            <span>Selamat Datang, {username()}!</span>
          </li>
      </nav>

      <main>
        <Route />
      </main> 
    </>
  );
};

export default app;
