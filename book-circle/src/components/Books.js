import React from 'react'
import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { ClipLoader } from 'react-spinners'
import useBooks from '../hooks/useBooks'
import BooksView from './BooksView'
import { Link } from 'react-router-dom'

const Books = () => {
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

			<h2 className="mb-3">All Books</h2>

			{
				loading
					? (<ClipLoader color={"#888"} size={20} />)
					: (<BooksView books={books} />)
			}
            <Link to="/read-books">See all read books </Link>|<Link to="/unread-books"> See all unread books</Link>

			
		</div>
	)
}

export default Books