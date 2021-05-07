import { useEffect, useState } from 'react'
import { db } from '../firebase'
import { useAuth } from '../contexts/AuthContext'

const useAlbums = () => {
	const [books, setBooks] = useState([])
	const { currentUser } = useAuth()
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		// Snapshot listener for all of the user's albums in firebase
		const unsubscribe = db.collection('books')
			.onSnapshot(snapshot => {
				setLoading(true)
				const snapshotBooks = []

				snapshot.forEach(doc => {
					snapshotBooks.push({
						id: doc.id,
						...doc.data(),
					})
				})

			setBooks(snapshotBooks)
			setLoading(false)
		})

		return unsubscribe
    }, [currentUser.uid])
    
	return { books, loading }
}

export default useAlbums