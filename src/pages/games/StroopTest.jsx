import { useState, useEffect } from 'react';
import GameInstructions from '../../components/GameInstructions';

const colors = ['red', 'blue', 'green', 'yellow'];

export default function StroopTest() {
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(30);
  const [current, setCurrent] = useState({ color: '', word: '' });

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent({
        color: colors[Math.floor(Math.random() * 4)],
        word: colors[Math.floor(Math.random() * 4)]
      });
    }, 1500);
    
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <GameInstructions
        gameName="Stroop Test"
        rules={[
          "Select the COLOR of the text, not the word!",
          "Example: If you see 'RED' in blue, click BLUE",
          "1 point per correct answer",
          "30 seconds timer"
        ]}
      />
      
      <div className="max-w-2xl mx-auto">
        <div className="flex justify-between mb-8">
          <h1 className="text-4xl font-bold text-gray-800">Stroop Test</h1>
          <div className="text-2xl font-semibold">
            Time: {timeLeft}s | Score: {score}
          </div>
        </div>
        
        <div className="bg-white p-8 rounded-xl shadow-lg">
          <div 
            className={`text-6xl font-bold mb-8 text-center text-${current.color}-600`}
          >
            {current.word.toUpperCase()}
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            {colors.map(color => (
              <button
                key={color}
                onClick={() => color === current.color && setScore(s => s + 1)}
                className={`p-4 text-white rounded-lg bg-${color}-500 hover:bg-${color}-600`}
              >
                {color.toUpperCase()}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}