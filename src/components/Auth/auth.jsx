import React from "react";

export default function Auth() {
    return (
        <div className="auth">
            <form className="auth-form">
                <label htmlFor=""></label>
                <input type="number" placeholder="idInstance" />
                <label htmlFor=""></label>
                <input type="text" placeholder="apiTokenInstance" />
                <button type="submit">Auth</button>
            </form>
        </div>
    )
}