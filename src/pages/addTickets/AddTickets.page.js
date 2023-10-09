import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AddTicketForm } from "../../components/addTicketForm/AddTicketForm.comp";
import PageBreadcrumb from "../../components/breadCrumb/BreadCrumb.comp";

export const AddTicket = () => {
  return (
    <Container>
      <Row>
        <Col>
          <PageBreadcrumb page="New Ticket" />
        </Col>
      </Row>

      <Row>
        <Col>
          <AddTicketForm />
        </Col>
      </Row>
    </Container>
  );
};