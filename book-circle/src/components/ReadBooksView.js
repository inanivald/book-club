import React from 'react'
import { Row, Col, Card } from 'react-bootstrap'

const ReadBooksView = ({ books }) => {

	const readBooks = books.filter(book => book.read)

	return (
	
	<>
		<Row>
			{readBooks.map(book => (
				<Col md={6} lg={3} key={book.id}>
					<Card className="mb-3">
						<div className="card-image">
						<Card.Img variant="top" src={book.thumbnail} title={book.title} className="img-fluid"/>
						</div>
						<Card.Body>
							<Card.Title className="mb-0">
							<a href={book.infoLink}
								className="btn-link"
								color="default"
								type="button"
								target="_blank'rel='noopener noreferrer">
								{book.title}
							</a>
								
							</Card.Title>

						</Card.Body>
					</Card>
				</Col>
				
			))}
			
		</Row>		
	</>
	
	)
}

export default ReadBooksView
