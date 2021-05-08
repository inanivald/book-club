import React from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap'
import Header from './Header'

const ReadBooksView = ({ books }) => {

	const readBooks = books.filter(book => book.read)

	return (
	
	<>
	<Header className="p-5"/>
		<Container className="py-3">
		<h2 className="mb-3">All Read Books</h2>
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
		</Container>			
	</>
	
	)
}

export default ReadBooksView
