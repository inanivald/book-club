import React from 'react'
import { useNavigate } from 'react-router-dom'


const Header = () => {
	const navigate = useNavigate();
		
	const handleClick = () => {
		navigate(`/search`)
	}

	return (
		<div>
			<section className="d-flex justify-content-center align-items-center flex-column header mb-0">	
				<h1>Book Circle App</h1>
				<p className="ingress text-center">Do you want to add a book to the book list?</p>
				<button className="btn theme-btn" onClick={handleClick}>Search</button>
			</section>
		</div>

	)
}

export default Header