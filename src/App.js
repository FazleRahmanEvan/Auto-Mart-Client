
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
import Product from './Pages/Home/Product';
import NotFound from './Pages/Shared/NotFound';
import MyPortfolio from './Portfolio/MyPortfolio';
import Blog from './Blog/Blog';
import Users from './Pages/Dashboard/Users';
import Footer from './Pages/Shared/Footer';
import RequireAdmin from './Pages/Login/RequireAdmin';
import AddProduct from './Pages/Dashboard/AddProduct';

function App() {
  return (
    <div className=''>
         <Navbar></Navbar>
         <Routes>
           <Route path="/" element ={<Home></Home>}></Route>
           <Route path="/parts" element={<Product></Product>}></Route>
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
              <Route path="user" element={<RequireAdmin><Users></Users></RequireAdmin>}></Route>
              <Route path="addproduct" element={<RequireAdmin><AddProduct></AddProduct></RequireAdmin>}></Route>
            </Route>  
           <Route path="login" element={<Login/>} />
           <Route path="signup" element={<SignUp/>} />
           <Route path="blog" element={<Blog></Blog>}></Route>
           <Route path='portfolio' element={<MyPortfolio></MyPortfolio>}></Route>
           
           <Route path="*" element={<NotFound></NotFound>}></Route>
         </Routes>
         <Footer></Footer>
    </div>
  );
}

export default App;
