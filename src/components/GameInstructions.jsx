import { useState, useEffect } from 'react';
import { XCircleIcon } from '@heroicons/react/24/outline';

export default function GameInstructions({ gameName, rules }) {
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    const hasSeen = localStorage.getItem(`seen-${gameName}`);
    if (hasSeen) setIsOpen(false);
  }, []);

  const handleClose = () => {
    localStorage.setItem(`seen-${gameName}`, 'true');
    setIsOpen(false);
  };

  return isOpen && (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white p-8 rounded-xl max-w-md relative">
        <button 
          onClick={handleClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          <XCircleIcon className="w-8 h-8" />
        </button>
        <h3 className="text-3xl font-bold mb-4">How to Play {gameName}</h3>
        <ul className="space-y-3 list-disc pl-6">
          {rules.map((rule, index) => (
            <li key={index} className="text-gray-700 text-lg">{rule}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}