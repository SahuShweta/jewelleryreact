import logo from './logo.svg';
import './App.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
import {Routes,Route} from 'react-router';
import Fringes from './components/Fringes';
import Jsr from './components/Jsr';
import Ranchi from './components/Ranchi';
import Account from './components/Account';
import CreateAccount from './components/CreateAccount';
import Payment from './components/Payment';
import Category from './components/Category';
import New from './components/New';
import Gender from './components/Gender';
// import Register from './components/Register';
import AddProduct from './components/AddProduct';
import Login from './components/Login';
import Register from './components/Register';
import Address from './components/Address';
import Trial from './components/Trial';
import AccountDetails from './components/AccountDetails';
import Star from './components/Star';
import Wishlist from './components/Wishlist';
import AddCategory from './components/AddCategory';
import AdminDashboard from './components/AdminDashboard';
import AdminProducts from './components/AdminProducts';
import AllProducts from './components/AllProducts';
import Carts from './components/Carts';
import Products from './components/Products';









function App() {
  return (
    <div>
      <Header></Header>
    {/* <Home></Home> */}
    <Routes>
      <Route path="" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/fringes" element={<Fringes/>}/>
      <Route path="/Jsr" element={<Jsr/>}/>
      <Route path="/Products/:productId" element={<Products/>} /> 
      <Route path="/Category/:categoryName" element={<Category/>} />

      <Route path="/ranchi" element={<Ranchi />} />
      <Route path="/Account" element={<Account/>} />
      <Route path="/CreateAccount" element={<CreateAccount/>} />
      <Route path="/Payment" element={<Payment/>} />
      <Route path="/New" element={<New/>} />
      <Route path="/Gender/:GenderName" element={<Gender/>} />
      {/* <Route path="/Register" element={<Register/>} /> */}
      <Route path="/AddProduct" element={<AddProduct/>} />
      <Route path="/Login" element={<Login/>} />
      <Route path="/Register" element={<Register/>} />
      <Route path="/Address" element={<Address/>} />
       <Route path="/Trial" element={<Trial/>} /> 
      <Route path="/AccountDetails" element={<AccountDetails/>} />
      <Route path="/Star" element={<Star/>} />
      <Route path="/Wishlist" element={<Wishlist/>} />
      <Route path="/AddCategory" element={<AddCategory/>} />
      <Route path="/AdminProducts" element={<AdminProducts/>} />
      <Route path="/AdminDashboard" element={<AdminDashboard/>} />
      <Route path="/AllProducts" element={<AllProducts/>} />
      <Route path="/Carts" element={<Carts/>} />







      <Route path="*" element={<Home/>}/>
    </Routes>
      <Footer></Footer>
    </div>

  );
}

export default App;
