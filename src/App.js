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
import Buypage from './components/Buypage';
import Ranchi from './components/Ranchi';
import Login from './components/Login';
import Account from './components/Account';
import CreateAccount from './components/CreateAccount';
import Payment from './components/Payment';
import Category from './components/Category';
import Earrings from './components/Earrings';
import New from './components/New';
import Gender from './components/Gender';








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
      <Route path="/Buypage/:productId" element={<Buypage/>} />
      <Route path="/Category/:categoryName" element={<Category/>} />

      <Route path="/ranchi" element={<Ranchi />} />
      <Route path="/Login" element={<Login/>} />
      <Route path="/Account" element={<Account/>} />
      <Route path="/CreateAccount" element={<CreateAccount/>} />
      <Route path="/Payment" element={<Payment/>} />
      {/* <Route path="/Earrings" element={<Earrings/>} /> */}
      <Route path="/New" element={<New/>} />
      <Route path="/Gender/:GenderName" element={<Gender/>} />







      <Route path="*" element={<Home/>}/>
    </Routes>
      <Footer></Footer>
    </div>

  );
}

export default App;
