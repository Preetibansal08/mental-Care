import { Line } from 'react-chartjs-2';
import { Chart, CategoryScale, LinearScale, PointElement, LineElement } from 'chart.js';
import { CalendarIcon, TrophyIcon, TrendingUpIcon } from 'lucide-react';

// Register Chart.js components
Chart.register(CategoryScale, LinearScale, PointElement, LineElement);

export default function Dashboard() {
  // Mock data - replace with real data later
  const moodData = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [{
      label: 'Mood Level',
      data: [3, 5, 4, 6, 7, 5, 8],
      borderColor: '#4F46E5',
      tension: 0.4
    }]
  };

  const stats = [
    { title: "Total Sessions", value: "15", icon: <CalendarIcon className="w-6 h-6" /> },
    { title: "Best Score", value: "92%", icon: <TrophyIcon className="w-6 h-6" /> },
    { title: "Consistency", value: "8 Days", icon: <TrendingUpIcon className="w-6 h-6" /> }
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Your Dashboard</h1>
        
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-500 mb-1">{stat.title}</p>
                  <p className="text-3xl font-bold">{stat.value}</p>
                </div>
                <div className="text-blue-600">
                  {stat.icon}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Mood Chart */}
          <div className="lg:col-span-2 bg-white p-6 rounded-xl shadow-sm">
            <h2 className="text-xl font-semibold mb-4">Mood Tracker</h2>
            <div className="h-64">
              <Line 
                data={moodData}
                options={{
                  responsive: true,
                  maintainAspectRatio: false,
                  scales: {
                    y: { beginAtZero: true, max: 10 }
                  }
                }}
              />
            </div>
          </div>

          {/* Recent Activity */}
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
            <div className="space-y-4">
              {['Memory Game', 'PHQ-9 Test', 'Breathing Exercise'].map((activity, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <span>{activity}</span>
                  <span className="text-sm text-gray-500">2h ago</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Game Statistics */}
        <div className="grid md:grid-cols-2 gap-8 mt-8">
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h2 className="text-xl font-semibold mb-4">Game Performance</h2>
            <div className="space-y-4">
              {[
                { game: 'Memory', progress: '80%', color: 'bg-blue-200' },
                { game: 'Stroop', progress: '65%', color: 'bg-green-200' },
                { game: 'Reaction', progress: '92%', color: 'bg-purple-200' }
              ].map((stat, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between">
                    <span>{stat.game}</span>
                    <span>{stat.progress}</span>
                  </div>
                  <div className="w-full bg-gray-100 rounded-full h-2">
                    <div 
                      className={`${stat.color} h-2 rounded-full`} 
                      style={{ width: stat.progress }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
            <div className="grid grid-cols-2 gap-4">
              <button className="p-4 bg-blue-50 rounded-lg hover:bg-blue-100">
                New Assessment
              </button>
              <button className="p-4 bg-green-50 rounded-lg hover:bg-green-100">
                View Progress
              </button>
              <button className="p-4 bg-purple-50 rounded-lg hover:bg-purple-100">
                Share Results
              </button>
              <button className="p-4 bg-pink-50 rounded-lg hover:bg-pink-100">
                Emergency Help
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}