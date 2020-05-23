
import React, { useState } from 'react'
import './App.css'
import { useSafe } from './utils/SafeProvider'
import './index.js'
import './index.css'

const App = () => {
    const [services] = useState(buildServices(useSafe()));
    return <Dashboard services={services} />
  }
  

export default App
