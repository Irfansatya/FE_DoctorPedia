import { render } from 'solid-js/web';
import { Router, Routes, Route } from '@solidjs/router';

import App from './app';
import Login from './Login';
import DocterSignUp from './docterSignUp';
import UserSignUp from './SignUp';

import CreateAppointment from './janjiCreate/janjiCreate';
import Article from './Article/Articles';
import LandingPage from './landingpage';
import HomePage from './HomePage';
import AccountManaging from './ag - Grid/agGridCreate';
import Tester2 from './tester2';
import HospitalCRUD from './hospitalDetailCRUD/hospitalCRUD';





import './index.css';


render(
  () => (
    <Router>
      <Routes>
        <Route path="/coy" component={App} />
        <Route path="/login" component={Login} />
        <Route path="/docter-signup" component={DocterSignUp} />
        <Route path="/user-signup" component={UserSignUp} />
        <Route path="/hospitalmanage" component={HospitalCRUD} />
        <Route path="/appointment" component={CreateAppointment} />
        <Route path="/" component={LandingPage} />
        <Route path="/homepage" component={HomePage} />
        <Route path="/article" component={Article} />
{/* 
        <Route path="/HoshizoraNiNaru" component={HitoWaMinaTachimaruKedo} /> */}
        <Route path="/account-manage" component={AccountManaging} />
        <Route path="/tester2" component={Tester2} />
      </Routes>
    </Router>
  ),
  document.getElementById('root') as HTMLElement
);
