import React from 'react'
import { useAuth } from '../contexts/AuthContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

const MyBooksView = ({ books }) => {

    const { currentUser } = useAuth()

	const myBooks = books.filter(book => book.owner === currentUser.uid)

	return (
	
	<>
    <p>You have added {books.length} books to the list.</p>
		
			{myBooks.map(book => (
            
                <ul>
                    
                    <li><FontAwesomeIcon className="heart" icon={faHeart} size="m"/>
                    <p className="">Title: {book.title}<br/>
                    Author: {book.authors}</p>
                    </li>
                    <li>
				        <span class="divider"></span>
			        </li>
                </ul>
				
			))}
			
		
	</>
	
	)
}

export default MyBooksView
