import React from 'react'
import { Container } from 'react-bootstrap'
import { ClipLoader } from 'react-spinners'
import useBooks from '../hooks/useBooks'
import UnreadBooksView from './UnreadBooksView'
import { Link } from 'react-router-dom'

const UnreadBooks = () => {
    const { books, loading } = useBooks()

	return (
		<div className="">
			{
				loading
					? (<ClipLoader color={"#888"} size={20} />)
					: (<UnreadBooksView books={books} />)
			}
			<Container className="py-3">
            	<Link to="/books">See all books</Link>
			</Container>
			
		</div>
	)
}

export default UnreadBooks