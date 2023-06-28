import { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

function Propsindex(props) {
  const [add, setAdd] = useState(0);
  return (
    <div>
      <Container className="py-3">
        <Row className="p-2">
          <Col className="bg-secondary opacity-50 text-white py-3" md={3}>
            Your First Name is : {props.f_name}
          </Col>
          <Col className="bg-dark opacity-50 text-white py-3" md={3}>
            Your Last Name is : {props.l_name}
          </Col>
          <Col className="bg-secondary opacity-50 text-white py-3" md={3}>
            Your Emial is : {props.email}
          </Col>
          <Col className="bg-dark opacity-50 text-white py-3" md={3}>
            Your Phone Number is : {props.phone_no}
          </Col>
        </Row>
        <div className="d-flex mt-4 mx-3 align-items-center">
          <div className="mx-2 btn">{add}</div>
          <Button onClick={() => setAdd(add + 1)} className="w-auto">
            Add +
          </Button>
        </div>
      </Container>
    </div>
  );
}

export default Propsindex;
