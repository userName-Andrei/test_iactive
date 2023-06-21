export interface IResponseMessage {
    Messages: IMessage[];
    dislikeImages: [];
    likeImages: [];
}

export interface IMessage {
    id: string;
    date: string;
    author: string;
    region: string;
    channel: string;
    content: string;
    attachments: IMessageAttachment[];
}

export interface IMessageAttachment {
    type: string;
    url: string;
}
