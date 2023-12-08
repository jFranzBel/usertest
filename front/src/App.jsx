import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Register from './components/auth/Register';
import Login from './components/auth/Login.jsx';

function App() {
     return (
          <Router>
               <Routes>
                    <Route path="/register" element={<Register />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/" element={<Home />} />
               </Routes>
          </Router>
     );
}

export default App;


