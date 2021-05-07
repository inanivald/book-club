import React from 'react'
import { useAuth } from '../contexts/AuthContext'


const Home = () => {
	const { currentUser } = useAuth()

	
	

	return (
		<div className="home text-center">
			<h1>Welcome {currentUser.displayName || currentUser.email}!</h1>
			
			
		</div>
	)
}

export default Home