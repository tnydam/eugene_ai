import { Link } from 'react-router-dom'

export function LandingPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-purple-800 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">E</span>
              </div>
              <span className="text-2xl font-bold text-gray-900">Eugene AI</span>
            </div>
            <div className="flex items-center gap-4">
              <Link to="/login" className="text-purple-600 hover:text-purple-700 font-medium">Sign In</Link>
              <Link to="/login" className="bg-gradient-to-r from-purple-600 to-purple-800 text-white px-6 py-2 rounded-lg hover:opacity-90 transition font-medium">
                Get Started Free
              </Link>
            </div>
          </div>
        </nav>
      </header>

      {/* Hero */}
      <section className="bg-gradient-to-br from-purple-600 to-purple-800 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Your Personal<br/>Intellectual Assistant
          </h1>
          <p className="text-xl mb-8 text-purple-100 max-w-3xl mx-auto">
            An agentic organizer that unifies professional projects, personal tasks, and family scheduling—all in one intelligent system. Your data stays in your preferred cloud storage.
          </p>
          <Link to="/login" className="inline-block bg-white text-purple-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition font-bold text-lg shadow-lg">
            Start Free →
          </Link>
        </div>
      </section>

      {/* Simple feature section */}
      <section className="py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-8">AI That Actually Learns</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Eugene tracks how long tasks really take and learns your productivity patterns. 
            After 3 completions: 60% → 98% accuracy.
          </p>
          <Link to="/login" className="inline-block bg-purple-600 text-white px-8 py-4 rounded-lg hover:bg-purple-700 transition font-bold">
            Get Started Free
          </Link>
        </div>
      </section>
    </div>
  )
}
