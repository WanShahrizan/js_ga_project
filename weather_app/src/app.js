import React from "react";
import Clock from "react-live-clock";
import styled from "styled-components";
import WeatherData from "./components/weather";
const Title = styled.div`
  text-align: center;
`;

function App() {
  return (
    <>
      <Title>
        <Clock
          format={"HH:mm:ss"}
          ticking={true}
          style={{
            fontSize: "0.9em",
            textAlign: "left",
          }}
        />
        <h1>Simple Weather App</h1>
      </Title>
      <WeatherData />
    </>
  );
}

module.exports = App;
