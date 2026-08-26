import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Contact() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [error, setError] = useState("");

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        if (name === "" || email === "") {
            setError("Please enter your name and email.");
            return;
        }

        setError("");
        navigate("/thank-you");
    };

    return (
        <div>
            <h1>Contact</h1>

            <form onSubmit={handleSubmit}>
                <label>Name:</label>
                <br />
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />

                <br />
                <br />

                <label>Email:</label>
                <br />
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <br />
                <br />

                <label>Message:</label>
                <br />
                <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                />

                <br />
                <br />

                {error && <p>{error}</p>}

                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default Contact;