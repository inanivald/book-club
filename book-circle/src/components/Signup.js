import React, { useRef, useState } from 'react'
import { Row, Col, Form, Card, Alert } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'

const Signup = () => {
	const emailRef = useRef()
	const passwordRef = useRef()
	const passwordConfirmRef = useRef()
	const [error, setError] = useState(null)
	const [loading, setLoading] = useState(false)
	const { signup } = useAuth()
	const navigate = useNavigate()

	const handleSubmit = async (e) => {
		e.preventDefault()
		if (passwordRef.current.value !== passwordConfirmRef.current.value) {
			return setError("The passwords do not match")
		}

		setError(null);

		try {
			setLoading(true)
			await signup(emailRef.current.value, passwordRef.current.value)
			navigate('/')
		} catch (e) {
			setError(e.message)
			setLoading(false)
		}
	}

	return (
		<>
			<Row>
				<Col md={{ span: 6, offset: 3 }}>
					<Card className="mt-5">
						<Card.Body>
							<Card.Title>Sign Up</Card.Title>

							{error && (<Alert variant="danger">{error}</Alert>)}

							<Form onSubmit={handleSubmit}>

								<Form.Group id="email">
									<Form.Label>Email</Form.Label>
									<Form.Control type="email" ref={emailRef} required />
								</Form.Group>

								<Form.Group id="password">
									<Form.Label>Password</Form.Label>
									<Form.Control type="password" ref={passwordRef} required />
								</Form.Group>

								<Form.Group id="password-confirm">
									<Form.Label>Password Confirmation</Form.Label>
									<Form.Control type="password" ref={passwordConfirmRef} required />
								</Form.Group>

								<button disabled={loading} type="submit" className="btn theme-btn">Create Account</button>

							</Form>
						</Card.Body>
					</Card>
					<div className="text-center mt-5">
						<Link to="/login" className="btn theme-btn book-card">Do you want to log in?</Link>
					</div>
				</Col>
			</Row>
		</>
	)
}

export default Signup
