import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export type UserTier = 'lite' | 'pro' | 'enterprise'

interface User {
  id: string
  email: string
  name: string
  tier: UserTier
  businessLinesCount: number
  tasksCount: number
  createdAt: string
}

interface UserStore {
  user: User | null
  setUser: (user: User) => void
  logout: () => void
  canCreateBusinessLine: () => boolean
  canCreateTask: () => boolean
  hasProFeature: (feature: string) => boolean
  getBusinessLineLimit: () => number
  getTaskLimit: () => number | null
}

export const useUserStore = create<UserStore>()(
  persist(
    (set, get) => ({
      user: null,
      
      setUser: (user) => set({ user }),
      
      logout: () => set({ user: null }),
      
      canCreateBusinessLine: () => {
        const { user } = get()
        if (!user) return false
        
        // Pro and Enterprise: unlimited
        if (user.tier === 'pro' || user.tier === 'enterprise') return true
        
        // Lite: max 3
        return user.businessLinesCount < 3
      },
      
      canCreateTask: () => {
        const { user } = get()
        if (!user) return false
        
        // Pro and Enterprise: unlimited
        if (user.tier === 'pro' || user.tier === 'enterprise') return true
        
        // Lite: max 100
        return user.tasksCount < 100
      },
      
      hasProFeature: (feature: string) => {
        const { user } = get()
        if (!user) return false
        
        const proFeatures = [
          'slack',
          'whatsapp',
          'advanced_analytics',
          'pattern_learning_full',
          'price_tracking',
          'team_members',
        ]
        
        if (!proFeatures.includes(feature)) return true
        
        return user.tier === 'pro' || user.tier === 'enterprise'
      },
      
      getBusinessLineLimit: () => {
        const { user } = get()
        if (!user) return 0
        
        if (user.tier === 'pro' || user.tier === 'enterprise') return Infinity
        return 3
      },
      
      getTaskLimit: () => {
        const { user } = get()
        if (!user) return 0
        
        if (user.tier === 'pro' || user.tier === 'enterprise') return null
        return 100
      },
    }),
    {
      name: 'eugene-user-storage',
    }
  )
)
