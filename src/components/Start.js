import React, { useRef } from "react";

function Start({ setUsername }) {
    const inputRef = useRef();

    const handleClink = () => {
        inputRef.current.value && setUsername(inputRef.current.value);
    };

    return (
        <div className="Start">
            <input
                type="text"
                placeholder="enter your name"
                ref={inputRef}
                className="startInput"
            />
            <button className="startBtn" onClick={handleClink}>
                Start
            </button>
        </div>
    );
}

export default Start;
