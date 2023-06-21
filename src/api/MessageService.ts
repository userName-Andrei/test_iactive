import { IResponseMessage, IMessage } from "../types/messageTypes";
import axios from "../utils/axios";

export class MessageService {
    static async getFirstMessages() {
        const res = await axios.post<IResponseMessage>("", {
            actionName: "MessagesLoad",
            messageId: 0,
        });

        if (res.status !== 200) console.error(res.data);

        return res;
    }

    static async getNewMessage(lastMessageId: string | number) {
        const res = await axios.post<
            Pick<IResponseMessage, "Messages"> | string
        >("", {
            actionName: "MessagesLoad",
            messageId: lastMessageId,
        });

        if (res.status !== 200) console.error(res.data);

        return res;
    }

    static async getOldMessages(lastMessageId: string | number) {
        const res = await axios.post("", {
            actionName: "MessagesLoad",
            oldMessages: true,
            messageId: lastMessageId,
        });

        console.error(res.data);

        return res;
    }
}
