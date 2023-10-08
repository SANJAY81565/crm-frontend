import React from 'react'
import {
	Container,
	Row,
	Col,
	Form,
	Button
} from "react-bootstrap";

export const PasswordReset = ({handleOnchange,mail, formSwitcher, handleOnResetSubmit}) => {
  return (
    <>
    <Container>
			<Row>
				<Col>
					<h1 className="text-info text-center">Reset password</h1>
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

						<Button type="submit" onClick={handleOnResetSubmit}>Reset password</Button>
					</Form>
					<hr />
				</Col>
			</Row>

			<Row>
				<Col>
					<a href="!#" onClick={() => formSwitcher('login')} >Login again</a>
				</Col>
			</Row>
    </Container>
    </>
  )
}