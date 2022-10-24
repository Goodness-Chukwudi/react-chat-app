import {useState} from "react";

function SendMessage(props) {

    const [message, setMessage] = useState("");

    function handleChange(e) {
		setMessage(e.target.value)
	}

    function send() {
        if(message) {
            props.onSend(message);
            setMessage("");
        }
    }

    if (props.user) {
        return (
            <div className="bg-color position-absolute bottom-0 start-0 rounded-bottom w-100 py-3">
                <div className="input-group  container d-flex justify-content-between">     
                    <input type="text" 
                        className="form-control col-10 rounded-pill me-2"
                        aria-label="message" name="message"
                        onChange={handleChange}
                        value={message}
                        ></input>
                    
                    <button type="button"
                        className="col-2 btn btn-sm btn-outline-light rounded-pill"
                        onClick={() => send()}
                    >
                        send
                    </button>
                </div>
            </div>
        );
    } else {
        return <></>
    }
}

export default SendMessage;
