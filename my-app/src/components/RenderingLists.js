import React from 'react'
import Book from './Book'

function RenderingLists() {
    const bookList = [
        "To kill a mockingbird",
        "The great gatsby",
        "The catcher in the rye"
    ]
    const books = [
        {
            title: "To kill a mockingbird",
            author: "harper lee",
            pages: 281
        },
        {
            title: "the great gatsby",
            author: "f. scott fitzgerald",
            pages: 218
        },
        {
            title: "the catcher in the rye",
            author: "j.d. salinger",
            pages: 234
        },
        {
            title: "Nineteen Eighty-Four",
            author: "George Orwell",
            pages: 215
        }
    ]
  return (
    <div>
        {bookList.map(book => {
            return <h2 key={book}>{book}</h2>})}
        <hr />
        {books.map(book => {
            return <Book key={book.title} book={book} />
        })}
    </div>
  )
}

export default RenderingLists