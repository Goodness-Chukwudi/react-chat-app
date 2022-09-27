import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  chats: [],
};

export const chatSlice = createSlice({
  name: 'chat',
  initialState,

  reducers: {
    deleteChat: (state) => {

    },

    addChat: (state, action) => {
      const chats = action.payload;
      localStorage.setItem("chats", JSON.stringify(chats));
      state.chats = chats;
    },
  },
});

export const getChats = (state) => state.chat.chats;

export const { addChat } = chatSlice.actions;

export default chatSlice.reducer;
