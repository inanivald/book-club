import React from 'react'
import { Row, Col, Card } from 'react-bootstrap'
import Header from './Header'


const UnreadBooksView = ({ books }) => {

const unreadBooks = books.filter(book => book.read === false)


	return (
	
	<>
	<Header className="p-5"/>
		<div className="padding-x-row padding-y-row">
		<h2 className="mb-3">All Unread Books</h2>
		<Row>
			{unreadBooks.map(book => (
				<Col md={6} lg={3} key={book.id}>
					<Card className="mb-3">
						
						<Card.Img variant="top" src={book.thumbnail} title={book.title} className="img-fluid"/>
						
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
		</div>
	</>
	
	)
}

export default UnreadBooksView
