import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import './App.css';
import { GlobalProvider } from './Context';

function App() {
  return (
    <GlobalProvider>
          <Router>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </Router>
    </GlobalProvider>
  );
}

export default App;
