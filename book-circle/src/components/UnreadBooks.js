import React from 'react'
import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { ClipLoader } from 'react-spinners'
import useBooks from '../hooks/useBooks'
import UnreadBooksView from './UnreadBooksView'
import { Link } from 'react-router-dom'

const UnreadBooks = () => {
	const navigate = useNavigate();
    const { books, loading } = useBooks()

	const handleClick = () => {
		navigate(`/search`)
	}
	
	return (
		<div className="">
			
			<p>Do you want to add a book to the book list?</p>
			<Button className="btn btn-standard" size="lg" onClick={handleClick}>
                Search
            </Button>

			<h2 className="mb-3">All Unread Books</h2>

			{
				loading
					? (<ClipLoader color={"#888"} size={20} />)
					: (<UnreadBooksView books={books} />)
			}
            <Link to="/books">See all books</Link>

			
		</div>
	)
}

export default UnreadBooks