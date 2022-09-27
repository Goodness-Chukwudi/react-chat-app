import IncomingChat from "./incomingChat";
import OutgoingChat from "./outgoingChat";

function ChatBubble(props) {
    if (props.isOwnMessage) {
        return (
            <div className="container">
                <OutgoingChat message= {props.message} />
            </div>
        );
    } else {
        return (
            <div className="container">
                <IncomingChat message= {props.message} />
            </div>
        );
    }
}

export default ChatBubble;
