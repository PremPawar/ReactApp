import { useState } from 'react'
import './App.css'
import { WeatherProvider } from './Context/WeatherContext'
import { LocationProvider } from './Context/LocationContext'
import WeatherDashboard from './Components/WeatherDashboard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <WeatherProvider>
        <LocationProvider>
          <div className="min-h-screen bg-gray-200 flex items-center justify-center">
            <WeatherDashboard />
          </div>
        </LocationProvider>
      </WeatherProvider>
    </>
  )
}

export default App
