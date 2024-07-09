import { render } from 'solid-js/web';
import { Router, Routes, Route } from '@solidjs/router';

import App from './app';
import Login from './Login';
import DocterSignUp from './docterSignUp';
import UserSignUp from './SignUp';
import HitoWaMinaTachimaruKedo from './components/DataFetcher';
import LandingPage from './landingpage';
import HomePage from './HomePage'
import Tester1 from './ag - Grid/agGridCreate';
import Tester2 from './HomePageTapiBuatRoleLain';





import './index.css';
import HomePageTapiBuatRoleLain from './HomePageTapiBuatRoleLain';

render(
  () => (
    <Router>
      <Routes>
        <Route path="/coy" component={App} />
        <Route path="/login" component={Login} />
        <Route path="/docter-signup" component={DocterSignUp} />
        <Route path="/user-signup" component={UserSignUp} />

        <Route path="/" component={LandingPage} />
        <Route path="/homepage" component={HomePage} />
        <Route path="/HomePageTapiBuatRoleLain" component={HomePageTapiBuatRoleLain} />
        <Route path="/HoshizoraNiNaru" component={HitoWaMinaTachimaruKedo} />
        <Route path="/tester1" component={Tester1} />
        <Route path="/tester2" component={Tester2} />
      </Routes>
    </Router>
  ),
  document.getElementById('root') as HTMLElement
);
