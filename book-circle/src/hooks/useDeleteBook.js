import { useEffect } from 'react';
import { db } from '../firebase';

const useDeleteBook = (book) => {
	useEffect(() => {
		if (!book) {
			return;
		}

		(async () => {
			
			db.collection('books').doc(book.id).delete()
			
			
		})();
	}, [book]);

	return {}
}

export default useDeleteBook

