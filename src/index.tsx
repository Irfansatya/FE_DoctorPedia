import { render } from 'solid-js/web';
import { Router, Routes, Route } from '@solidjs/router';

import App from './app';
import Login from './Login';
import DocterSignUp from './docterSignUp';
import UserSignUp from './SignUp';
import HitoWaMinaTachimaruKedo from './components/DataFetcher';
import LoginTest from './loginTest';




import './index.css';

render(
  () => (
    <Router>
      <Routes>
        <Route path="/" component={App} />
        <Route path="/login" component={Login} />
        <Route path="/docter-signup" component={DocterSignUp} />
        <Route path="/user-signup" component={UserSignUp} />
        <Route path="/HoshizoraNiNaru" component={HitoWaMinaTachimaruKedo} />
        <Route path="/logintest" component={LoginTest} />
      </Routes>
    </Router>
  ),
  document.getElementById('root') as HTMLElement
);
