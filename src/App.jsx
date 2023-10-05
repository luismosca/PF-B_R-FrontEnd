import { Route, Routes } from 'react-router-dom';
import './App.css';
import LandingPage from './Components/LandingPage/LandingPage';
import Home from './Components/HomePage/HomePage';
import Detail from './Components/Detail/Detail';
import Login from './Components/LoginForm/LoginForm';
import Registro from './Components/RegisterForm/RegisterForm';
import Reporte from './Components/ReportForm/ReportForm';
import Cards from './Components/Cards/Cards';
import Profile from './Components/Profile/Profile';
import About from './Components/About/About';
import Donations from './Components/Donations/Donations';
import TableDonation from './Components/Donationstable/Table';
import TableUser from './Components/DonationTableUser/TableUser';

import AdminPanel from './Components/AdminPanel/AdminPanel';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getToken, setToken } from './auth-helpers/auth-helpers';
import { getUserByToken } from './Redux/actions';

function App() {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!user?.email) {
      let token = getToken();
      if (token != '') {
        dispatch(getUserByToken(token));
      }
    }
  }, [user]);

  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registro" element={<Registro />} />
        <Route path="/reporte" element={<Reporte />} />
        <Route path="/cards" element={<Cards />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/ByR" element={<About />} />
        <Route
          path="/donacion"
          element={<Donations totalValue={'5'} invoice={'taza de Cafe'} />}
        />
        <Route path="/tabla" element={<TableDonation />} />
        <Route path="/tabla/user" element={<TableUser />} />
        <Route path="/admin" element={<AdminPanel />} />
      </Routes>
    </div>
  );
}

export default App;
