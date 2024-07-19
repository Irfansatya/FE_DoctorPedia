import { render } from 'solid-js/web';
import { Router, Routes, Route } from '@solidjs/router';

import App from './app';
import Login from './loginPage/Login';
import DocterSignUp from './docterSignUp';
import UserSignUp from './SignUp';

import CreateAppointment from './appointmentCreate/appointmentCreate';
import CRUDAppointment from './appointmentCRUD/appointmentCRUD';
import Article from './articlePage/Articles';
import LandingPage from './landingpage-Page/landingpage';
import HomePage from './homepage-Page/HomePage';
import AccountManaging from './user-Managing/userManaging';
import test from './testingPage/MyGrid';
import AppointmentShow from './appointmentShow/AppointmentShow';





import './index.css';


render(
  () => (
    <Router>
      <Routes>
        <Route path="/coy" component={App} />
        <Route path="/login" component={Login} />
        <Route path="/docter-signup" component={DocterSignUp} />
        <Route path="/user-signup" component={UserSignUp} />
        <Route path="/appointmentShow" component={AppointmentShow} />
        <Route path="/appointment" component={CreateAppointment} />
        <Route path="/CRUDappointment" component={CRUDAppointment} />
        <Route path="/" component={LandingPage} />
        <Route path="/homepage" component={HomePage} />
        <Route path="/article" component={Article} />
{/* 
        <Route path="/HoshizoraNiNaru" component={HitoWaMinaTachimaruKedo} /> */}
        <Route path="/account-manage" component={AccountManaging} />
        <Route path="/tester2" component={test} />
      </Routes>
    </Router>
  ),
  document.getElementById('root') as HTMLElement
);
