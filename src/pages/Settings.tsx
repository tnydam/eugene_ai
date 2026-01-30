import { useState } from 'react'
import { useUserStore } from '@/stores/userStore'
import { Bell, Mail, MessageSquare, Zap, Lock, Crown } from 'lucide-react'

interface NotificationSettings {
  email: {
    enabled: boolean
    dailyDigest: boolean
    deadlineReminders: boolean
    patternInsights: boolean
    calendarConflicts: boolean
  }
  slack: {
    enabled: boolean
    workspace: string
  }
  whatsapp: {
    enabled: boolean
    phoneNumber: string
  }
}

export function Settings() {
  const { user, hasProFeature } = useUserStore()
  
  const [notifications, setNotifications] = useState<NotificationSettings>({
    email: {
      enabled: true,
      dailyDigest: true,
      deadlineReminders: true,
      patternInsights: true,
      calendarConflicts: true,
    },
    slack: {
      enabled: false,
      workspace: '',
    },
    whatsapp: {
      enabled: false,
      phoneNumber: '',
    },
  })
  
  const toggleEmailSetting = (key: keyof NotificationSettings['email']) => {
    setNotifications(prev => ({
      ...prev,
      email: {
        ...prev.email,
        [key]: !prev.email[key],
      },
    }))
  }
  
  const canUseSlack = hasProFeature('slack')
  const canUseWhatsApp = hasProFeature('whatsapp')
  
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Settings</h1>
      
      {/* Tier Badge */}
      <div className="mb-8 bg-gradient-to-r from-purple-50 to-purple-100 border border-purple-200 rounded-lg p-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-lg font-semibold text-purple-900">
              {user?.tier === 'lite' && 'Eugene Lite'}
              {user?.tier === 'pro' && 'Eugene Pro'}
              {user?.tier === 'enterprise' && 'Eugene Enterprise'}
            </h2>
            <p className="text-sm text-purple-700">
              {user?.tier === 'lite' && `${user?.businessLinesCount}/3 business lines • ${user?.tasksCount}/100 tasks`}
              {user?.tier === 'pro' && 'Unlimited business lines & tasks'}
              {user?.tier === 'enterprise' && 'Unlimited everything + white-label'}
            </p>
          </div>
          {user?.tier === 'lite' && (
            <button className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition flex items-center gap-2">
              <Crown className="w-4 h-4" />
              Upgrade to Pro
            </button>
          )}
        </div>
      </div>
      
      {/* Notifications Section */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <div className="flex items-center gap-3 mb-6">
          <Bell className="w-6 h-6 text-purple-600" />
          <h2 className="text-2xl font-bold text-gray-900">Notifications</h2>
        </div>
        
        {/* Email Notifications - Available in Lite */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-gray-600" />
              <div>
                <h3 className="font-semibold text-gray-900">Email Notifications</h3>
                <p className="text-sm text-gray-600">Available in all tiers</p>
              </div>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={notifications.email.enabled}
                onChange={() => toggleEmailSetting('enabled')}
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-purple-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-600"></div>
            </label>
          </div>
          
          {notifications.email.enabled && (
            <div className="ml-8 space-y-3 border-l-2 border-purple-200 pl-4">
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={notifications.email.dailyDigest}
                  onChange={() => toggleEmailSetting('dailyDigest')}
                  className="w-4 h-4 text-purple-600 rounded focus:ring-purple-500"
                />
                <div>
                  <p className="text-sm font-medium text-gray-900">Daily task digest</p>
                  <p className="text-xs text-gray-500">Every morning at 8:00 AM</p>
                </div>
              </label>
              
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={notifications.email.deadlineReminders}
                  onChange={() => toggleEmailSetting('deadlineReminders')}
                  className="w-4 h-4 text-purple-600 rounded focus:ring-purple-500"
                />
                <div>
                  <p className="text-sm font-medium text-gray-900">Deadline reminders</p>
                  <p className="text-xs text-gray-500">24 hours before tasks are due</p>
                </div>
              </label>
              
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={notifications.email.patternInsights}
                  onChange={() => toggleEmailSetting('patternInsights')}
                  className="w-4 h-4 text-purple-600 rounded focus:ring-purple-500"
                />
                <div>
                  <p className="text-sm font-medium text-gray-900">Pattern insights</p>
                  <p className="text-xs text-gray-500">Weekly summary of productivity patterns</p>
                </div>
              </label>
              
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={notifications.email.calendarConflicts}
                  onChange={() => toggleEmailSetting('calendarConflicts')}
                  className="w-4 h-4 text-purple-600 rounded focus:ring-purple-500"
                />
                <div>
                  <p className="text-sm font-medium text-gray-900">Calendar conflicts</p>
                  <p className="text-xs text-gray-500">When scheduling conflicts detected</p>
                </div>
              </label>
            </div>
          )}
        </div>
        
        {/* Slack Integration - Pro only */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <MessageSquare className="w-5 h-5 text-gray-600" />
              <div>
                <h3 className="font-semibold text-gray-900 flex items-center gap-2">
                  Slack Integration
                  {!canUseSlack && (
                    <span className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded-full font-medium flex items-center gap-1">
                      <Crown className="w-3 h-3" />
                      Pro
                    </span>
                  )}
                </h3>
                <p className="text-sm text-gray-600">
                  {canUseSlack ? 'Send notifications to Slack workspace' : 'Upgrade to Pro to enable Slack'}
                </p>
              </div>
            </div>
            
            {!canUseSlack ? (
              <button className="bg-purple-100 text-purple-600 px-4 py-2 rounded-lg font-medium flex items-center gap-2 cursor-not-allowed opacity-50">
                <Lock className="w-4 h-4" />
                Locked
              </button>
            ) : (
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={notifications.slack.enabled}
                  onChange={() => setNotifications(prev => ({
                    ...prev,
                    slack: { ...prev.slack, enabled: !prev.slack.enabled }
                  }))}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-purple-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-600"></div>
              </label>
            )}
          </div>
          
          {canUseSlack && notifications.slack.enabled && (
            <div className="ml-8 border-l-2 border-purple-200 pl-4">
              <button className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition">
                Connect Slack Workspace
              </button>
            </div>
          )}
        </div>
        
        {/* WhatsApp Integration - Pro only */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <Zap className="w-5 h-5 text-gray-600" />
              <div>
                <h3 className="font-semibold text-gray-900 flex items-center gap-2">
                  WhatsApp Notifications
                  {!canUseWhatsApp && (
                    <span className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded-full font-medium flex items-center gap-1">
                      <Crown className="w-3 h-3" />
                      Pro
                    </span>
                  )}
                </h3>
                <p className="text-sm text-gray-600">
                  {canUseWhatsApp ? 'Receive task reminders via WhatsApp' : 'Upgrade to Pro to enable WhatsApp'}
                </p>
              </div>
            </div>
            
            {!canUseWhatsApp ? (
              <button className="bg-purple-100 text-purple-600 px-4 py-2 rounded-lg font-medium flex items-center gap-2 cursor-not-allowed opacity-50">
                <Lock className="w-4 h-4" />
                Locked
              </button>
            ) : (
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={notifications.whatsapp.enabled}
                  onChange={() => setNotifications(prev => ({
                    ...prev,
                    whatsapp: { ...prev.whatsapp, enabled: !prev.whatsapp.enabled }
                  }))}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-purple-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-600"></div>
              </label>
            )}
          </div>
          
          {canUseWhatsApp && notifications.whatsapp.enabled && (
            <div className="ml-8 border-l-2 border-purple-200 pl-4">
              <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition">
                Connect WhatsApp
              </button>
            </div>
          )}
        </div>
      </div>
      
      {/* Upgrade Prompt for Lite users */}
      {user?.tier === 'lite' && (
        <div className="bg-gradient-to-r from-purple-600 to-purple-800 rounded-lg p-6 text-white">
          <div className="flex items-start justify-between">
            <div>
              <h3 className="text-xl font-bold mb-2">Unlock Pro Features</h3>
              <p className="text-purple-100 mb-4">
                Get unlimited tasks, Slack & WhatsApp integrations, advanced analytics, and more
              </p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-center gap-2">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                  <span>Unlimited business lines & tasks</span>
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                  <span>Slack & WhatsApp integrations</span>
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                  <span>Advanced analytics & pattern learning</span>
                </li>
              </ul>
              <button className="bg-white text-purple-600 px-6 py-3 rounded-lg hover:bg-gray-100 transition font-bold">
                Upgrade to Pro - $9/month
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
