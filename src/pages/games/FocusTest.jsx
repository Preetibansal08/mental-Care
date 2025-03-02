import React, { useState, useEffect } from 'react';

const FocusTest = () => {
  const [targets, setTargets] = useState([]);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(30);

  useEffect(() => {
    const interval = setInterval(() => {
      setTargets(prev => [
        ...prev,
        { id: Date.now(), x: Math.random() * 90, y: Math.random() * 80 }
      ]);
    }, 2000);

    const timer = setInterval(() => {
      setTimeLeft(t => (t > 0 ? t - 1 : 0));
    }, 1000);

    return () => {
      clearInterval(interval);
      clearInterval(timer);
    };
  }, []);

  const handleHit = (id) => {
    setScore(score + 1);
    setTargets(targets.filter(t => t.id !== id));
  };

  return (
    <div className="focus-test">
      <h3>Focus Test</h3>
      <p>Time Left: {timeLeft}s | Score: {score}</p>
      <div className="game-area">
        {targets.map(target => (
          <button
            key={target.id}
            className="target"
            style={{ left: `${target.x}%`, top: `${target.y}%` }}
            onClick={() => handleHit(target.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default FocusTest;