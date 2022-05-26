
import './App.css';
import Navbar from './Pages/Shared/Navbar';
import { Routes, Route, Link } from "react-router-dom";
import Home from './Pages/Home/Home';
import Purchase from './Pages/Purchase/Purchase';
import Login from './Pages/Login/Login';
import SignUp from './Pages/Login/SignUp';
import RequireAuth from './Pages/Login/RequireAuth';
import Dashboard from './Pages/Dashboard/Dashboard';
import MyOrders from './Pages/Dashboard/MyOrders';
import Review from './Pages/Dashboard/Review';

function App() {
  return (
    <div className='px-5'>
         <Navbar></Navbar>
         <Routes>
           <Route path="/" element ={<Home></Home>}></Route>
           <Route path="/product/:productId" element={
           <RequireAuth>
             <Purchase>
             </Purchase>
             </RequireAuth> 
            }/>
           <Route path="/dashboard" element={
           <RequireAuth>
             <Dashboard></Dashboard>
             </RequireAuth> 
            }>
              <Route index element={<MyOrders></MyOrders>}></Route>
              <Route path="review" element={<Review></Review>}></Route>
            </Route>  
           <Route path="login" element={<Login/>} />
           <Route path="signup" element={<SignUp/>} />
         </Routes>
    </div>
  );
}

export default App;
