import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import ForgotPassword from './components/layouts/ForgotPassword';
import Home from './pages/Home';
import LandingPage from './components/layouts/LandingPage';
import NewTask from './pages/NewTask';
import Notifications from './pages/Notifications';
import Profile from './components/ui/Profile';
import SignIn from './components/ui/SignIn';
import SignUp from './components/ui/SignUp';
import Workspaces from './pages/Workspaces';

// import HomePage from './components/layouts/HomePage';

// import Layouts from './components/layouts/Layouts';

// import MainNavigation from './components/layouts/MainNavigation';
// function HomePageNav() {
//   let { userId } = useParams();
// }

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/home" element={<Home />} />
          <Route path="/workspaces" element={<Workspaces />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/new-task" element={<NewTask />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
