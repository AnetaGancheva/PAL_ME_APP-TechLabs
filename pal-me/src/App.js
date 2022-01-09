import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import './App.css';
import { GlobalProvider } from './Context';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {
  return (
    <GlobalProvider>
          <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </Router>
    </GlobalProvider>
  );
}

export default App;
