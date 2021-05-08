import React from 'react'
import { Container } from 'react-bootstrap'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import AuthRoute from './components/AuthRoute'
import ResetPassword from './components/ResetPassword'
import Home from './components/Home'
import Login from './components/Login'
import Navigation from './components/Navigation'
import NotFound from './components/NotFound'
import Signup from './components/Signup'
import UpdateProfile from './components/UpdateProfile'
import AuthContextProvider from './contexts/AuthContext'
import Search from './components/Search'
import Books from './components/Books'
import ReadBooks from './components/ReadBooks'
import UnreadBooks from './components/UnreadBooks'

import './assets/scss/app.scss'

const App = () => {
	return (
		<Router>
			<AuthContextProvider>
				<Navigation />

			
					<Routes>

						<AuthRoute path="/">
							<Home />
						</AuthRoute>

						<Route path="/books">
							<Books />
						</Route>
						
						<Route path="/read-books">
							<ReadBooks />
						</Route>
						
						<Route path="/unread-books">
							<UnreadBooks />
						</Route>

					  	<Route path="/reset-password">
							<ResetPassword />
						</Route>
						
						<Route path="/search">
							<Search />
						</Route>

						<Route path="/login">
							<Login />
						</Route>

						<Route path="/signup">
							<Signup />
						</Route>

						<AuthRoute path="/update-profile">
							<UpdateProfile />
						</AuthRoute>

						<Route path="*" element={<NotFound />} />

					</Routes>
			
			</AuthContextProvider>
		</Router>
	)
}

export default App