import React, { useState, useEffect } from 'react';

const BreathingExercise = () => {
  const [phase, setPhase] = useState('inhale');
  const [timer, setTimer] = useState(4);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    if (isRunning && timer > 0) {
      const interval = setInterval(() => setTimer(t => t - 1), 1000);
      return () => clearInterval(interval);
    } else if (timer === 0) {
      setPhase(prev => {
        if (prev === 'inhale') return 'hold';
        if (prev === 'hold') return 'exhale';
        if (prev === 'exhale') return 'inhale';
      });
      setTimer(phase === 'exhale' ? 4 : phase === 'hold' ? 7 : 8);
    }
  }, [timer, isRunning, phase]);

  return (
    <div className="breathing-game">
      <h3>Breathing Exercise</h3>
      <div className={`circle ${phase}`}>
        <p>{phase.toUpperCase()}</p>
        <p>{timer}s</p>
      </div>
      <button onClick={() => setIsRunning(!isRunning)}>
        {isRunning ? 'Pause' : 'Start'}
      </button>
    </div>
  );
};

export default BreathingExercise;