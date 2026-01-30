import { Outlet, Link, useLocation } from 'react-router-dom'
import { useUserStore } from '@/stores/userStore'
import { LayoutDashboard, Settings, LogOut, Crown } from 'lucide-react'

export function Layout() {
  const { user, logout } = useUserStore()
  const location = useLocation()
  
  const isActive = (path: string) => location.pathname === path
  
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-8">
              <Link to="/" className="flex items-center gap-2">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-purple-800 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">E</span>
                </div>
                <span className="text-xl font-bold text-gray-900">Eugene AI</span>
              </Link>
              
              <nav className="hidden md:flex items-center gap-1">
                <Link
                  to="/"
                  className={`px-4 py-2 rounded-lg font-medium transition ${
                    isActive('/') 
                      ? 'bg-purple-100 text-purple-700' 
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <LayoutDashboard className="w-4 h-4" />
                    Dashboard
                  </div>
                </Link>
                
                <Link
                  to="/settings"
                  className={`px-4 py-2 rounded-lg font-medium transition ${
                    isActive('/settings') 
                      ? 'bg-purple-100 text-purple-700' 
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <Settings className="w-4 h-4" />
                    Settings
                  </div>
                </Link>
              </nav>
            </div>
            
            <div className="flex items-center gap-4">
              {/* Tier Badge */}
              <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 bg-purple-100 rounded-full">
                {user?.tier === 'pro' && <Crown className="w-4 h-4 text-purple-600" />}
                <span className="text-sm font-medium text-purple-700 capitalize">
                  {user?.tier}
                </span>
              </div>
              
              {/* User Menu */}
              <div className="flex items-center gap-3">
                <div className="hidden md:block text-right">
                  <p className="text-sm font-medium text-gray-900">{user?.name}</p>
                  <p className="text-xs text-gray-600">{user?.email}</p>
                </div>
                
                <button
                  onClick={logout}
                  className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition"
                  title="Sign out"
                >
                  <LogOut className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>
      
      {/* Main Content */}
      <main>
        <Outlet />
      </main>
    </div>
  )
}
