/* TODO - add your code to create a functional React component that renders a registration form */
import{useState} from "react"
export default function Register({setToken}){
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [username, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);
 
    const postHelper = {
        
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      
      body: JSON.stringify({ email:username, password:password, firstname:firstname, lastname:lastname }),
    };
  
    async function handleSubmit(event) {
      
      event.preventDefault();
      console.log(username)
    console.log(password)
      try {
        const response = await fetch("https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/users/register", postHelper);
        const result = await response.json();
        console.log(result)
        setToken(result.token);
       console.log(result.token)
      } catch (error) {
        setError(error.message);
      }
    }
    return(
        <div> 
        <h2>sign up</h2>
        {error && <p>{error}</p>}
        <form onSubmit={handleSubmit}>
        <label>
                    First Name:
                    <input value={firstname} onChange={(e) => setFirstname(e.target.value)} />
                </label>
            
                <label>
                    Last Name:
                    <input value={lastname} onChange={(e) => setLastname(e.target.value)} />
                </label>
          <label>
            Email: 
            <input value={username} onChange={(e) => setEmail(e.target.value)} />
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
          <button type="submit">Submit</button>
        </form>
        
      </div>
    )
}