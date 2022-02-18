import { BrowserRouter as Router, Routes, Route, /*Link*/ } from 'react-router-dom';
import Home from './pages/Home';
import './App.css';
import { GlobalProvider } from './Context';
import Login from './pages/Login';
import Players from './pages/Players';
import Register from './pages/Register';
import Organizers from './pages/Organizers';
import FindPlayers from './pages/FindPlayers'
import FindClubs from './pages/FindClubs';
import Messages from './pages/Messages';
import Profile from './pages/Profile';
import Newsfeed from './pages/Newsfeed'

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
            <Route path="findplayer" element={<FindPlayers/>}/>
            <Route path="findclub" element={<FindClubs/>}/>
            <Route path="/messages" element={<Messages/>}/>
            <Route path="/profile" element={<Profile/>}/>
            <Route path="/newsfeed" element={<Newsfeed/>}/>
          </Routes>
        </Router>
    </GlobalProvider>
  );
}

export default App;
