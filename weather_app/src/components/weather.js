import React, { useState } from "react";
import styled from "styled-components";
import { BiSearchAlt } from "react-icons/bi";
import { Container, Row, Col } from "react-bootstrap";
require("dotenv").config();

//Styling
const Head = styled.div`
  text-align: center;
  background: #eea47fff;
  color: #fff;
  border-radius: 8px;
  margin-top: 8px;
  padding: 80px;
  position: relative;
  box-shadow: 0 4px 8px grey;
`;

const Form = styled.form`
  margin-bottom: 20px;
  text-align: center;
  display: relative;
`;

const MinMax = styled.div`
  position: fixed;
  margin-top: 10px;
`;

function WeatherData() {
  const [data, setData] = useState(null);
  const [loc, setLoc] = useState("");

  function updateLoc(event) {
    setLoc(event.target.value);
  }

  let weatherApi = process.env.WEATHERAPI;
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${loc}&units=metric&appid=${weatherApi}`;

  function search(event) {
    event.preventDefault();

    fetch(url, { method: "GET" })
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch(console.error);
  }
  console.log(process.env.WEATHERAPI);
  console.log(data);

  if (data) {
    return (
      <>
        <Form onSubmit={search}>
          <input
            type="text"
            placeholder="Search Location"
            value={loc}
            onChange={updateLoc}
          />
          <button type="submit">
            <BiSearchAlt />
          </button>
        </Form>
        <Head>
          <h1>{data.main.temp}&#8451;</h1>
          <h2>
            {data.name}, {data.sys.country}
          </h2>
          <Container>
            <Row>
              <Col>Max: {data.main.temp_max}&#8451;</Col>
              <Col>Min: {data.main.temp_min}&#8451;</Col>
            </Row>
          </Container>
        </Head>
      </>
    );
  } else {
    return (
      <>
        <Form onSubmit={search}>
          <input
            type="text"
            placeholder="Search Location"
            value={loc}
            onChange={updateLoc}
          />
          <button type="submit">
            <BiSearchAlt />
          </button>
        </Form>
        <Head>
          <h1>Go Ahead, Kick In Your Location</h1>
        </Head>
      </>
    );
  }
}

module.exports = WeatherData;
