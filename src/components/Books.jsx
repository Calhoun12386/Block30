/* TODO - add your code to create a functional React component that displays all of the available books in the library's catalog. Fetch the book data from the provided API. Users should be able to click on an individual book to navigate to the SingleBook component and view its details. */
import { useNavigate } from "react-router-dom";
import getData from "../API/api";
import { useState, useEffect } from "react";


export default function Books() {
  const [books, setBooks] = useState();
  useEffect(() => {
    // Fetch books when component mounts
    async function fetchBooks() {
      const result = await getData();
      //console.log(result)
      if (result) {
        setBooks(result.books);
      }

    }
    fetchBooks();
  }, []);

  const navigate= useNavigate()
  const viewDetails = (bookID)=>{
    navigate(`/singlebook/${bookID}`)
}

  return (
    <div>
    <h1>This is the Books Component</h1>
    <div className="books-container">
      {books ? (
        books.map((book) => (
          <div key={book.id} className="book-card">
            <div className="book-image-container">
              <img src={book.coverimage} alt={book.title} className="book-image" />
            </div>
            <div className="book-details">
              <h2>{book.title}</h2>
              <p>{book.author}</p>
              <button onClick={() => viewDetails(book.id)}>View Details</button>
            </div>
          </div>
        ))
      ) : (
        <p>Loading books...</p> 
      )}
    </div>
  </div>

  );
}
