import { render } from 'solid-js/web';
import { Router, Routes, Route } from '@solidjs/router';

import App from './app';
import Login from './Login';
import DocterSignUp from './docterSignUp';
import UserSignUp from './SignUp';

import CreateAppointment from './janjiCreate/janjiCreate';
import CRUDAppointment from './JanjiCRUD/janjiCRUD';
import Article from './Article/Articles';
import LandingPage from './landingpage';
import HomePage from './HomePage';
import AccountManaging from './ag - Grid/agGridCreate';
import test from './testingPage/MyGrid';
import AppointmentShow from './janjiShow/janjiShow';





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
