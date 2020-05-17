
import React, { useState } from 'react'
import './App.css'
import { useSafe } from './utils/SafeProvider'

const App = () => {
  const safe = useSafe()
  const [input, setInput] = useState("Initial")
  const submitTransaction = React.useCallback(() => {
    setInput(input + "+")
    safe.sendTransactions([{
      to: safe.getSafeInfo().safeAddress,
      data: "0x",
      value: 0
    }])
  }, [safe, input])
  return(
    <img src="https://cdn.vox-cdn.com/thumbor/7yYZtRB4jIeG_517GXEcycJ2C3U=/0x0:735x500/1200x800/filters:focal(310x192:426x308)/cdn.vox-cdn.com/uploads/chorus_image/image/66727168/image.0.png" alt="Text" width="700" height="450"></img>);
}

export default App
