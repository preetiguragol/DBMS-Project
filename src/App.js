import { BrowserRouter as Router} from 'react-router-dom';
import {Routes, Route} from 'react-router-dom';
import LoginPage from './components/LoginPage';
import SignupPage from './components/SignupPage';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import PaymentSuccessPage from './components/PaymentSuccessPage';
function App() {
  return (
    

      <div>
        <Navbar/>
        <section>                              
            <Routes>  
               
               <Route path="/" element={<LoginPage/>}/>
               {/* <Route path="/" element={<SignupPage/>}/> */}
               <Route path="/dashboard" element={<Dashboard/>}/>
               <Route path="/payment-success" element={<PaymentSuccessPage />} />
            </Routes>                    
        </section>
      </div>
      
    
  );
}

export default App;
