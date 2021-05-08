import React, { useState } from 'react';
import {
  InputGroup,
  Button,
  Form,
  FormGroup,
  FormControl,
  Spinner,
  Col,
  Row,
} from 'react-bootstrap';
import axios from 'axios';
import BookCard from './BookCard.js';
import '../assets/scss/app.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import PhotoPlaceholder from '../assets/images/photo-placeholder.png'


function Search() {
  // States
  const [maxResults, setMaxResults] = useState(10);
  const [startIndex, setStartIndex] = useState(1);
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);
  const [cards, setCards] = useState([]);
  // Handle Search
  const handleSubmit = () => {
    setLoading(true);
    if (maxResults > 40 || maxResults < 1) {
      console.error('max results must be between 1 and 40');
    } else {
      axios
        .get(
          `https://www.googleapis.com/books/v1/volumes?q=${result}&maxResults=${maxResults}&startIndex=${startIndex}`
        )
        .then(res => {
          if (startIndex >= res.data.totalItems || startIndex < 1) {
            console.error(
              `max reults must be between 1 and ${res.data.totalItems}`
            );
          } else {
            if (res.data.items.length > 0) {
              setCards(res.data.items);
              setLoading(false);
            }
          }
        })
        .catch(err => {
          setLoading(true);
          console.log(err.response);
        });
    }
  };
  // Main Show Case
  const mainHeader = () => {
    return (
      <div className='main-image p-5 d-flex justify-content-center align-items-center flex-column mb-3'>
        {/* Overlay */}
        <div className='filter'></div>
        <h1
          className='display-3'
          style={{ zIndex: 2 }}
        >
          Book Search
        </h1>
        <div style={{ width: '60%', zIndex: 2 }}>
          <InputGroup size='lg' className='mb-3'>
            <FormControl
              placeholder='Book Search'
              value={result}
              onChange={e => setResult(e.target.value)}
            />
            <InputGroup.Append>
              <Button color='secondary' onClick={handleSubmit}>
			          <FontAwesomeIcon icon={faSearch} size="xs"/>
              </Button>
            </InputGroup.Append>
          </InputGroup>
          <div className='d-flex text-white justify-content-center'>
            <Form.Group>
              <Form.Label>Max Results</Form.Label>
              <FormControl
                type='number'
                id='maxResults'
                placeholder='Max Results'
                value={maxResults}
                onChange={e => setMaxResults(e.target.value)}
              />
            </Form.Group>
            <FormGroup className='ml-5'>
              <Form.Label for='startIndex'>Start Index</Form.Label>
              <FormControl
                type='number'
                id='startIndex'
                placeholder='Start Index'
                value={startIndex}
                onChange={e => setStartIndex(e.target.value)}
              />
            </FormGroup>
          </div>
        </div>
      </div>
    );
  };

  const handleCards = () => {
    if (loading) {
      return (
        <div className='d-flex justify-content-center mt-3'>
          <Spinner style={{ width: '3rem', height: '3rem' }} />
        </div>
      );
    } else {
      const items = cards.map((item) => {
        let thumbnail = '';
        if (item.volumeInfo.imageLinks) {
          thumbnail = item.volumeInfo.imageLinks.thumbnail;
        } else {
          thumbnail = PhotoPlaceholder;

        }

        return (

          <Col className="search-result mb-3" md={6} lg={3} key={item.id}>
            <BookCard
              thumbnail={thumbnail}
              title={item.volumeInfo.title}
              pageCount={item.volumeInfo.pageCount}
              language={item.volumeInfo.language}
              authors={item.volumeInfo.authors}
              publisher={item.volumeInfo.publisher}
              description={item.volumeInfo.description}
              previewLink={item.volumeInfo.previewLink}
              infoLink={item.volumeInfo.infoLink}
            />
          </Col>
        );
      });
      return (
        <div className='container'>
          <Row>{items}</Row>
        </div>
      );
    }
  };
  return (
    <div>
      {mainHeader()}
      {handleCards()}
    </div>
  );
}

export default Search;