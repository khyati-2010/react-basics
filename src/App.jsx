import { useState } from 'react'

import PwdGen from './02_pwdGen/PwdGen'
import BgChanger from './01_bgChanger/BgChanger'
import Currency from './03_currency/Currency'

function App() {
  const [selectedApp, setSelectedApp] = useState(null)

  return (
    <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
      
      {!selectedApp ? (
        <div className="text-center">
          <h1 className="text-5xl font-bold mb-4">
            React Basics
          </h1>

          <p className="text-gray-400 mb-8">
            Explore my React mini projects
          </p>

          <div className="flex gap-4 justify-center">
            <button
              onClick={() => setSelectedApp('bg')}
              className="px-5 py-3 bg-green-600 rounded-lg hover:bg-green-700 transition"
            >
              Background Changer
            </button>

            <button
              onClick={() => setSelectedApp('pwd')}
              className="px-5 py-3 bg-blue-600 rounded-lg hover:bg-blue-700 transition"
            >
              Password Generator
            </button>

            <button
              onClick={() => setSelectedApp('currency')}
              className="px-5 py-3 bg-purple-600 rounded-lg hover:bg-purple-700 transition"
            >
              Currency Converter
            </button>
          </div>
        </div>
      ) : (
        <div className="min-h-screen w-full p-6">
          <button
            onClick={() => setSelectedApp(null)}
            className="mb-6 px-4 py-2 bg-gray-700 rounded-lg hover:bg-gray-600 transition"
          >
            ← Back to Projects
          </button>

          {selectedApp === 'bg' && <BgChanger />}
          {selectedApp === 'pwd' && <PwdGen />}
          {selectedApp === 'currency' && <Currency />}
        </div>
      )}
    </div>
  )
}

export default App
