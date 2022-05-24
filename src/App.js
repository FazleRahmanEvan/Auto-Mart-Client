
import './App.css';
import Navbar from './Pages/Shared/Navbar';
import { Routes, Route, Link } from "react-router-dom";
import Home from './Pages/Home/Home';

function App() {
  return (
    <div className='px-5'>
         <Navbar></Navbar>
         <Routes>
           <Route path="/" element ={<Home></Home>}></Route>
         
         </Routes>
    </div>
  );
}

export default App;
