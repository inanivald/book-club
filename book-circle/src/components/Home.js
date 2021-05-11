import React from 'react'
import { useAuth } from '../contexts/AuthContext'
import Header from './Header'
import { Link } from 'react-router-dom'
import MyBooks from './MyBooks'



const Home = () => {
	const { currentUser } = useAuth()


	return (
		<div className="">
			<Header className="p-5"/>
				<div className="padding-x-row padding-y-row">
					<div className="mb-5">
						<h1>Welcome {currentUser.displayName || currentUser.email}!</h1>
					</div>
					<div className="mr-3 mb-5 border-bottom">
						<Link to="/books" className="btn theme-btn mr-3 mb-5">See all books </Link>
					
						<Link to="/update-profile" className="btn theme-btn mr-3 mb-5">Update Profile</Link>
					</div>
					<MyBooks  />
			</div>
		</div>
		
	)
}

export default Home