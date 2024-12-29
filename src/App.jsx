import React from 'react'
import { NavLink } from 'react-router-dom'

import STYLE from "./style/Style"

function App() {

  return (
    <div className="container home" style={STYLE.container}>
      <div className="bg-content" style={STYLE['bg-content']}>
        <div className="bg-1" style={STYLE['bg-1']}></div>
        <div className="bg-2" style={STYLE['bg-2']}></div>
        <div className="bg-3" style={STYLE['bg-3']}></div>
      </div>
      <div className="content" style={STYLE.content}>
        <div className="content-left">
          <h1 style={STYLE.font_family.en}>DPU Stress Counseling Chatbot</h1>
          <div className="link">
            <NavLink to={"/pj-dpu-StressCounselingChatbot/login"} style={STYLE.font_family.en}>Get Start</NavLink>
          </div>
        </div>
      </div>
      <div className="not-support">
        <p style={STYLE.font_family.en}>Not Support Screen Size ({window.screen.width}x{window.screen.height})</p>
      </div>
      <div className="w-h">
        <p style={STYLE.font_family.en}>{window.screen.width}x{window.screen.height}</p>
      </div>
    </div>
  )
}

export default App
