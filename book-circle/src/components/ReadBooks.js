import React from 'react'
import { ClipLoader } from 'react-spinners'
import useBooks from '../hooks/useBooks'
import ReadBooksView from './ReadBooksView'
import { Link } from 'react-router-dom'
import { Container } from 'react-bootstrap'


const ReadBooks = () => {
    const { books, loading } = useBooks()

	
	
	return (
		<>
		

			{
				loading
					? (<ClipLoader color={"#888"} size={20} />)
					: (<ReadBooksView books={books} />)
			}
		<Container className="py-3">
            <Link to="/books">See all books</Link>

			
		</Container>
		</>
	)
}

export default ReadBooks