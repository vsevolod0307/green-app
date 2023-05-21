import { Component } from "react";

export default class Server extends Component {

    isAuth = false;

    async login(apiTokenInstance, idInstance) {
        await fetch(`https://api.green-api.com/waInstance${idInstance}/getStateInstance/${apiTokenInstance}`, {
            method: "GET"
        }).then(res => res.json())
        .then(json => this.isAuth = json.stateInstance === "authorized")
        .catch(e => console.log(e))
    }

    sendMessage(chatId, message) {
        fetch("https://api.green-api.com/waInstance1101822064/SendMessage/25e2dbfb0c6f40cd9a22da1f3df334557613712db0974cd0a8", {
            method: "POST",
            body: JSON.stringify({
                chatId, message
            })
        })
    }
}