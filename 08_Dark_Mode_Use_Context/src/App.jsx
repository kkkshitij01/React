
import { useState } from 'react'
import './App.css'
import { ThemeProvider } from './context/ThemeContext'

function App() {

  const [themeMode, setThemeMode] = useState("ligth");
  return (
    <ThemeProvider value={{ darkTheme, lightTheme, themeMode }}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            {/* BUTTON  */}
          </div>

          <div className="w-full max-w-sm mx-auto">
            {/* CARD */}
          </div>
        </div>
      </div>
    </ThemeProvider>
  )
}

export default App
