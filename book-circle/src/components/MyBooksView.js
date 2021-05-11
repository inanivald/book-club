import React, { useState } from 'react'
import { useAuth } from '../contexts/AuthContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import useDeleteBook from '../hooks/useDeleteBook'


const MyBooksView = ({ books }) => {

    const { currentUser } = useAuth()
    const [deleteBook, setDeleteBook] = useState(null);
	useDeleteBook(deleteBook);

	const handleDeleteBook = (book) => {

		// eslint-disable-next-line no-restricted-globals
		if (confirm(`Are you sure you want to delete the book\n"${book.title}"?`)) {
			setDeleteBook(book);

		}
	}

	const myBooks = books.filter(book => book.owner === currentUser.uid)

	return (
	
	<>
    <p className="ingress">You have added {myBooks.length} books to the list.</p>
    <ul>
			{myBooks.map(book => (
           <>
                <li class="border-bottom mt-3"><FontAwesomeIcon className="heart" icon={faHeart} size="m"/>
                <p className=""><span className="strong">Title: </span>{book.title}<br/>
                <span className="strong">Author: </span>{book.authors}</p>
               
                {
									currentUser.uid === book.owner && (
										<>
										<button className="mb-3 btn theme-btn btn-red" onClick={() => {
											handleDeleteBook(book)
										}}>
											Delete
										</button>
										</>
									)
								}
              
              </li>
				</>
			))}
             </ul>
			
		
	</>
	
	)
}

export default MyBooksView
