import { render } from 'solid-js/web';
import { Router, Routes, Route } from '@solidjs/router';

import App from './app';
import Login from './Login';
import DoctorSignUp from './DoctorSignUp';


import './index.css';

render(
  () => (
    <Router>
      <Routes>
        <Route path="/" component={App} />
        <Route path="/login" component={Login} />
        <Route path="/doctor-signup" component={DoctorSignUp} />
      </Routes>
    </Router>
  ),
  document.getElementById('root') as HTMLElement
);
