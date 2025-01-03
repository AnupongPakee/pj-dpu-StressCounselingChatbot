import React from 'react'
import { NavLink } from 'react-router-dom'

import STYLE from "../style/Style"

function Test() {
    return (
        <div className='c-test'>
            <div>
                <h1 style={STYLE.font_family.en}>Router</h1>
                <NavLink to={"/pj-dpu-StressCounselingChatbot/"} style={STYLE.font_family.en}>Home (complete)</NavLink> <br />
                <NavLink to={"/pj-dpu-StressCounselingChatbot/register"} style={STYLE.font_family.en}>Register (complete)</NavLink> <br />
                <NavLink to={"/pj-dpu-StressCounselingChatbot/login"} style={STYLE.font_family.en}>Login (complete)</NavLink> <br />
                <NavLink to={"/pj-dpu-StressCounselingChatbot/setting"} style={STYLE.font_family.en}>Setting (complete)</NavLink> <br />
                <NavLink to={"/pj-dpu-StressCounselingChatbot/chat"} style={STYLE.font_family.en}>Chat</NavLink> <br />
                <NavLink to={"/pj-dpu-StressCounselingChatbot/admin"} style={STYLE.font_family.en}>Admin</NavLink>
            </div>
        </div>
    )
}

export default Test