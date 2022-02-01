import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import './App.css';
import { GlobalProvider } from './Context';
import Login from './pages/Login';
import Players from './pages/Players';
import Register from './pages/Register';
import Organizers from './pages/Organizers';
import FindPlayers from './pages/FindPlayers'

function App() {
  return (
    <GlobalProvider>
          <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="players" element={<Players/>}/>
            <Route path="organizers" element={<Organizers/>}/>
            <Route path="findPlayers" element={<FindPlayers/>}/>
          </Routes>
        </Router>
    </GlobalProvider>
  );
}

export default App;
