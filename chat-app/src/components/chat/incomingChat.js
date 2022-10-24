import Avatar from '@mui/material/Avatar';

function IncomingChat(props) {
	return (
        <div>
            <span className="username badge rounded-pill bg-secondary"> {props.message.sender} </span>
            <div className="row ps-3 mb-2">
                <div className="col-10 h6 msg-box rounded text-break py-1">
                    {props.message.text}
                </div>
                <div className="col-2">
                    <Avatar 
                        alt= "avatar"
                        src= ""
                        sx={{ width: 40, height: 40 }}
                    />
                </div>
            </div>
        </div>
	);
}

export default IncomingChat;
