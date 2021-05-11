import React from 'react'
import { ClipLoader } from 'react-spinners'
import useBooks from '../hooks/useBooks'
import UnreadBooksView from './UnreadBooksView'
import Header from './Header'
import { Link } from 'react-router-dom'

const UnreadBooks = () => {
    const { books, loading } = useBooks()

	return (
		<div className="">
			<Header className="p-5"/>
				<div className="padding-x-row padding-y-row">
					<h2 className="mb-3">All Unread Books</h2>
					{
						loading
							? (<ClipLoader color={"#888"} size={20} />)
							: (<UnreadBooksView books={books} />)
					}
					<div className="mt-3">
						<Link to="/books" className="btn theme-btn mr-3 mb-5">See all books </Link>
					</div>
			</div>
		</div>
	)
}

export default UnreadBooks