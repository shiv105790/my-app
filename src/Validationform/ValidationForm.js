import { useState } from "react";
import { Container, Form, Row, Col, Button, ListGroup, Modal } from "react-bootstrap";
import './style.css'
function ValidationForm() {
    const [validated, setValidated] = useState(false);
    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        setValidated(true);
    }
    return (
        <Container>
            <Form noValidate validated={validated} className="bg-color p-3" onSubmit={handleSubmit}>
                <Row>
                    <Form.Group as={Col} md="4" controlId="firstsname" className="my-3">
                        <Form.Label>FirstName</Form.Label>
                        <Form.Control type="text" placeholder="Enter your first name" className="bg-transparent" required />
                    </Form.Group>
                    <Form.Group as={Col} md="4" controlId="lastsname" className="my-3">
                        <Form.Label>LastName</Form.Label>
                        <Form.Control type="text" placeholder="Enter your last name" className="bg-transparent" required />
                    </Form.Group>
                    <Form.Group as={Col} md="4" controlId="email" className="my-3">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Enter your email" className="bg-transparent" required />
                    </Form.Group>
                </Row>
                <Form.Group className="my-3" controlId="check-box">
                    <Form.Check
                        required
                        label="Agree to terms and conditions"
                        feedback="You must agree before submitting."
                        feedbackType="invalid"
                    />
                </Form.Group>
                <Button type="submit">Submit form</Button>
            </Form>
            <br />
            <ListGroup>
                <ListGroup.Item>Cras justo odio</ListGroup.Item>
                <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                <ListGroup.Item>Morbi leo risus</ListGroup.Item>
                <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
                <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
            </ListGroup>
            <Modal.Dialog>
                <Modal.Header closeButton>
                    <Modal.Title>Modal title</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <p>Modal body text goes here.</p>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary">Close</Button>
                    <Button variant="primary" className="ms-2">Save changes</Button>
                </Modal.Footer>
            </Modal.Dialog>
        </Container>
    )
}
export default ValidationForm;