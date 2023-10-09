import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { TicketTable } from "../../components/ticketTable/TicketTable.comp";
import  tickets  from "../../assets/data/dummyTickets.json";

export const Dashboard = () => {
  return (
    <Container>
      <Row>
        <Col>
        </Col>
      </Row>
      <Row>
        <Col className="text-center mt-5 mb-2">
            <Button
              variant="info"
              style={{ fontSize: "2rem", padding: "10px 30px" }}
            >
              Add New Ticket
            </Button>
        </Col>
      </Row>
      <Row>
        <Col className="text-center  mb-2">
          <div>Total tickets:</div>
          <div>Pending tickets:</div>
        </Col>
      </Row>
      <Row>
        <Col className="mt-2">Recently Added tickets</Col>
      </Row>
      <hr />

      <Row>
        <Col className="recent-ticket">
          <TicketTable tickets ={tickets} />
        </Col>
      </Row>
    </Container>
  );
};