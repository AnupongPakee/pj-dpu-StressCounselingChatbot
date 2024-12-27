import { useState } from 'react'

import { NavLink } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1>Hello World !!!</h1>
      <NavLink to={"/pj-dpu-StressCounselingChatbot/test"}>Go to Test</NavLink>        
    </div>
  )
}

export default App
