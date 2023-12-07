import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
// import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import { data } from "../helpers/data";
import PlayerCard from "./PlayerCard";
import { useState } from "react";

const CardContainer = () => {
  console.log(data);

  const [search, setSearch] = useState("");

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const filterData = data.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase().trim())
  );

  return (
    <>
      <Form.Control
        placeholder="Search a player..."
        className="w-50 m-auto"
        onChange={handleChange}
        type="search"
      />

      <Container className="rounded-4 my-4 p-3 card-container">
        <Row className="justify-content-center g-3">
          {data
            .filter((item) =>
              item.name.toLowerCase().includes(search.toLowerCase().trim())
            )
            .map((player, i) => (
              <Col xl={3} lg={4} md={6} key={i}>
                <PlayerCard {...player} />
              </Col>
            ))}
          {/* {filterData.map((player, i) => (
            <Col xl={3} lg={4} md={6}>
              <PlayerCard {...player} />
            </Col>
          ))} */}
        </Row>
      </Container>
    </>
  );
};

export default CardContainer;
