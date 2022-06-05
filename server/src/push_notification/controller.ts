import {MessageRequest, Pinpoint, SendMessagesCommand} from "@aws-sdk/client-pinpoint";
import {Uuid} from "share/gqltype";
import {getConnection} from "typeorm";
import { PushDevice } from "./pushdevice.model";

const AWS_ACCESS_KEY = process.env.AWS_ACCESS_KEY!
const AWS_SECRET_KEY = process.env.AWS_SECRET_KEY!
const AWS_PINPOINT_PROJECT_ID = process.env.AWS_PINPOINT_PROJECT_ID!
const AWS_REGION = process.env.AWS_REGION!

const client = new Pinpoint({
    apiVersion: "",
    region: AWS_REGION,
    credentials: {
        accessKeyId: AWS_ACCESS_KEY,
        secretAccessKey: AWS_SECRET_KEY,
    },
})

export async function get_user_device(user_uuid: Uuid): Promise<PushDevice> {
    return getConnection().getRepository(PushDevice).findOneOrFail({user_uuid})
}

export async function send_notification_to_device(device: PushDevice, title: string, body: string, media_url: string) {
    let addresses: any = {}
    if (device.platform !== 'apns') throw new Error('Other platform not yet supported.')
    addresses[device.token] = {
        ChannelType: {
            'apns': 'APNS_SANDBOX',
        }[device.platform]
    }
    let c = new SendMessagesCommand({
        ApplicationId: AWS_PINPOINT_PROJECT_ID,
        MessageRequest: {
            Addresses: addresses,
            MessageConfiguration: {
                APNSMessage: {
                    Title: title,
                    Body: body,
                    // max dimensions is 1038x1038
                    MediaUrl: media_url,
                },
            }
        }
    })
    let result = await client.send(c)
    console.log('Triggered push notification', result)
}
