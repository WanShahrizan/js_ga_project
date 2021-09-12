import React from "react";
import styled from "styled-components";
import WeatherData from "./components/weather";
import { FutureData } from "./components/forecast";

const Title = styled.div`
  text-align: center;
`;

function App() {
  return (
    <>
      <Title>
        <h1>Simple Weather App</h1>
      </Title>
      <WeatherData />
      <FutureData />
    </>
  );
}

module.exports = App;
