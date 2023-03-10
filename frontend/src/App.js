import './App.css';
import NavBar from './components/NavBar';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddSalesEntry from './pages/AddSalesEntry';
import Top5Sales from './pages/Top5Sales';
import TotalRevenue from './pages/TotalRevenue';
import Login from './pages/Login';
import Registration from './pages/Registration';

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<AddSalesEntry />} ></Route>
          <Route path='/top5sales' element={<Top5Sales />} ></Route>
          <Route path='/totalrevenue' element={<TotalRevenue />} ></Route>
          <Route path='/login' element={<Login />} ></Route>
          <Route path='/signup' element={<Registration />} ></Route>
          {/* <Route path='/logout' element={<Logout />} ></Route> */}
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
