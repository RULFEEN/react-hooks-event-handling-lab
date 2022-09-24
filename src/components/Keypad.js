import React from "react";

function Keypad (){

    function handleEvent(event) {
        event.preventDefault();
        console.log("Entering password...");
    }

    return (
        <div>
            <form>
                <input type="password" 
                name="password" 
                placeholder="Password"
                onChange={handleEvent} />
                <button onClick={(event) => event.preventDefault()}>Render</button>
            </form>
        </div>
    )
}

export default Keypad;