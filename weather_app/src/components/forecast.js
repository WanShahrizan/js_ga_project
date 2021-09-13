import React, { useState, useEffect } from "react";
import { Card, Row, Col } from "react-bootstrap";
import styled from "styled-components";

export function FutureData({ location }) {
  const [data, setData] = useState(null);

  let urlForecast = `https://api.openweathermap.org/data/2.5/forecast?q=${location}&units=metric&appid=aeb835d9e4332e1466aa80c11838c442`;

  useEffect(() => {
    fetch(urlForecast, { method: "GET" })
      .then((res) => res.json())
      .then(setData)
      .catch(console.error);
  }, [location]);

  console.clear();
  console.log(data);

  if (data) {
    return (
      <>
        <h1>3-Hour Forecast for {location}: </h1>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gridGap: 20,
            marginTop: "40px",
            textAlign: "center",
          }}
        >
          <Card>
            <Card.Header>{data.list[0].dt_txt}</Card.Header>
            <Card.Body>
              <br />
              <Card.Title>{data.list[0].main.temp}</Card.Title>
              <Card.Text>{data.list[0].weather[0].main}</Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Header>{data.list[1].dt_txt}</Card.Header>
            <Card.Body>
              <br />
              <Card.Title>{data.list[1].main.temp}</Card.Title>
              <Card.Text>{data.list[1].weather[0].main}</Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Header>{data.list[2].dt_txt}</Card.Header>
            <Card.Body>
              <br />
              <Card.Title>{data.list[2].main.temp}</Card.Title>
              <Card.Text>{data.list[2].weather[0].main}</Card.Text>
            </Card.Body>
          </Card>
        </div>
      </>
    );
  } else {
    return (
      <>
        <h1>There is currently no forecast data for {location} </h1>
      </>
    );
  }
}
