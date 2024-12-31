import React from 'react'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faShieldHalved, faEye, faEnvelope } from '@fortawesome/free-solid-svg-icons'

import STYLE from "../style/Style"

function Register() {
  let stateA = 0, stateB = 0;
  const showPassword = (check) => {
    const new_password = document.getElementById("new_password");
    const confirm_password = document.getElementById("confirm_password");
    const new_faHavled = document.getElementById("new_faHavled");
    const confirm_faHavled = document.getElementById("confirm_faHavled");
    const new_faEye = document.getElementById("new_faEye");
    const confirm_faEye = document.getElementById("confirm_faEye");

    if (check == "showpass_1") {
      stateA += 1
    }
    if (check == "showpass_2") {
      stateB += 1
    }

    if (stateA == 1) {
      new_password.setAttribute("type", "text");
      new_faHavled.style.display = "none"
      new_faEye.style.display = "block"
    } else if (stateA == 2) {
      new_password.setAttribute("type", "password");
      new_faEye.style.display = "none"
      new_faHavled.style.display = "block"
      stateA = 0
    }

    if (stateB == 1) {
      confirm_password.setAttribute("type", "text");
      confirm_faHavled.style.display = "none"
      confirm_faEye.style.display = "block"
    } else if (stateB == 2) {
      confirm_password.setAttribute("type", "password");
      confirm_faEye.style.display = "none"
      confirm_faHavled.style.display = "block"
      stateB = 0
    }
  }
  return (
    <div className="container register" style={STYLE.container} >
      <div className="bg-content" style={STYLE['bg-content']}>
        <div className="bg-1" style={STYLE['bg-1']}></div>
        <div className="bg-2" style={STYLE['bg-2']}></div>
        <div className="bg-3" style={STYLE['bg-3']}></div>
      </div>
      <div className="content" style={STYLE.content}>
        <div className="content-left">
          <h1 style={STYLE.font_family.en}>DPU Stress Counseling Chatbot</h1>
        </div>
        <div className="content-right">
          <p style={STYLE.font_family.en}>DPU Stress Counseling Chatbot</p>
          <h1 style={STYLE.font_family.th}>ลงทะเบียน</h1>
          <form>
            <div className="content-form">
              <div className="input">
                <FontAwesomeIcon icon={faUser} className='icon' />
                <input type="text" style={STYLE.font_family.th} name='username' placeholder='ชื่อผู้ใช้' required />
              </div>
              <div className="input">
                <FontAwesomeIcon icon={faShieldHalved} className='icon-pass' id='new_faHavled' onClick={() => showPassword("showpass_1")} />
                <FontAwesomeIcon icon={faEye} className='icon-pass' id='new_faEye' style={{display: "none"}} onClick={() => showPassword("showpass_1")} />
                <input type="password" style={STYLE.font_family.th} name='password' id='new_password' placeholder='รหัสผ่าน' required />
              </div>
              <div className="input">
                <FontAwesomeIcon icon={faShieldHalved} className='icon-pass' id='confirm_faHavled' onClick={() => showPassword("showpass_2")} />
                <FontAwesomeIcon icon={faEye} className='icon-pass' id='confirm_faEye' style={{display: "none"}} onClick={() => showPassword("showpass_2")} />
                <input type="password" style={STYLE.font_family.th} id='confirm_password' name='confirm_password' placeholder='ยืนยันรหัสผ่าน' required />
              </div>
              <div className="input">
                <FontAwesomeIcon icon={faEnvelope} className='icon'/>
                <input type="email" style={STYLE.font_family.th} name="email" placeholder='อีเมล์' required />
              </div>
              <button type="submit" style={STYLE.font_family.th}>สร้างบัญชีใหม่</button> <br />
              <NavLink to={"/pj-dpu-StressCounselingChatbot/login"}>ลงชื่อเข้าใช้</NavLink>
            </div>
          </form>
        </div>
      </div>
      <div className="not-support">
        <p style={STYLE.font_family.en}>Not Support Screen Size ({window.screen.width}x{window.screen.height})</p>
      </div>
    </div>
  )
}

export default Register