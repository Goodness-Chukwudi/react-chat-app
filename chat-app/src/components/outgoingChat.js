import Avatar from '@mui/material/Avatar';

function OutgoingChat(props) {
	return (
        <div className="row pe-3 my-2">
            <div className="col-2">
                <Avatar 
                    alt= "avatar"
                    src= ""
                    sx={{ width: 40, height: 40 }}
                />
            </div>
            <div className="col-10 h6 msg-box rounded">{ props.message.text }</div>
        </div>

	);
}

export default OutgoingChat;
