
export type MessageType = ""

// receive_message_to_webkit is declared within the iOS project!
export function send_message(name: MessageType, data: object) {
    (window as any).webkit.messageHandlers.receive_message_to_webkit.postMessage({
        name, data,
    })
}
