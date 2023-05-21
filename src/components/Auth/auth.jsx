import React, { useState } from "react";
import "./auth.css";
import Server from "../../service/server";
import { redirect } from "react-router-dom";

export default function Auth() {
    const [auth, setAuth] = useState(false);
    const [id, setId] = useState("");
    const [token, setToken] = useState("");
    const server = new Server();

    async function onValueAuth(event) {
        event.preventDefault();
        try {
            await server.login(token, id);
            setId("");
            setToken("");
            // if(server.isAuth) {
            //     redirect("/home")
            // }
        } catch(e) {
            console.log(e.code)
        }
    }

    function onChangeValue(event) {
        if (event.target.name === "id") {
            setId(event.target.value)
        }
        if (event.target.name === "token") {
            setToken(event.target.value)
        }
    }

    return (
        <div className="auth">
            <form className="auth-form" onSubmit={onValueAuth}>
                <input type="number" placeholder="idInstance" name="id" value={id} onChange={onChangeValue} />
                <input type="text" placeholder="apiTokenInstance" name="token" value={token} onChange={onChangeValue} />
                <button type="submit">Auth</button>
            </form>
        </div>
    )
}