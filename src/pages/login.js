import React, { useState } from "react"
import "./pages.css"

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    /*Validation is not implemented yet*/
    const handleSubmit = event => {
        event.preventDefault();
        console.log("Username:", username);
        console.log("Password:", password);
        setUsername("")
        setPassword("")
    }

    return (
        /*This is our submission class which has stylying */
        <div class="submission" > 
                <h2 className="cardT">Login</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label for="username" className="labelLeft">Username</label>
                        <input
                            type="text"
                            className="form-control"
                            id="username"
                            placeholder="Enter username"
                            value={username}
                            onChange={e => setUsername(e.target.value)}
                            required
                        />
                    </div>
                    {/*SO as above we make the indivudal form in the larger form which handles updating the value in our state*/}
                    <div className="form-group">
                        <label for="password" className="labelLeft">Password</label>
                        <input
                            type="password"
                            className="form-control"
                            id="password"
                            placeholder="Enter password"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit" className="btn btn-primary float-right">Submit</button>
                    {/*Once submit is actually pressed the onSubmit class calls handleSubmit which will validate input*/}
                </form>
        </div>
    )
}

export default Login