import { Container, Spinner } from "react-bootstrap";
import "./Spinner.css"
const Loader = () => {
  return (
    <Container
      className="d-flex justify-content-center align-items-center height"
      fluid
    >
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </Container>
  );
};

export default Loader;
