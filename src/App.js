import './App.css';
import { Outlet} from 'react-router-dom';
import  Navbar  from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import { useEffect } from 'react';
import {useDispatch} from 'react-redux';
import { getStaff } from './components/staff/staffSlice';


function App() {
 const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getStaff());
  }, [])

  return (
    <div className="App">
      <Navbar/>
      <Outlet/>
      <Footer/>
    </div>
  );
}

export default App;
