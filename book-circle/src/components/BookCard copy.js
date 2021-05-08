import React, { useState, useEffect } from 'react';
import { Card, Button, Modal, Alert } from 'react-bootstrap';
import useAddNewBook from '../hooks/useAddNewBook';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

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
    title: title,

    thumbnail: thumbnail,
    infoLink: infoLink,
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
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Button className='m-1' onClick={toggle}>More info</Button>
        <Button className="btn btn-outline-danger btn-sm" onClick={handleAddNewBook}><FontAwesomeIcon icon={faHeart} size="xs"/></Button>
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
            <span aria-hidden={true}>X</span>
          </button>
        </div>
        <div className='modal-body'>
          <div className='d-flex justify-content-between ml-3'>
            <img src={thumbnail} alt={title} style={{ height: '233px' }} />
            <div>
              <p>Page Count: {pageCount}</p>
              <p>Language: {language}</p>
              <p>Authors: {authors}</p>
              <p>Publisher: {publisher}</p>
            </div>
          </div>
          <div className='mt-3'>{description}</div>
        </div>
        <div className='modal-footer'>
          <div className='left-silde'>
            <a
              href={previewLink}
              className='btn-link'
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
              className='btn-link'
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
    </Card>

    <div className="mt-3">
      	{message && (<Alert variant={message.error ? 'warning' : 'success'}>{message.text}</Alert>)}

    </div>
    </>
  );
};

export default BookCard;