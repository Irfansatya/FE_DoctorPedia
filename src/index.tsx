import { render } from 'solid-js/web';
import { Router, Routes, Route } from '@solidjs/router';

import Login from './loginPage/Login';
import SignUpUser from './signup/SignUp';
import SignUpDocter from './SignDoctor/docterSignUp';
import HomePage from './homepage-Page/HomePage';
import LandingPage from './landingpage-Page/landingpage';
import Artikel from './articlePage/Articles';
import UserProfile from './profile/Profile';


import CreateAppointment from './Ag-Grid/appointmentCreate/appointmentCreate';
import appointmentCRUD from './Ag-Grid/appointmentCRUD/appointmentCRUD';
import AppointmentShow from './Ag-Grid/appointmentShow/AppointmentShow';
import userManaging from './user-Managing/userManaging';
import test from './testingPage/MyGrid';





import './index.css';


render(
  () => (
    <Router>
      <Routes>

      <Route path="/" component={LandingPage} />
      <Route path="/Login" component={Login} />
      <Route path="/user-signup" component={SignUpUser} />
      <Route path="/doctor-signup" component={SignUpDocter} />
      <Route path="/user-managing" component={userManaging}/>
      <Route path="/Homepage" component={HomePage}/>
      <Route path="/Artikel" component={Artikel}/>

      <Route path="/crate-Appointment" component={CreateAppointment}/>
      <Route path="/Appointment-CRUD" component={appointmentCRUD}/>
      <Route path="/Appointment-Show" component={AppointmentShow}/>
      <Route path="/profile" component={UserProfile} />
{/* 
        <Route path="/HoshizoraNiNaru" component={HitoWaMinaTachimaruKedo} /> */}
        <Route path="/tester2" component={test} />
      </Routes>
    </Router>
  ),
  document.getElementById('root') as HTMLElement
);
