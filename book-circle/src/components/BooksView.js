import React, { useState } from 'react'
import { Row, Col, Card, Button, Alert } from 'react-bootstrap'
import { useAuth } from '../contexts/AuthContext'
import useDeleteBook from '../hooks/useDeleteBook'
import { db } from '../firebase';


const BooksView = ({ books }) => {
	const [deleteBook, setDeleteBook] = useState(null);
	const [error, setError] = useState(false);
	const { currentUser } = useAuth()
	useDeleteBook(deleteBook);

	const handleDeleteBook = (book) => {

		// eslint-disable-next-line no-restricted-globals
		if (confirm(`Are you sure you want to delete the book\n"${book.title}"?`)) {
			setDeleteBook(book);

		}
	}

	const handleUpdateBook = async (book) => {
    
		if (book.read === false) {

			try {
				await db.collection('books').doc(book.id).update({
					read: true,
				});
			} catch (err) {
				console.error("The title could not be updated. Please try again.")
			}
		  } else {
			try {
				await db.collection('books').doc(book.id).update({
					read: false,
				});

	
			} catch (err) {
				setError(err.message);			
			}
		  }
		
	}


	
	
	return (
	
	<>
		<Row>
	
			{books.map(book => (
				<Col md={6} lg={3} key={book.id}>
					<Card className="mb-3 h-100">
						
						<Card.Img variant="top" src={book.thumbnail} title={book.title} className="img-fluid"/>
						
						<Card.Body>
							<Card.Title><span className="strong">Title: </span>
							<a href={book.infoLink}
              					className="btn-link"
								color="default"
								type="button"
								target="_blank'rel='noopener noreferrer">
								{book.title}
							</a>
								
							</Card.Title>
							<div>
								{
									currentUser.uid === book.owner && (
										<>
										<button className="mb-1 btn btn-outline-danger btn-sm" onClick={() => {
											handleDeleteBook(book)
										}}>
											Delete
										</button>
										</>
									)
								}
							
							{
								book.read
								? <button className="mb-1 ml-1 btn btn-outline-success btn-sm" size="sm mt-3" 
								onClick={() => {handleUpdateBook(book)}}>Read</button>
								: <button className="mb-1 ml-1 btn btn-outline-danger btn-sm" size="sm mt-3" 
								onClick={() => {handleUpdateBook(book)}}>Unread</button>
							}
							
							{
                            error && (
                                <Alert variant="danger">{error}</Alert>
                            )
                        }
						</div>
						<div>
							Book was added by: {book.addedBy}
						</div>
						</Card.Body>
					</Card>
				</Col>
				
			))}
		</Row>
	</>
	
	)
}

export default BooksView
