import React, { useState, useEffect } from "react";
import { Card } from "react-bootstrap";
require("dotenv").config();

export function FutureData({ location }) {
  const [data, setData] = useState(null);

  let weatherApi = process.env.WEATHERAPI;
  let urlForecast = `https://api.openweathermap.org/data/2.5/forecast?q=${location}&units=metric&appid=${weatherApi}`;

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
        <h1>6 Hour Forecast for {location}:</h1>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gridGap: 20,
            marginTop: "20px",
            textAlign: "center",
          }}
        >
          <Card
            style={{
              backgroundColor: "#0DCAF0",
              color: "white",
              borderRadius: "8px",
            }}
          >
            <Card.Header style={{ paddingTop: "9px" }}>
              {data.list[0].dt_txt}
            </Card.Header>
            <Card.Body>
              <br />
              <Card.Title>{data.list[0].main.temp}&#8451;</Card.Title>
              <Card.Text>{data.list[0].weather[0].main}</Card.Text>
            </Card.Body>
          </Card>
          <Card
            style={{
              backgroundColor: "#0DCAF0",
              color: "white",
              borderRadius: "8px",
            }}
          >
            <Card.Header style={{ paddingTop: "9px" }}>
              {data.list[2].dt_txt}
            </Card.Header>
            <Card.Body>
              <br />
              <Card.Title>{data.list[2].main.temp}&#8451;</Card.Title>
              <Card.Text>{data.list[2].weather[0].main}</Card.Text>
            </Card.Body>
          </Card>
          <Card
            style={{
              backgroundColor: "#0DCAF0",
              color: "white",
              borderRadius: "8px",
            }}
          >
            <Card.Header style={{ paddingTop: "9px" }}>
              {data.list[4].dt_txt}
            </Card.Header>
            <Card.Body>
              <br />
              <Card.Title>{data.list[4].main.temp}&#8451;</Card.Title>
              <Card.Text>{data.list[4].weather[0].main}</Card.Text>
            </Card.Body>
          </Card>
          <Card
            style={{
              backgroundColor: "#0DCAF0",
              color: "white",
              borderRadius: "8px",
            }}
          >
            <Card.Header style={{ paddingTop: "9px" }}>
              {data.list[6].dt_txt}
            </Card.Header>
            <Card.Body>
              <br />
              <Card.Title>{data.list[6].main.temp}&#8451;</Card.Title>
              <Card.Text>{data.list[6].weather[0].main}</Card.Text>
            </Card.Body>
          </Card>
          <Card
            style={{
              backgroundColor: "#0DCAF0",
              color: "white",
              borderRadius: "8px",
            }}
          >
            <Card.Header style={{ paddingTop: "9px" }}>
              {data.list[8].dt_txt}
            </Card.Header>
            <Card.Body>
              <br />
              <Card.Title>{data.list[8].main.temp}&#8451;</Card.Title>
              <Card.Text>{data.list[8].weather[0].main}</Card.Text>
            </Card.Body>
          </Card>
          <Card
            style={{
              backgroundColor: "#0DCAF0",
              color: "white",
              borderRadius: "8px",
            }}
          >
            <Card.Header style={{ paddingTop: "9px" }}>
              {data.list[10].dt_txt}
            </Card.Header>
            <Card.Body>
              <br />
              <Card.Title>{data.list[10].main.temp}&#8451;</Card.Title>
              <Card.Text>{data.list[10].weather[0].main}</Card.Text>
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
