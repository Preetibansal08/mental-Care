import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import MemoryGame from './pages/games/MemoryGame';
import StroopTest from './pages/games/StroopTest';
import BreathingExercise from './pages/games/BreathingExercise';
import ReactionTest from './pages/games/ReactionTest';
import PHQ9Quiz from './pages/games/PHQ9Quiz';

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="pt-16"> {/* Offset for fixed navbar */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          
          {/* Game Routes */}
          <Route path="/games/memory" element={<MemoryGame />} />
          <Route path="/games/stroop" element={<StroopTest />} />
          <Route path="/games/breathing" element={<BreathingExercise />} />
          <Route path="/games/reaction" element={<ReactionTest />} />
          <Route path="/games/phq9" element={<PHQ9Quiz />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}