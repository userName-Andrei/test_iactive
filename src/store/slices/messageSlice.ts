import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IResponseMessage, IMessage } from "../../types/messageTypes";
import { MessageService } from "../../api/MessageService";

interface MessageSliceState {
    messages: IMessage[];
    lastMessageId: string;
}

const initialState: MessageSliceState = {
    messages: [],
    lastMessageId: "",
};

export const fetchFirstMessages = createAsyncThunk<IResponseMessage>(
    "messages/fetchFirstMessages",
    async () => {
        const messages = await MessageService.getFirstMessages();

        return messages.data;
    }
);

export const fetchNewMessage = createAsyncThunk<
    Pick<IResponseMessage, "Messages"> | string,
    string | number
>("messages/fetchNewMessage", async (id) => {
    const response = await MessageService.getNewMessage(id);

    return response.data;
});

const messageSlice = createSlice({
    name: "messages",
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(fetchFirstMessages.fulfilled, (state, action) => {
                state.messages = action.payload.Messages;
                state.lastMessageId =
                    action.payload.Messages[
                        action.payload.Messages.length - 1
                    ].id;
            })
            .addCase(fetchNewMessage.fulfilled, (state, action) => {
                if (typeof action.payload !== "string") {
                    state.messages = [
                        ...state.messages,
                        ...action.payload.Messages,
                    ];
                    state.lastMessageId = `${
                        action.payload.Messages[
                            action.payload.Messages.length - 1
                        ].id
                    }`;
                }
            });
    },
});

export default messageSlice.reducer;
