import { BrowserRouter as Router} from 'react-router-dom';
import {Routes, Route} from 'react-router-dom';
import LoginPage from './components/LoginPage';
import SignupPage from './components/SignupPage';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';

function App() {
  return (
    

      <div>
        <Navbar/>
        <section>                              
            <Routes>  
               
               <Route path="/" element={<LoginPage/>}/>
               {/* <Route path="/" element={<SignupPage/>}/> */}
               <Route path="/dashboard" element={<Dashboard/>}/>
            </Routes>                    
        </section>
      </div>
      
    
  );
}

export default App;
