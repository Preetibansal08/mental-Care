import { Link } from 'react-router-dom';
import { HomeIcon, UserIcon, ChartBarIcon, QuestionMarkCircleIcon } from '@heroicons/react/24/outline';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <span className="text-2xl font-bold text-purple-600">MindCare</span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="flex items-center text-gray-700 hover:text-purple-600">
              <HomeIcon className="h-5 w-5 mr-1" />
              Home
            </Link>
            <Link to="/dashboard" className="flex items-center text-gray-700 hover:text-purple-600">
              <ChartBarIcon className="h-5 w-5 mr-1" />
              Dashboard
            </Link>
            <Link to="/games" className="flex items-center text-gray-700 hover:text-purple-600">
              <QuestionMarkCircleIcon className="h-5 w-5 mr-1" />
              Games
            </Link>
            <Link to="/login" className="flex items-center text-gray-700 hover:text-purple-600">
              <UserIcon className="h-5 w-5 mr-1" />
              Login
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}