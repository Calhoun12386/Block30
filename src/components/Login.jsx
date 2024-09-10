/* TODO - add your code to create a functional React component that renders a login form */
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login({ setToken }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate()
  

  const postHelper = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  };

  async function handleSubmit(event) {
    event.preventDefault();
   

    try {
      const response = await fetch("https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/users/login", postHelper);
      const result = await response.json();
      //console.log(result)
      if (response.ok) {
        setToken(result.token); // Store the token for future authenticated requests
        //console.log("Login successful, token:", result.token);
        
        navigate("/account")

      } else {
        setError(result.message || "Login failed");
      }
    } catch (error) {
      setError(error.message || "Something went wrong.");
    }
  }

  return (
    <div>
        <div>
      <h2>Login</h2>
      {error && <p>{error}</p>}
      <form onSubmit={handleSubmit}>
        <label>
          Email: 
          <input value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <br />
        <label>
          Password: 
          <input 
            type="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
          />
        </label>
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
    </div>
  );
}
