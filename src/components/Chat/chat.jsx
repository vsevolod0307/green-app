import React, { useEffect, useState } from "react";
import Server from "../../service/server";
import "./chat.css";

export default function Chat(props) {
    const [message, setMessage] = useState("");

    const server = new Server();

    useEffect(() => {
        if(props.contactInfo.chatId) {
            server.getChatHistory(props.contactInfo.chatId);
        }
    }, [props.contactInfo])

    const onInput = (e) => {
        setMessage(message => message = e.target.value)
    }

    const updateBoxMessages = () => {
        console.log(server.chatHistory)
    }

    useEffect(() => {
        updateBoxMessages()
    })

    const onMessage = () => {
        server.sendMessage(props.contactInfo.chatId, message);
    }

    return (
        <>
            <div className="chat">
                <div className="chat-contact">
                    <img src={props.contactInfo.avatar} className="chat-avatar"/>
                    <div className="chat-contact-name">{props.contactInfo.name}</div>
                </div>
                <div className="chat-box"></div>
                <div className="chat-action">
                    <input type="text" value={message} onChange={onInput} />
                    <button className="chat-btn" onClick={onMessage}>send</button>
                </div>
            </div>
        </>
    )
}