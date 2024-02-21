import { BrowserRouter as Router} from 'react-router-dom';
import {Routes, Route} from 'react-router-dom';
import LoginPage from './components/LoginPage';
import SignupPage from './components/SignupPage';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import PaymentSuccessPage from './components/PaymentSuccessPage';
import PrepaidPage from './components/PrepaidPage';
import PostpaidPage from './components/PostpaidPage';
import DTHPage from './components/DTHPage';
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
               <Route path="/prepaid" element={<PrepaidPage/>} />
               <Route path="/postpaid" element={<PostpaidPage/>} />
               <Route path="/dth" element={<DTHPage/>} />
            </Routes>                    
        </section>
      </div>
      
    
  );
}

export default App;
