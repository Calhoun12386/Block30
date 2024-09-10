export default async function getData() {
    try {
        const response = await fetch('https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/books', {
          headers: {
            'Content-Type': 'application/json',
          },
        });
        const data = await response.json();
        //console.log(data)
        return data;
      } catch (error) {
        console.error('Error fetching data:', error);
        
      }
}

export async function getDataById(bookId){
    try {
        const response = await fetch(
          `https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/books/${bookId}`
        );
        const data = await response.json();
        //console.log(data)
        return data; 
      } catch (error) {
        console.error("Error fetching player details:", error);
        return null; 
      }
}

export async function fetchCheckedOutBooks(token) {
    try {
      const response = await fetch('https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/reservations', {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`, // Pass token in headers for authentication
        },
      });

      const books = await response.json();
     // console.log(books)
      return books; 
    } catch (error) {
      console.error('Error:', error);
      return []; 
    }
  }

  export async function returnBook(token, reservationId) {
    try {
        const response = await fetch(`https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/reservations/${reservationId}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`, 
            },
        });

        const result = await response.json();
        return result;
    } catch (error) {
        console.error('Error deleting reservation:', error);

    }
}

export async function fetchUserDetails(token) {
  try {
    const response = await fetch('https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/users/me', {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });

    const user = await response.json();
    //console.log(user)
    return user;
  } catch (error) {
    console.error('Error fetching user details:', error);
    return null;
  }
}