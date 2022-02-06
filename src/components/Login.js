import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../slices/useSlice";

function Login() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const dispatch = useDispatch();
    
    let functionCleanup = false;

    const handleSubmit = async (event) => {
        event.preventDefault();

        const res = await axios.post("http://localhost:5000/login", {
            name, email, message
        });

        dispatch(login({
            name,
            email,
            message,
            loggedIn: true
        }));

        alert(res.data);

        if(!functionCleanup) {
            setName("");
            setEmail("");
            setMessage("");
        }
        
        return () => functionCleanup = true;
    }

    return (
        <form className="our_form" onSubmit={(e) => handleSubmit(e)}>
            <h3>Reach out to us!</h3>
            <input type="text" placeholder="Your name*" value={name} onChange={(e) => setName(e.target.value)} />
            <input type="email" placeholder="Your email*" value={email} onChange={(e) => setEmail(e.target.value)} />
            <textarea placeholder="Your message*" value={message} onChange={(e) => setMessage(e.target.value)} ></textarea>
            <button type="submit">Send message</button>
        </form>
    )
}

export default Login;