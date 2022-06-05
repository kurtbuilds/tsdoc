import {send_notification_to_user} from "../src/push_notification/pushnotification.controller"

;(async () => {
    await send_notification_to_user("title")
})()