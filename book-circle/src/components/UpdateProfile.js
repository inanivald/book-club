import React, { useRef, useState } from 'react'
import { Row, Col, Form, Card, Alert } from 'react-bootstrap'
import { useAuth } from '../contexts/AuthContext'

const UpdateProfile = () => {
	const displayNameRef = useRef()
	const emailRef = useRef()
	const passwordRef = useRef()
	const passwordConfirmRef = useRef()
	const [error, setError] = useState(null)
	const [message, setMessage] = useState(null)
	const [loading, setLoading] = useState(false)
	const { currentUser, updateEmail, updatePassword, updateProfile } = useAuth()

	const handleSubmit = async (e) => {
		e.preventDefault()

		if (passwordRef.current.value !== passwordConfirmRef.current.value) {
			return setError("The passwords do not match")
		}

		setError(null);
		const updateTasks = []

		try {
			setLoading(true)

			if (displayNameRef.current.value !== currentUser.displayName) {
				updateTasks.push(updateProfile(displayNameRef.current.value))
			}

			if (emailRef.current.value !== currentUser.email) {
				updateTasks.push(updateEmail(emailRef.current.value))
			}

			await Promise.all(updateTasks)

			if (passwordRef.current.value) {
				await updatePassword(passwordRef.current.value)
			}

			setMessage("Profile successfully updated")
			setLoading(false)
		} catch (e) {
			setError("Error updating profile. Try logging out and in again.")
			setLoading(false)
		}
	}

	return (
		<>
			<Row>
				<Col md={{ span: 6, offset: 3 }}>
					<Card className="mt-5">
						<Card.Body>
							<Card.Title>Update Profile</Card.Title>

							{error && (<Alert variant="danger">{error}</Alert>)}
							{message && (<Alert variant="success">{message}</Alert>)}

							<Form onSubmit={handleSubmit}>

								<Form.Group id="displayName">
									<Form.Label>Name</Form.Label>
									<Form.Control type="text" ref={displayNameRef} defaultValue={currentUser.displayName} />
								</Form.Group>

								<Form.Group id="email">
									<Form.Label>Email</Form.Label>
									<Form.Control type="email" ref={emailRef} defaultValue={currentUser.email} required />
								</Form.Group>

								<Form.Group id="password">
									<Form.Label>Password</Form.Label>
									<Form.Control type="password" ref={passwordRef} />
								</Form.Group>

								<Form.Group id="password-confirm">
									<Form.Label>Password Confirmation</Form.Label>
									<Form.Control type="password" ref={passwordConfirmRef} />
								</Form.Group>

								<button disabled={loading} type="submit" className="btn theme-btn">Update</button>

							</Form>
						</Card.Body>
					</Card>
				</Col>
			</Row>
		</>
	)
}

export default UpdateProfile
