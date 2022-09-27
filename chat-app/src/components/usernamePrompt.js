
function UsernamePrompt(props) {

    if (props.user) {
        return (<></>);
    } else {
        return (
            <div className="">
                <div className="bg-color position-absolute top-50 start-50 translate-middle w-75 rounded p-2">
                    <span className="ps-3">Enter your name to continue</span> 
                    <div className="input-group container d-flex justify-content-between my-1">     
                        <input type="text" className="form-control col-9 rounded me-2" aria-label="message" name="message"></input>
                        <button type="button" className="col-3 btn btn-sm btn-outline-light rounded-pill" >Done</button>
                    </div>     
                </div>
            </div>
        );
    }
}

export default UsernamePrompt;
