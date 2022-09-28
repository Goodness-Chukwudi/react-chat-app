import SendMessage from "../../components/sendMessage";
import UsernamePrompt from "../../components/usernamePrompt";
import { useSelector, useDispatch } from "react-redux";
import { addChat, getChats } from "./chatSlice";
import ChatBubble from "../../components/chatBubble";
import { useEffect, useState } from "react";

function ChatView() {
  const dispatch = useDispatch();
  let chats = useSelector(getChats);
  // const chats = useSelector((state)=> state.chat.chats);
  const [user, setUser] = useState(sessionStorage.getItem("username"));
  const [pageSize, setPagesize] = useState(25);
  const [pagedChats, setPagedChats] = useState([]);

  useEffect(() => {
    setDisplayedChats();
  }, [pageSize]);

  function setDisplayedChats() {
    chats = JSON.parse(localStorage.getItem("chats")) || [];
    if (pageSize < chats.length) {
      const index = chats.length - pageSize;
      setPagedChats(chats.slice(index));
    } else {
      setPagedChats(chats);
    }
  }

  function sendMessage(message) {
    const chat = {
      sender: user,
      text: message,
    };
    dispatch(addChat(chat));
    setDisplayedChats();
  }

  function viewPreviousChat() {
    setPagesize((initialValue) => {
      return initialValue + 25;
    });
  }

  function setUsername(username) {
    setUser(username);
  }

  return (
    <div className="chart-view mx-auto mt-5 rounded shadow-lg position-relative text-light">
      <div className="text-center bold rounded-top bg-color">
        {user || "Enter a name for reference"}
      </div>
      {pageSize < chats.length && (
        <div
          onClick={viewPreviousChat}
          className="view-previous text-center alert-secondary w-50 mx-auto p-1"
        >
          click to view previous
        </div>
      )}
      <div className="chat-container mt-2 mx-auto overflow-auto">
        {pagedChats.map((chat, i) => {
          return (
            user && (
              <ChatBubble
                message={chat}
                isOwnMessage={user == chat.sender}
                key={i}
              />
            )
          );
        })}
      </div>
      <UsernamePrompt user={user} onDone={setUsername} />
      <SendMessage onSend={sendMessage} user={user} />
    </div>
  );
}

export default ChatView;
