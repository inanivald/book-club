import React from 'react'
import { ClipLoader } from 'react-spinners'
import useBooks from '../hooks/useBooks'
import ReadBooksView from './ReadBooksView'
import { Link } from 'react-router-dom'

const ReadBooks = () => {
    const { books, loading } = useBooks()

	return (
		<>
			{
				loading
					? (<ClipLoader color={"#888"} size={20} />)
					: (<ReadBooksView books={books} />)
			}
		<div className="padding-x-row padding-y-row">
            <Link to="/books">See all books</Link>
	
		</div>
		</>
	)
}

export default ReadBooks