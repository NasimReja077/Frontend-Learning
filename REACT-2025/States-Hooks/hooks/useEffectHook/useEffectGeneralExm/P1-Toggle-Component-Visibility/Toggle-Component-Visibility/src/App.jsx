// Project: Toggle Component Visibility
// 🎯 Goal
// Show/hide a child component.
// When the child mounts → log "Mounted".
// When it unmounts → log "Unmounted".

import { ToggleVisibility } from "./component/ToggleVisibility"

// Learn how useEffect simulates lifecycle events.
const App =() => {
  return (
    <div>
      <ToggleVisibility />
    </div>
  )
}

export default App
