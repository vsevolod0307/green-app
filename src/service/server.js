import { Component } from "react";

export default class Server extends Component {

    isAuth = false;
    contactInfo = null;
    chatHistory = null;
    id = "";
    token = "";

    get idInstance() {
        return localStorage.getItem("id");
    }

    get apiTokenInstance() {
        return localStorage.getItem("token");
    }

    async login(apiTokenInstance, idInstance) {
        localStorage.setItem("id", idInstance);
        localStorage.setItem("token", apiTokenInstance);
        await fetch(`https://api.green-api.com/waInstance${idInstance}/getStateInstance/${apiTokenInstance}`, {
            method: "GET"
        }).then(res => res.json())
        .then(json => this.isAuth = json.stateInstance === "authorized")
        .catch(e => console.log(e))
    }

    sendMessage(chatId, message) {
        fetch(`https://api.green-api.com/waInstance${this.idInstance}/SendMessage/${this.apiTokenInstance}`, {
            method: "POST",
            body: JSON.stringify({
                chatId, message
            })
        })
    }

    getChatHistory(chatId) {
        fetch(`https://api.green-api.com/waInstance${this.idInstance}/GetChatHistory/${this.apiTokenInstance}`, {
            method: "POST",
            body: JSON.stringify({chatId, 
                count: 12
            })
        })
    }

    async getContactInfo(chatId) {
        await fetch(`https://api.green-api.com/waInstance${this.idInstance}/getContactInfo/${this.apiTokenInstance}`, {
            method: "POST",
            body: JSON.stringify({chatId})
        }).then(res => res.json())
        .then(json => this.contactInfo = json)
    }
}