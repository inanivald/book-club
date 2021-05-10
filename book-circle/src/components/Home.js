import React from 'react'
import { useAuth } from '../contexts/AuthContext'
import Header from './Header'
import { Link } from 'react-router-dom'


const Home = () => {
	const { currentUser } = useAuth()


	return (
		<div className="">
			<Header className="p-5"/>
				<div className="padding-x-row padding-y-row">
				<h1>Welcome {currentUser.displayName || currentUser.email}!</h1>
					<p>What do you want to do?</p>
					<div className="mt-3">
						<Link to="/books">See all books </Link>
					</div>
					<div className="mt-3">
					<Link to="/update-profile">Update Profile</Link>
					</div>
			</div>
		</div>
		
	)
}

export default Home