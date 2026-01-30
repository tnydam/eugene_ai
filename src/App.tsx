import { HashRouter, Routes, Route, Navigate } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { useUserStore } from '@/stores/userStore'
import { Dashboard } from '@/pages/Dashboard'
import { LandingPage } from '@/pages/LandingPage'
import { Settings } from '@/pages/Settings'
import { Login } from '@/pages/Login'
import { Layout } from '@/components/Layout'
import './index.css'

const queryClient = new QueryClient()

function App() {
  const { user } = useUserStore()
  
  return (
    <QueryClientProvider client={queryClient}>
      <HashRouter>
        <Routes>
          {/* Public routes */}
          <Route path="/login" element={<Login />} />
          
          {/* Protected routes */}
          {user ? (
            <Route element={<Layout />}>
              <Route path="/" element={user ? <Dashboard /> : <LandingPage />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Route>
          ) : (
            <Route path="*" element={<Navigate to="/login" replace />} />
          )}
        </Routes>
      </HashRouter>
    </QueryClientProvider>
  )
}

export default App
