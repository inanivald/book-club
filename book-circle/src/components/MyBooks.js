import React from 'react'
import { ClipLoader } from 'react-spinners'
import useBooks from '../hooks/useBooks'
import MyBooksView from './MyBooksView'


const MyBooks = () => {
    const { books, loading } = useBooks()

	return (
		<div className="">
					<h2 className="mb-3">My Books</h2>
					{
						loading
							? (<ClipLoader color={"#888"} size={20} />)
							: (<MyBooksView books={books} />)
					}
					
                    
			</div>
        
        
	)
}

export default MyBooks