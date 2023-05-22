import React, { useEffect, useState } from "react";
import Server from "../../service/server";
import "./chat.css";

export default function Chat(props) {
    const server = new Server();
    const [message, setMessage] = useState("");
    const [history, setHistory] = useState([]);

    useEffect(() => {
        if(props.contactInfo.chatId) {
            async function chatHistory() {
                await server.getChatHistory(props.contactInfo.chatId)
            }
            
            chatHistory()
            .then(() => setHistory(server.chatHistory))
            .catch(console.error)
        }
    }, [props.contactInfo])

    useEffect(() => {
        server.ReceiveNotification();
    })

    useEffect(() => {
        console.log("rdhh")
    }, [history])

    const onInput = (e) => {
        setMessage(message => message = e.target.value)
    }

    const onMessage = async () => {
        setHistory(history => [{textMessage: message, type: "outgoing"}, ...history])
        await server.sendMessage(props.contactInfo.chatId, message);

        setMessage("");
    }

    const boxMessages = history.map(message => {
        return (
            message.textMessage ?
            <div className={message.type === "outgoing" ? "message right" : "message left"} key={message.idMessage}>{message.textMessage}</div> : ""
        )
    })

    return (
        <>
            <div className="chat">
                <div className="chat-contact">
                    <img src={props.contactInfo.avatar} className="chat-avatar"/>
                    <div className="chat-contact-name">{props.contactInfo.name}</div>
                </div>
                <div className="chat-wrap">
                    <div className="chat-box">{boxMessages}</div>
                </div>
                <div className="chat-action">
                    <input type="text" value={message} onChange={onInput} />
                    <button className="chat-btn" onClick={onMessage}>send</button>
                </div>
            </div>
        </>
    )
}