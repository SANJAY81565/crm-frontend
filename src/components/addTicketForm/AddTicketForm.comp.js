import React, {useState, useEffect} from 'react'
import {
    Form,
    Card,
    Row,
    Col,
    Button
  } from "react-bootstrap";

  const initialFrmDt = {
    subject: "",
    issueDate: "",
    message: "",
  };

export const AddTicketForm = () => {
    const [frmData, setFrmData] = useState(initialFrmDt);
    useEffect(() => {},[frmData])

    const handleOnChange = (e) => {
        const { name, value } = e.target;
    
        setFrmData({
          ...frmData,
          [name]: value,
        });
      };
    
    const handleOnSubmit = (e) =>{
        e.preventDefault()
        console.log('ticket submitted');
    }

  return (
    <Card className="mt-3 add-new-ticket bg-light p-5">
      <h1 className="text-info text-center fw-bold">Add New Ticket</h1>
      <hr />
      <Form autoComplete="off" onSubmit={handleOnSubmit}>
        <Form.Group as={Row}>
          <Form.Label column sm={3} className='fw-bold'>
            Subject
          </Form.Label>
          <Col sm={9}>
            <Form.Control
              name="subject"
              value={frmData.subject}
              // minLength="3"
              maxLength="100"
              onChange={handleOnChange}
              placeholder="Subject"
              required
            />
            <Form.Text className="text-danger">
            </Form.Text>
          </Col>
        </Form.Group>
        <Form.Group as={Row}>
          <Form.Label column sm={3} className='fw-bold'>
            Issue Found
          </Form.Label>
          <Col sm={9}>
            <Form.Control
              type="date"
              name="issueDate"
              value={frmData.issueDate}
              onChange={handleOnChange}
              required
            />
          </Col>
        </Form.Group>
        <Form.Group>
          <Form.Label className='fw-bold'>Issue</Form.Label>
          <Form.Control
            as="textarea"
            name="message"
            rows="5"
            value={frmData.message}
            onChange={handleOnChange}
            required
          />
        </Form.Group>

        <Button type="submit" variant="info" block>
          Open Ticket
        </Button>
      </Form>
    </Card>
  );
};