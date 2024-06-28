import { render } from 'solid-js/web';
import { Router, Routes, Route } from '@solidjs/router';

import App from './app';
import Login from './Login';
import DocterSignUp from './docterSignUp';
import UserSignUp from './SignUp';



import './index.css';

render(
  () => (
    <Router>
      <Routes>
        <Route path="/" component={App} />
        <Route path="/login" component={Login} />
        <Route path="/docter-signup" component={DocterSignUp} />
        <Route path="/user-signup" component={UserSignUp} />
      </Routes>
    </Router>
  ),
  document.getElementById('root') as HTMLElement
);
