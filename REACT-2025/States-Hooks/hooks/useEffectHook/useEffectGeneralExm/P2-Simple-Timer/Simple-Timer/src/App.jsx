// Problem: Simple Timer using useEffect
// 🎯 Goal
// Create a simple timer that increments every second using setInterval, and stops cleanly when the component unmounts.
// ⚙️ Requirements
// ✅ Use useState to track the seconds count.
// ✅ Use useEffect to:
// Start a timer using setInterval() when the component mounts.
// Update the seconds every 1 second.
// Clear the timer when the component unmounts (to prevent memory leaks).

import { SimpleTimer } from "./component/SimpleTimer"


const App =() => {
  return (
    <div>
     <SimpleTimer/>
    </div>
  )
}

export default App
