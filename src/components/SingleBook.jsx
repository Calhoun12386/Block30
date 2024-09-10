/* TODO - add your code to create a functional React component that renders details for a single book. Fetch the book data from the provided API. You may consider conditionally rendering a 'Checkout' button for logged in users. */
import { useParams } from "react-router-dom"
import {useState, useEffect} from "react"
import {getDataById} from "../API/api"

export default function SingleBook({token}) {
  const { bookId } = useParams();
  //console.log(bookId)
  const [book, setBook] = useState({});
  const [message, setMessage] = useState("message not set");

  useEffect(() => {
    async function fetchBook() {
      const data = await getDataById(bookId);
      setBook(data.book);
    }

    fetchBook();
  }, [bookId]);

  //console.log(book);
  

 // Handle checkout logic
 async function handleCheckout(bookId) {
    console.log("handlecheckout")
    console.log(token)
     if (token===null) {
      setMessage("Please log in to check out this book.");
      console.log(message)
      return;
    } 

    try {
      const response = await fetch(`https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/books/${bookId}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`, 
        },
        body: JSON.stringify({
            available: false,
       })
      });

      const result = await response.json();
      console.log(result)
      if (response.ok) {
        setBook((book)=>({...book, available:false,})); //update local state
        setMessage("Book checked out successfully!");
      } else {
        setMessage(result.message || "Unable to check out the book.");
      }
    } catch (error) {
      setMessage("Error checking out the book.");
    }
  }



  return (
    <div className="single-book">
      <h1>Single Book</h1>
      <div className="book-card">
      {
  book.available ? (
    <button onClick={() => handleCheckout(book.id)}>
      Checkout
    </button>
  ) : (
    <p>Book not available</p>
  )
}
        <div className="book-image-container">
          <img src={book.coverimage} alt={book.title} className="book-image" />
        </div>
        <div className="book-details">
          <h2>{book.title}</h2>
          <p>Author: {book.author}</p>
          <p>Description: {book.description}</p>

        </div>
      </div>
    </div>
  );
}