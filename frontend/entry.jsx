import React from 'react'
import { createRoot } from 'react-dom/client'

import Start from './components/start.jsx'
import Schedule from './components/schedule.jsx'
import Track from './components/track.jsx'

window.addEventListener('DOMContentLoaded', () => {

  const container = document.getElementById('container')
  const root = createRoot(container)

  switch (window.location.pathname) {
    case '/':
      root.render(<Start />)
      break
    case '/schedule':
      root.render(<Schedule />)
      break
    case '/track':
      root.render(<Track />)
      break
  }

})
