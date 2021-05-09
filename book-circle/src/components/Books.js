import React from 'react'
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
				<div className="padding-x-row padding-y-row">
					<h2 className="mb-3">All Books</h2>
					{
						loading
							? (<ClipLoader color={"#888"} size={20} />)
							: (<BooksView books={books} />)
					}
					<div className="mt-3">
						<Link to="/read-books">See all read books </Link>|<Link to="/unread-books"> See all unread books</Link>
					</div>
			</div>
		</div>
	)
}

export default Books