import { Component } from "react";

export default class Autentification extends Component {

    login() {
        fetch("https://api.green-api.com/waInstance1101822064/getStatusInstance/25e2dbfb0c6f40cd9a22da1f3df334557613712db0974cd0a8", {
            method: "GET"
        })
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