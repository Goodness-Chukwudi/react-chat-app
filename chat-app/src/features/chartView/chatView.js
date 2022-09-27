import SendMessage from "../../components/sendMessage";
import UsernamePrompt from "../../components/usernamePrompt";
import { useSelector, useDispatch } from 'react-redux';
import {addChat, getChats} from "./chatSlice"
import ChatBubble from "../../components/chatBubble";
import {useEffect, useState} from "react"

function ChatView() {

    const dispatch = useDispatch();
    const chats = useSelector(getChats);
    // const chats = useSelector((state)=> state.chat.chats);
    const username = sessionStorage.getItem("username");
    const [pageSize, setPagesize] = useState(25);
    const [pagedChats, setPagedChats] = useState([])

    useEffect(() => {
       loadChats();
    //    return ()=> {dispatch(addChat([]))}
      }, [pageSize, pagedChats]);

      function loadChats() {
        const chats = JSON.parse(localStorage.getItem("chats")) || [];
        if (pageSize < chats.length) {
            const index = chats.length - pageSize
            setPagedChats(chats.slice(index))
        } else {
            setPagedChats(chats)
        }

        dispatch(addChat(chats));
      }

    function sendMessage(message) {
        const chats = JSON.parse(localStorage.getItem("chats")) || [];
        const chat = {
            sender: username,
            text: message
        }
        chats.push(chat)
        dispatch(addChat(chats));
    }

    function viewPreviousChat() {
        setPagesize((initialValue) => {
			return initialValue + 25;
		});
    }

    function reload() {
        window.location = "/";
    }

	return (
        <div className="chart-view mx-auto mt-5 rounded shadow-lg position-relative text-light">
            <div className="text-center bold rounded-top bg-color">{username || "Enter a name for reference"}</div>
            {(pageSize < chats.length && <div onClick={viewPreviousChat} className="view-previous text-center alert-secondary w-50 mx-auto p-1"> click to view previous</div>)}
            <div className="chat-container mt-2 mx-auto overflow-scroll">
                { 
                    pagedChats.map((chat, i) => {
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
