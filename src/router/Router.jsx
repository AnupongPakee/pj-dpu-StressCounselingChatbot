import { createBrowserRouter } from "react-router-dom";

import APP from "../App"
import REGISTER from "../components/Register"
import LOGIN from "../components/Login"
import SETTING from "../components/Setting"
import CHAT from "../components/Chat"
import ADMIN from "../admin/Admin"
import TEST from "../test/Test"

const router = createBrowserRouter([
    {
        path: "/pj-dpu-StressCounselingChatbot/",
        element: <APP/>
    },
    {
        path: "/pj-dpu-StressCounselingChatbot/register",
        element: <REGISTER/>
    },
    {
        path: "/pj-dpu-StressCounselingChatbot/login",
        element: <LOGIN/>
    },
    {
        path: "/pj-dpu-StressCounselingChatbot/setting",
        element: <SETTING/>
    },
    {
        path: "/pj-dpu-StressCounselingChatbot/chat",
        element: <CHAT/>
    },
    {
        path: "/pj-dpu-StressCounselingChatbot/admin",
        element: <ADMIN/>
    },
    {
        path: "/pj-dpu-StressCounselingChatbot/test",
        element: <TEST/>
    }
])

export default router;