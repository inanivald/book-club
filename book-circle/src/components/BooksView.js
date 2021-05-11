import React, { useState } from 'react'
import { Row, Col, Card, Alert } from 'react-bootstrap'
import { db } from '../firebase';


const BooksView = ({ books }) => {

	const [error, setError] = useState(false);

	const handleUpdateBook = async (book) => {
    
		if (book.read === false) {

			try {
				await db.collection('books').doc(book.id).update({
					read: true,
				});
			} catch (err) {
				setError(err.message);
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
				<Col className="mb-3" md={6} lg={3} key={book.id}>
					<Card className="mb-3 h-100">
						
						<Card.Img variant="top" src={book.thumbnail} title={book.title} className="img-fluid"/>
						
						<Card.Body className="books">
							<Card.Title><p><span className="strong">Title:&nbsp;</span>
							<a href={book.infoLink}
              					className="btn-link"
								color="default"
								type="button"
								target="_blank" rel="noopener noreferrer">
								 {book.title}
							</a>
							</p>
							<p><span className="strong">Author:&nbsp;</span>
							 {book.authors}
							</p></Card.Title>
							<div>
							
							{
								book.read
								? <button href="" className="mb-1 ml-1 btn theme-btn btn-green" size="sm mt-3" 
								onClick={() => {handleUpdateBook(book)}}>Read</button>
								: <button href="" className="mb-1 ml-1 btn theme-btn btn-sm btn-red" size="sm mt-3" 
								onClick={() => {handleUpdateBook(book)}}>Unread</button>
							}
							
							{
                            error && (
                                <Alert variant="danger">{error}</Alert>
                            )
                        }
						</div>
							
						</Card.Body>
						<Card.Footer>
								<small className="text-muted">This book was added by {book.addedBy}</small>
							</Card.Footer>
					</Card>
				</Col>
				
			))}
		</Row>
	</>
	
	)
}

export default BooksView
