import React from 'react'
import {
	Container,
	Row,
	Col,
	Form,
	Button
} from "react-bootstrap";

export const Login = ({handleOnchange,mail, pass, formSwitcher, handleOnSubmit}) => {
  return (
    <>
    <Container>
			<Row>
				<Col>
					<h1 className="text-info text-center">Client Login</h1>
					<hr />
                    <Form>
						<Form.Group>
							<Form.Label>Email Address</Form.Label>
							<Form.Control
								type="email"
								name="email"
                                value={mail}
                                onChange={handleOnchange}
								placeholder="Enter Email"
								required
							/>
						</Form.Group>
						<Form.Group>
							<Form.Label>Password</Form.Label>
							<Form.Control
								type="password"
								name="password"
								placeholder="password"
                                value={pass}
                                onChange={handleOnchange}
								required
							/>
						</Form.Group>

						<Button type="submit" onClick={handleOnSubmit}>Login</Button>
					</Form>
					<hr />
				</Col>
			</Row>

			<Row>
				<Col>
					<a href="!#" onClick={() => formSwitcher('resetPassword')}>Forget Password?</a>
				</Col>
			</Row>
    </Container>
    </>
  )
}
