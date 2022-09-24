import React from "react";


function EyesOnMe() {

    function handleFocus(event) {
        event.preventDefault();
        console.log("Good!");
    }
    
    function handleBlur(event) {
        event.preventDefault();
        console.log("Hey! Eyes on me!");
    }
    
    return (
        <>
            <form>
                <button 
                    onFocus={handleFocus} 
                    onBlur={handleBlur} 
                    onClick={(event) => event.preventDefault()}>
                    Eyes on me
                </button>
            </form>
        </>
    )
}

export default EyesOnMe;
