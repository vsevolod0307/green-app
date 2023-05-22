import React, { useEffect, useState } from "react";
import "./sidebar.css";
import Server from "../../service/server";

export default function Sidebar(props) {
    const [phone, setPhone] = useState("")
    const [contactInfo, setContactInfo] = useState({})
    const server = new Server();
    // useEffect(() => {
    //     a.login();
    // }, [])
    function onValue(event) {
        setPhone(event.target.value)
    }

    useEffect(() => {
        props.updateContactInfo(contactInfo)
    }, [contactInfo])

    async function onSearchContact(event) {
        event.preventDefault();
        await server.getContactInfo(`${phone}@c.us`)
        await setContactInfo(server.contactInfo)
    }

    return (
        <>
            <aside>
                <form action="" onSubmit={onSearchContact}>
                    <input type="text" placeholder="example 79992422143" value={phone} onChange={onValue} />
                    <button type="submit">search</button>
                </form>
            </aside>
        </>
    )
}