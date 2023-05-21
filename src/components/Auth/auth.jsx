import React, { useState } from "react";
import "./auth.css";
import Server from "../../service/server";
import { Navigate, redirect } from "react-router-dom";

export default function Auth(props) {
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
            setAuth(server.isAuth)
        } catch(e) {
            console.log(e)
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
        <>
        {auth ? <Navigate to="/home"/>
        :
        <div className="auth">
            <form className="auth-form" onSubmit={onValueAuth}>
                <input type="number" placeholder="idInstance" name="id" value={id} onChange={onChangeValue} />
                <input type="text" placeholder="apiTokenInstance" name="token" value={token} onChange={onChangeValue} />
                <button type="submit">Auth</button>
            </form>
        </div>}
        </>
    )
}