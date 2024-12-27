import React from 'react'
import { NavLink } from 'react-router-dom'

function Test() {
    return (
        <div>
            <h1>Test Router</h1>
            <NavLink to={"/pj-dpu-StressCounselingChatbot/"}>Home</NavLink> <br />
            <NavLink to={"/pj-dpu-StressCounselingChatbot/register"}>Register</NavLink> <br />
            <NavLink to={"/pj-dpu-StressCounselingChatbot/login"}>Login</NavLink> <br />
            <NavLink to={"/pj-dpu-StressCounselingChatbot/setting"}>Setting</NavLink> <br />
            <NavLink to={"/pj-dpu-StressCounselingChatbot/chat"}>Chat</NavLink> <br />
            <NavLink to={"/pj-dpu-StressCounselingChatbot/admin"}>Admin</NavLink>
        </div>
    )
}

export default Test