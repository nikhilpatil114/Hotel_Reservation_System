import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AuthPage from './AuthPage';
import Admin from './Admin';
import Customer from './Customer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AuthPage/>}/>
              <Route path="/admin" element={<Admin/>}/>  
              <Route path="/customer" element={<Customer/>}/> 
            
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
