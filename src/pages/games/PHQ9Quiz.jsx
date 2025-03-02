import { useState } from 'react';
import GameInstructions from '../../components/GameInstructions';

const questions = [
  "Little interest or pleasure in doing things",
  "Feeling down, depressed, or hopeless",
  "Trouble falling/staying asleep, or sleeping too much",
  "Feeling tired or having little energy",
  "Poor appetite or overeating",
  "Feeling bad about yourself - or that you are a failure",
  "Trouble concentrating on things",
  "Moving/speaking slowly or being fidgety",
  "Thoughts of self-harm"
];

export default function PHQ9Quiz() {
  const [answers, setAnswers] = useState(Array(9).fill(0));
  const [showResult, setShowResult] = useState(false);

  const calculateScore = () => {
    const total = answers.reduce((sum, val) => sum + val, 0);
    setShowResult(true);
    localStorage.setItem('phq9-score', total);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <GameInstructions
        gameName="PHQ-9 Depression Screening"
        rules={[
          "Answer based on the last 2 weeks",
          "0 = Not at all",
          "1 = Several days",
          "2 = More than half the days",
          "3 = Nearly every day"
        ]}
      />
      
      <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-lg p-6">
        <h1 className="text-4xl font-bold text-gray-800 mb-8">PHQ-9 Questionnaire</h1>
        
        <div className="space-y-6">
          {questions.map((question, index) => (
            <div key={index} className="border-b pb-4">
              <p className="text-lg font-medium text-gray-700 mb-2">{question}</p>
              <select
                className="w-full p-2 border rounded-lg"
                onChange={(e) => {
                  const newAnswers = [...answers];
                  newAnswers[index] = parseInt(e.target.value);
                  setAnswers(newAnswers);
                }}
              >
                <option value={0}>Not at all</option>
                <option value={1}>Several days</option>
                <option value={2}>More than half the days</option>
                <option value={3}>Nearly every day</option>
              </select>
            </div>
          ))}
        </div>

        <button
          onClick={calculateScore}
          className="mt-8 w-full py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700"
        >
          Calculate Score
        </button>

        {showResult && (
          <div className="mt-6 p-4 bg-blue-50 rounded-lg">
            <h3 className="text-xl font-semibold">
              Total Score: {answers.reduce((a, b) => a + b, 0)}
            </h3>
            <p className="mt-2">
              {answers.reduce((a, b) => a + b, 0) >= 10
                ? "Recommend consulting a mental health professional"
                : "Your score suggests minimal depression"}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}