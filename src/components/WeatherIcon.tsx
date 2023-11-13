import React from "react";
import styled from "styled-components";

interface WeatherIconProps {
  fcstValue: string;
}

export const WeatherIcon: React.FC<WeatherIconProps> = ({ fcstValue }) => {
  if (Number(fcstValue[1]) >= 9) {
    return (
      <StyledWeatherIcon>
        {Number(fcstValue[0]) < 0 ? (
          <img src={require("../assets/icon_snow.png")} alt="눈" />
        ) : (
          <img src={require("../assets/icon_rain.png")} alt="비" />
        )}
        <p>{fcstValue[2]}%</p>
      </StyledWeatherIcon>
    );
  } else if (Number(fcstValue[1]) >= 6) {
    return (
      <StyledWeatherIcon>
        <img src={require("../assets/icon_cloud.png")} alt="매우흐림" />
        <p>{fcstValue[2]}%</p>
      </StyledWeatherIcon>
    );
  } else if (Number(fcstValue[1]) >= 3) {
    return (
      <StyledWeatherIcon>
        <img src={require("../assets/icon_suncloud.png")} alt="흐림" />
        <p>{fcstValue[2]}%</p>
      </StyledWeatherIcon>
    );
  }
  return (
    <StyledWeatherIcon>
      <img src={require("../assets/icon_sun.png")} alt="맑음" />
      <p>{fcstValue[2]}%</p>
    </StyledWeatherIcon>
  );
};

const StyledWeatherIcon = styled.div`
  margin-left: auto;
  p {
    font-size: 16px;
    color: #f0f0f0;
    text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.2);
  }
  img {
    width: 40px;
  }
  @media screen and (max-width: 900px) {
    order: 1;
    margin: 0;
  }
`;
