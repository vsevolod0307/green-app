import React, { useState } from "react";
import Server from "../../service/server";
import "./chat.css";

export default function Chat() {
    const [message, setMessage] = useState("");

    const a = new Server();

    const onInput = (e) => {
        setMessage(message => message = e.target.value)
    }

    const onMessage = () => {
        a.sendMessage("79513817068@c.us", message);
    }

    return (
        <>
            <div className="chat">
                <div className="chat-box"></div>
                <div className="chat-action">
                    <input type="text" value={message} onChange={onInput} />
                    <button className="chat-btn" onClick={onMessage}>send</button>
                </div>
            </div>
        </>
    )
}