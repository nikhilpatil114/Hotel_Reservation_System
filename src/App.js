import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AuthPage from './Components/AuthPage';
import Admin from './Pages/Admin';
import Customer from './Pages/Customer';
import Booking from './Components/Booking';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AuthPage/>}/>
              <Route path="/admin" element={<Admin/>}/>  
              <Route path="/customer" element={<Customer/>}/> 
              <Route path="/customer/booking" element={<Booking/>}/>
            
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
