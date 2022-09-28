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
      const chats = JSON.parse(localStorage.getItem("chats")) || []
      chats.push(action.payload);
      localStorage.setItem("chats", JSON.stringify(chats));
      state.chats.push(action.payload);
    },
  },
});

export const getChats = (state) => state.chat.chats;

export const { addChat } = chatSlice.actions;

export default chatSlice.reducer;
