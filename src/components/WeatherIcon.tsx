import React from "react";
import styled from "styled-components";

interface WeatherIconProps {
  fcstValue: string;
}

export const WeatherIcon: React.FC<WeatherIconProps> = ({ fcstValue }) => {
  if (Number(fcstValue) >= 9) {
    return (
      <StyledWeatherIcon>
        <img src={require("../assets/icon_rain.png")} alt="비" />
      </StyledWeatherIcon>
    );
  } else if (Number(fcstValue) >= 6) {
    return (
      <StyledWeatherIcon>
        <img src={require("../assets/icon_suncloud.png")} alt="매우흐림" />
      </StyledWeatherIcon>
    );
  } else if (Number(fcstValue) >= 3) {
    return (
      <StyledWeatherIcon>
        <img src={require("../assets/icon_cloud.png")} alt="흐림" />
      </StyledWeatherIcon>
    );
  }
  return (
    <StyledWeatherIcon>
      <img src={require("../assets/icon_sun.png")} alt="맑음" />
    </StyledWeatherIcon>
  );
};

const StyledWeatherIcon = styled.div`
  img {
    width: 80px;
  }
`;
