import React from 'react'
import { Container, Row, Col, Button } from "react-bootstrap";
import PageBreadcrumb from '../../components/breadCrumb/BreadCrumb.comp';
import tickets from "../../assets/data/dummyTickets.json";
import { MessageHistory } from '../../components/messageHistory/MessageHistory.comp';


let ticket = tickets[0]
export const Tickets = () => {
  return (
    <Container>
			<Row>
				<Col>
					<PageBreadcrumb page="Ticket" />
				</Col>
			</Row>

			<Row>
				<Col>
					
				</Col>
			</Row>
			<Row>
				<Col className="text-weight-bolder text-secondary">
					<div className="subject">Subject: {ticket.subject}</div>
					<div className="date">
						Ticket Opened:{" "}
					</div>
					<div className="status">Status: {ticket.status}</div>
				</Col>
				<Col className="text-right">
					<Button
						variant="outline-info">
						Close Ticket
					</Button>
				</Col>
			</Row>
			<Row className="mt-4">
				<Col>
                <MessageHistory msg = {ticket.history}/>
				</Col>
			</Row>
			<hr />

			<Row className="mt-4">
				<Col>
				</Col>
			</Row>
		</Container>
  )
}
