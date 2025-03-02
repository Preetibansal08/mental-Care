import { useState, useEffect } from 'react';
import GameInstructions from '../../components/GameInstructions';

export default function MemoryGame() {
  const [cards, setCards] = useState([]);
  const [flipped, setFlipped] = useState([]);
  const [matches, setMatches] = useState(0);

  // Game initialization
  useEffect(() => {
    initializeGame();
  }, []);

  const initializeGame = () => {
    const symbols = ['🐶', '🐱', '🐹', '🐰', '🦊', '🐻'];
    const gameCards = [...symbols, ...symbols]
      .sort(() => Math.random() - 0.5)
      .map((symbol, id) => ({ id, symbol }));
    setCards(gameCards);
  };

  const handleCardClick = (index) => {
    if (flipped.length < 2 && !flipped.includes(index)) {
      setFlipped([...flipped, index]);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <GameInstructions 
        gameName="Memory Match"
        rules={[
          "Find matching pairs of animals",
          "Click two cards to reveal them",
          "Match all pairs to win!"
        ]}
      />
      
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 mb-8">Memory Game</h1>
        <div className="grid grid-cols-4 gap-4">
          {cards.map((card, index) => (
            <button
              key={card.id}
              onClick={() => handleCardClick(index)}
              className={`aspect-square text-4xl rounded-lg transition-all ${
                flipped.includes(index) ? 'bg-blue-200' : 'bg-white'
              } shadow-md hover:shadow-lg`}
            >
              {flipped.includes(index) ? card.symbol : '?'}
            </button>
          ))}
        </div>
        <div className="mt-6 text-xl font-semibold text-gray-700">
          Matches: {matches}/6
        </div>
      </div>
    </div>
  );
}