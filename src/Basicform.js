import {
  Form,
  Button,
  Container,
  FormControl,
  Col,
  Row,
} from "react-bootstrap";
import "./css/style.css";
function Basicform() {
  return (
    <Container className="py-3">
      <div className="w-md-25 w-100 mx-auto my-3">
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
          <Form.Group className="d-flex mt-3">
            <Form.Control
              type="input"
              className="w-50 me-3"
              placeholder="You can not write anything"
              readOnly
            />
            <Button variant="outline-danger">Reset</Button>
          </Form.Group>
          <Form.Group className="row mt-5 align-items-center">
            <Form.Label column sm={2}>
              Enter Name
            </Form.Label>
            <Form.Control
              type="color"
              defaultValue="#FFFFFF"
              className="border-0"
            />
            <Form.Check className="col-sm-1" type="radio" />
            <Form.Check className="col-sm-1" type="switch" />
            <Form.Check className="col-sm-1" type="checkbox" />
          </Form.Group>
          <select className="form-select mt-2" id="forverify1">
            <option>Hello</option>
            <option>HelloHello</option>
            <option>HelloHelloHello</option>
            <option>HelloHelloHelloHello</option>
            <option>HelloHelloHelloHelloHelloHello</option>
            <option>HelloHelloHelloHelloHelloHelloHello</option>
            <option>HelloHelloHelloHelloHelloHelloHelloHello</option>
            <option>HelloHelloHelloHelloHelloHelloHelloHelloHello</option>
            <option>HelloHelloHelloHelloHelloHelloHelloHelloHelloHello</option>
            <option>
              HelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHello
            </option>
            <option>
              HelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHello
            </option>
            <option>
              HelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHello Hello
            </option>
            <option>
              HelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHello
            </option>
            <option>
              HelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHello
            </option>
          </select>
          <Row>
            <Col sm={2} md={5}>
              <Form.Label column sm={2}>
                dsdsd
              </Form.Label>
              <Form.Label column sm={3}>
                fsdf
              </Form.Label>
            </Col>
          </Row>
          <Form.Floating className="mb-3">
            <Form.Control
              id="floatingInputCustom"
              type="email"
              placeholder="name@example.com"
            />
            <label htmlFor="floatingInputCustom">Email address</label>
          </Form.Floating>
          <Form.Floating>
            <Form.Control
              id="floatingPasswordCustom"
              type="password"
              placeholder="Password"
            />
            <label htmlFor="floatingPasswordCustom">Password</label>
          </Form.Floating>
        </Form>
      </div>
    </Container>
  );
}

export default Basicform;
