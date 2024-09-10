import { Routes, Route } from "react-router-dom";
import Books from "./Books";
import Login from "./Login";
import SingleBook from "./SingleBook"
import Register from "./Register"
import Account from "./Account"




export default function Router({token, setToken}) {
  return (

<div id="main-section">
          <Routes>
              <Route path="/" element={<Books/>}> </Route>
              <Route path="/singlebook/:bookId" element={<SingleBook token={token}/>}></Route>
              <Route path="/register" element={<Register/>}/>
              <Route path="/login" element={<Login setToken={setToken}/>}></Route>
              <Route path="/account" element={<Account token={token}/>}/>
              
          </Routes>
      </div>

  )
}