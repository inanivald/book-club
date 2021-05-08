import React from 'react'
import { Container, Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { ClipLoader } from 'react-spinners'
import useBooks from '../hooks/useBooks'
import BooksView from './BooksView'
import Header from './Header'
import { Link } from 'react-router-dom'

const Books = () => {

	const { books, loading } = useBooks()

	

	return (
		<div className="">
			<Header className="p-5"/>
				<Container className="py-3">
					<h2 className="mb-3">All Books</h2>
					{
						loading
							? (<ClipLoader color={"#888"} size={20} />)
							: (<BooksView books={books} />)
					}
					<Link to="/read-books">See all read books </Link>|<Link to="/unread-books"> See all unread books</Link>
			</Container>
		</div>
	)
}

export default Books