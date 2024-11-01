import { Container, Spinner } from "react-bootstrap";
import styles from "./Spinner.module.css"
const Loader = () => {
  return (
    <Container
      className={`${styles.height} d-flex justify-content-center align-items-center`}
      fluid
    >
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </Container>
  );
};

export default Loader;
