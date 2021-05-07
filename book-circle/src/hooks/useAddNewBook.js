import { useState, useEffect } from 'react';
import { db } from '../firebase';
import { useAuth } from '../contexts/AuthContext'

const useAddNewBook = (book) => {
	const [uploadedBook, setUploadedBook] = useState(null);
	const [error, setError] = useState(null);
	const [isSuccess, setIsSuccess] = useState(false);
	const { currentUser } = useAuth()

	useEffect(() => {
		if (!book) {
			setUploadedBook(null);
			setError(null);
			setIsSuccess(false);
			return;
		}

			const newBook = {
				title: book.title,
				authors: book.authors,
				owner: currentUser.uid,
				thumbnail: book.thumbnail,
				infoLink: book.infoLink,
				read: false,	
			};

		db.collection('books').add(newBook)

			setUploadedBook(newBook);
			setIsSuccess(true);

	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [book, currentUser]);

	return { uploadedBook, error, isSuccess };
}

export default useAddNewBook;