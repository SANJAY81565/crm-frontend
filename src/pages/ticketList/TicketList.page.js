import React, { useEffect, useState } from 'react'
import PageBreadcrumb from '../../components/breadCrumb/BreadCrumb.comp'
import { Container, Row, Col, Button } from "react-bootstrap";
import { SearchForm } from '../../components/searchForm/SearchForm.comp';
import { TicketTable } from "../../components/ticketTable/TicketTable.comp";
import tickets from "../../assets/data/dummyTickets.json";

export const TicketList = () => {
  const [str, setStr] = useState('')
  const [dispTickets, setDispTickets] = useState(tickets)

  const handleOnChange =(e) => {
      let {value} = e.target
      console.log(value);
      setStr(value)
      searchTicket(value)
  }
  useEffect(()=>{}, [str, dispTickets])

  const searchTicket = (sttr) =>{
    let displayTickets = tickets.filter((row) => row.subject.toLowerCase().includes(sttr.toLowerCase())
    )
    setDispTickets(displayTickets)
    console.log(displayTickets);
  }


  return (
    <Container>
      <Row>
        <Col>
          <PageBreadcrumb page="Ticket Lists" />
        </Col>
      </Row>
      <Row className="mt-4">
        <Col>
            <Button variant="info">Add New Ticket</Button>
        </Col>
        <Col className="text-right">
          <SearchForm handleOnChange={handleOnChange} str = {str}/>
        </Col>
      </Row>
      <hr />
      <Row>
        <Col>
        <TicketTable tickets={dispTickets} />
        </Col>
      </Row>
    </Container>
  )
}
