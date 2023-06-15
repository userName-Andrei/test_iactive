export interface IMessage {
    id: string;
    date: string;
    author: string;
    region: string;
    channel: string;
    content: string;
    attachments: IMessageAttachment[];
}

interface IMessageAttachment {
    type: string;
    url: string;
}
