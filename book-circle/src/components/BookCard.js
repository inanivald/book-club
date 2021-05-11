import React, { useState, useEffect } from 'react';
import { Card, Modal, Alert } from 'react-bootstrap';
import useAddNewBook from '../hooks/useAddNewBook';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faTimes } from '@fortawesome/free-solid-svg-icons'

const BookCard = ({
	thumbnail,
	title,
	pageCount,
	language,
	description,
	authors,
	publisher,
	previewLink,
	infoLink
}) => {
	// States
	const [modal, setModal] = useState(false);
	const toggle = () => setModal(!modal);
	const [uploadBook, setUploadBook] = useState(null);
	const [message, setMessage] = useState(null);
	const { error, isSuccess } = useAddNewBook(uploadBook);

	useEffect(() => {
		if (error) {
			setMessage({
				error: true,
				text: error,
			});
		} else if (isSuccess) {
			setMessage({
				success: true,
				text: 'The book was added to the list.',
			});
		} else {
			setMessage(null);
		}
	}, [error, isSuccess]);

	const book = {
		title,
		authors, 
		thumbnail,
		infoLink,
};

	const handleAddNewBook = () => {

		setUploadBook(book);

	}

	return (
		<>
		
		<Card className="mb-3 h-100">
		<div className="card-image">
			<Card.Img variant="top" src={thumbnail} alt={title} className="img-fluid"/>
			</div>
			<Card.Body className="books">
				<Card.Title><p><span className="strong">Title: </span>{title}</p>
				<p><span className="strong">Author: </span>{authors}</p></Card.Title>
				<div className="search-results-buttons d-flex flex-row">
					<button className="btn theme-btn btn-green mr-1" onClick={toggle}>More info</button>
					<span className="heart-border"><button className="btn theme-btn btn-red heart" onClick={handleAddNewBook}><FontAwesomeIcon icon={faHeart} size="m"/></button></span>
				</div>
			</Card.Body>
			<Modal show={modal} onHide={toggle}>
				<div className='modal-header d-flex justify-content-center'>
					<h5 className='modal-title text-center' id='exampleModalLabel'>
						{title}
					</h5>
					<button
						aria-label='Close'
						className='close'
						type='button'
						onClick={toggle}
					>
						<span aria-hidden={true}><FontAwesomeIcon icon={faTimes} size="xs"/></span>
					</button>
				</div>
				<div className='modal-body'>
					<div className='d-flex justify-content-center'>
						<img className='mr-3' src={thumbnail} alt={title} style={{ height: '233px' }} />
						<div className='ml-3'>
							<p><span className="strong">Page Count: </span>{pageCount}</p>
							<p><span className="strong">Language: </span>{language}</p>
							<p><span className="strong">Author: </span>{authors}</p>
							<p><span className="strong">Publisher: </span>{publisher}</p>
						</div>
					</div>
					<div className='mt-3'>{description}</div>
				</div>
				<div className='modal-footer'>
					<div className='left-silde'>
						<a
							href={previewLink}
							className='btn theme-btn book-card'
							color='default'
							type='button'
							target='_blank'
							rel='noopener noreferrer'
						>
							Preview Link
						</a>
					</div>
					<div className='divider'></div>
					<div className='right-silde'>
						<a
							href={infoLink}
							className='btn theme-btn book-card'
							color='default'
							type='button'
							target='_blank'
							rel='noopener noreferrer'
						>
							Info Link
						</a>
					</div>
				</div>
			</Modal>
			<div className="">
				{message && (<Alert variant={message.error ? 'warning' : 'success'}>{message.text}</Alert>)}

		</div>
		</Card>

		

	 
		</>
	);
};

export default BookCard;