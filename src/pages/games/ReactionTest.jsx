import { useState, useEffect, useRef } from 'react';
import GameInstructions from '../../components/GameInstructions';

export default function ReactionTest() {
  const [reactionTimes, setReactionTimes] = useState([]);
  const [gameState, setGameState] = useState('waiting');
  const [startTime, setStartTime] = useState(0);
  const timeoutRef = useRef(null);

  const startTest = () => {
    setGameState('waiting');
    timeoutRef.current = setTimeout(() => {
      setGameState('ready');
      setStartTime(Date.now());
    }, Math.random() * 3000 + 1000);
  };

  const handleClick = () => {
    if (gameState === 'ready') {
      const reactionTime = Date.now() - startTime;
      setReactionTimes([...reactionTimes, reactionTime]);
      setGameState('waiting');
    } else {
      clearTimeout(timeoutRef.current);
      startTest();
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <GameInstructions
        gameName="Reaction Time Test"
        rules={[
          "Click when the screen turns green",
          "Wait for the color change after red screen",
          "5 attempts will be averaged",
          "Fastest reaction wins!"
        ]}
      />
      
      <div className="max-w-2xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-8">Reaction Time Test</h1>
        
        <div 
          className={`h-96 rounded-xl shadow-lg flex items-center justify-center cursor-pointer transition-colors ${
            gameState === 'ready' ? 'bg-green-500' : 'bg-red-500'
          }`}
          onClick={handleClick}
        >
          <p className="text-white text-2xl font-bold">
            {gameState === 'ready' ? 'CLICK NOW!' : 'Click to start'}
          </p>
        </div>

        <div className="mt-8 bg-white p-6 rounded-xl shadow">
          <h3 className="text-xl font-semibold mb-4">Results</h3>
          <div className="grid grid-cols-3 gap-4">
            <div>
              <p className="text-gray-600">Attempts</p>
              <p className="text-2xl">{reactionTimes.length}</p>
            </div>
            <div>
              <p className="text-gray-600">Average</p>
              <p className="text-2xl">
                {reactionTimes.length > 0
                  ? (reactionTimes.reduce((a, b) => a + b, 0) / reactionTimes.length).toFixed(0)
                  : 0}ms
              </p>
            </div>
            <div>
              <p className="text-gray-600">Best</p>
              <p className="text-2xl">
                {reactionTimes.length > 0
                  ? Math.min(...reactionTimes)
                  : 0}ms
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}