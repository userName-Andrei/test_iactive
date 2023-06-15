import axios from "../utils/axios";

const URL = "http://a0830433.xsph.ru/";

export class MessageService {
    static async getFirstMessages() {
        const res = await axios.post(URL, {
            actionName: "MessagesLoad",
            messageId: 0,
        });

        return res.data();
    }

    static async getNewMessage(lastMessageId: string | number) {
        const res = await axios.post(URL, {
            actionName: "MessagesLoad",
            messageId: lastMessageId,
        });

        return res.data();
    }

    static async getOldMessages(lastMessageId: string | number) {
        const res = await axios.post(URL, {
            actionName: "MessagesLoad",
            oldMessages: true,
            messageId: lastMessageId,
        });

        return res.data();
    }
}
