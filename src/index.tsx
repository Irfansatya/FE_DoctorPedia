/* @refresh reload */
import './index.css';
import { render } from 'solid-js/web';
import { Router, Routes, Route  } from '@solidjs/router';


import LandingPage from './landingpage-Page/landingpage';
import Login from './login/Login';
import SignUpUser from './signup/SignUp';
import userManaging from './user-Managing/userManaging';
import HomePage from './homepage-Page/HomePage';
import Artikel from './articlePage/Articles';

import CreateAppointment from './AgGrid/appointmentCreate/appointmentCreate';
import appointmentCRUD from './AgGrid/appointmentCRUD/appointmentCRUD';
import AppointmentShow from './AgGrid/appointmentShow/AppointmentShow';


const root = document.getElementById('root');

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
  throw new Error(
    'Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got misspelled?',
  );
}

render(
  () => (
    <Router>
      <Routes>
      <Route path="/" component={LandingPage} />
      <Route path="/Login" component={Login} />
      <Route path="/user-signup" component={SignUpUser} />
      <Route path="/user-managing" component={userManaging}/>
      <Route path="/Homepage" component={HomePage}/>
      <Route path="/Artikel" component={Artikel}/>

      <Route path="/crate-Appointment" component={CreateAppointment}/>
      <Route path="/Appointment-CRUD" component={appointmentCRUD}/>
      <Route path="/Appointment-Show" component={AppointmentShow}/>
      </Routes>
    </Router>
  ),
  root,
);
