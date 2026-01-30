import { useUserStore } from '@/stores/userStore'
import { Calendar, CheckCircle, TrendingUp, AlertCircle } from 'lucide-react'

export function Dashboard() {
  const { user, getBusinessLineLimit, getTaskLimit } = useUserStore()
  
  const taskLimit = getTaskLimit()
  const businessLineLimit = getBusinessLineLimit()
  
  return (
    <div className="max-w-7xl mx-auto p-6">
      {/* Welcome Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">
          Welcome back, {user?.name}!
        </h1>
        <p className="text-gray-600 mt-1">
          Here's what's happening with your tasks today
        </p>
      </div>
      
      {/* Usage Stats - Lite tier only */}
      {user?.tier === 'lite' && (
        <div className="mb-6 bg-purple-50 border border-purple-200 rounded-lg p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-purple-900">Eugene Lite</p>
              <div className="flex gap-6 mt-1 text-sm text-purple-700">
                <span>{user.businessLinesCount}/{businessLineLimit} business lines</span>
                <span>{user.tasksCount}/{taskLimit} tasks</span>
              </div>
            </div>
            <button className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition text-sm font-medium">
              Upgrade to Pro
            </button>
          </div>
        </div>
      )}
      
      {/* Stats Grid */}
      <div className="grid md:grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
              <CheckCircle className="w-6 h-6 text-blue-600" />
            </div>
          </div>
          <p className="text-2xl font-bold text-gray-900">12</p>
          <p className="text-sm text-gray-600">Tasks Today</p>
        </div>
        
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
              <Calendar className="w-6 h-6 text-green-600" />
            </div>
          </div>
          <p className="text-2xl font-bold text-gray-900">8</p>
          <p className="text-sm text-gray-600">Scheduled</p>
        </div>
        
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-purple-600" />
            </div>
          </div>
          <p className="text-2xl font-bold text-gray-900">92%</p>
          <p className="text-sm text-gray-600">On Time</p>
        </div>
        
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
              <AlertCircle className="w-6 h-6 text-orange-600" />
            </div>
          </div>
          <p className="text-2xl font-bold text-gray-900">2</p>
          <p className="text-sm text-gray-600">Overdue</p>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* Today's Tasks */}
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Today's Tasks</h2>
          <div className="space-y-3">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition cursor-pointer">
                <input type="checkbox" className="w-5 h-5 text-purple-600 rounded" />
                <div className="flex-1">
                  <p className="font-medium text-gray-900">Create Instagram carousel</p>
                  <p className="text-sm text-gray-600">The Photo Pro • 45 min</p>
                </div>
                <span className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded-full">
                  9:00 AM
                </span>
              </div>
            ))}
          </div>
          <button className="w-full mt-4 text-center text-purple-600 hover:text-purple-700 font-medium text-sm">
            View all tasks →
          </button>
        </div>
        
        {/* Pattern Insights */}
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Pattern Insights</h2>
          <div className="space-y-4">
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <p className="text-sm font-medium text-green-900 mb-1">Most Productive Time</p>
              <p className="text-lg font-bold text-green-700">9:00 AM - 11:00 AM</p>
              <p className="text-xs text-green-600 mt-1">You're 2x faster during this window</p>
            </div>
            
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <p className="text-sm font-medium text-blue-900 mb-1">Carousels Duration</p>
              <p className="text-lg font-bold text-blue-700">45 ± 5 minutes</p>
              <p className="text-xs text-blue-600 mt-1">Based on 12 completions • 85% confidence</p>
            </div>
            
            <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
              <p className="text-sm font-medium text-orange-900 mb-1">Estimation Accuracy</p>
              <p className="text-lg font-bold text-orange-700">92%</p>
              <p className="text-xs text-orange-600 mt-1">Up from 67% last month</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
