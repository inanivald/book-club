import React from 'react'
import { useNavigate } from 'react-router-dom'


const Header = () => {

    const navigate = useNavigate();
    
    const handleClick = () => {
		navigate(`/search`)
	}
	return (
		<div className="home text-center">
			<section id="header" className="jumbotron text-center">
                
                <h1 className="display-3">Book Circle App</h1>
                <p className="lead">Do you want to add a book the book list?</p>
                <button href="" className="btn btn-success" onClick={handleClick}>Search</button>
            </section>
         </div>

	)
}

export default Header