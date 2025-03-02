import { Link } from 'react-router-dom';
import { BrainIcon, HeartPulseIcon, TimerIcon, ClipboardListIcon } from 'lucide-react';

export default function Home() {
  const games = [
    {
      path: "/games/memory",
      name: "Memory Match",
      icon: <BrainIcon className="w-8 h-8 mb-4" />,
      desc: "Improve cognitive skills by matching pairs"
    },
    {
      path: "/games/stroop",
      name: "Stroop Test",
      icon: <ClipboardListIcon className="w-8 h-8 mb-4" />,
      desc: "Test cognitive flexibility and focus"
    },
    {
      path: "/games/breathing",
      name: "Breathing Exercise",
      icon: <HeartPulseIcon className="w-8 h-8 mb-4" />,
      desc: "Reduce stress with guided breathing"
    },
    {
      path: "/games/reaction",
      name: "Reaction Test",
      icon: <TimerIcon className="w-8 h-8 mb-4" />,
      desc: "Measure response times and focus"
    },
    {
      path: "/games/phq9",
      name: "PHQ-9 Screening",
      icon: <ClipboardListIcon className="w-8 h-8 mb-4" />,
      desc: "Depression symptom assessment"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            MindCare Diagnostics
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Assess and improve your mental health through interactive exercises
          </p>
          <div className="flex justify-center gap-4 mb-12">
            <div className="bg-blue-100 px-6 py-3 rounded-full">
              <span className="text-blue-800 font-medium">5+ Assessments</span>
            </div>
            <div className="bg-green-100 px-6 py-3 rounded-full">
              <span className="text-green-800 font-medium">Personalized Tracking</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {games.map((game, index) => (
            <Link
              key={index}
              to={game.path}
              className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-2"
            >
              <div className="text-blue-600 flex justify-center">
                {game.icon}
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-2 text-center">
                {game.name}
              </h3>
              <p className="text-gray-600 text-center">{game.desc}</p>
            </Link>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Why MindCare?
          </h2>
          <div className="grid md:grid-cols-3 gap-8 text-left">
            <div className="p-6 bg-white rounded-xl">
              <h3 className="text-xl font-semibold mb-2">Clinical Validation</h3>
              <p className="text-gray-600">Tools based on PHQ-9 and GAD-7 standards</p>
            </div>
            <div className="p-6 bg-white rounded-xl">
              <h3 className="text-xl font-semibold mb-2">Progress Tracking</h3>
              <p className="text-gray-600">Monitor improvements over time</p>
            </div>
            <div className="p-6 bg-white rounded-xl">
              <h3 className="text-xl font-semibold mb-2">Expert Resources</h3>
              <p className="text-gray-600">Access to mental health professionals</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}