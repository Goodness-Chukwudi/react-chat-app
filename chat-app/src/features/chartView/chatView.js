import SendMessage from "../../components/sendMessage";
import UsernamePrompt from "../../components/usernamePrompt";
import { useSelector, useDispatch } from 'react-redux';
import {addChat, getChats} from "./chatSlice"
import ChatBubble from "../../components/chatBubble";
import {useEffect} from "react"

function ChatView() {

    const dispatch = useDispatch();
    const chats = useSelector(getChats);
    const username = sessionStorage.getItem("username");

    useEffect(() => {
       loadChats();
      }, []);

      function loadChats() {
        const chats = JSON.parse(localStorage.getItem("chats")) || [];
        dispatch(addChat(chats));
      }

    function sendMessage(message) {
        const chat = {
            sender: username,
            text: message
        }
        dispatch(addChat(chat));
    }

    function reload() {
        window.location = "/";
    }

	return (
        <div className="chart-view mx-auto mt-5 rounded shadow-lg position-relative text-light">
            <div className="text-center bold rounded-top bg-color">{username || "Enter a name for reference"}</div>
            <div className="ms-4 mx-auto h-75 overflow-scroll">
                { 
                    chats.map((chat, i) => {
                        return (username && <ChatBubble message= {chat} isOwnMessage= {username == chat.sender} key= {i} />)
                    })
                 }
            </div>
            <UsernamePrompt user= {username} onDone= { reload } />
            <SendMessage onSend= {sendMessage} user= {username} />
        </div>
	);
}

export default ChatView;
