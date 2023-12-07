import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
// import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import { data } from "../helpers/data";
import PlayerCard from "./PlayerCard";

const CardContainer = () => {
  console.log(data);
  
  return (
    <>
      <Form.Control placeholder="Search a player..." className="w-50 m-auto" />

      <Container className="rounded-4 my-4 p-3 card-container">
        <Row className="justify-content-center g-3">
          {data.map((player, i) => (
            <Col xl={3} lg={4} md={6}>
              <PlayerCard {...player} />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default CardContainer;
