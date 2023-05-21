import React, { useEffect, useState } from "react";
import "./sidebar.css";
import Server from "../../service/server";

export default function Sidebar() {
    const [phone, setPhone] = useState("")
    const [contactInfo, setContactInfo] = useState({})
    const server = new Server();
    // useEffect(() => {
    //     a.login();
    // }, [])
    function onValue(event) {
        setPhone(event.target.value)
    }

    async function onSearchContact(event) {
        event.preventDefault();
        await server.getContactInfo("25e2dbfb0c6f40cd9a22da1f3df334557613712db0974cd0a8", "1101822064", `${phone}@c.us`)
        setContactInfo(server.contactInfo)
    }

    return (
        <>
            <aside>
                <form action="" onSubmit={onSearchContact}>
                    <input type="text" placeholder="example 79992422143" value={phone} onChange={onValue} />
                    <button type="submiy">search</button>
                </form>
            </aside>
        </>
    )
}