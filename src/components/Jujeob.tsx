import React, { useEffect, useState } from "react";
import styled from "styled-components";
import {
  jujeobCloud0,
  jujeobCloud10,
  jujeobCloud20,
  jujeobCloudMinus,
  jujeobRain0,
  jujeobRain10,
  jujeobRain20,
  jujeobRainMinus,
  jujeobRandom,
  jujeobSun0,
  jujeobSun10,
  jujeobSun20,
  jujeobSunCloud0,
  jujeobSunCloud10,
  jujeobSunCloud20,
  jujeobSunCloudMinus,
  jujeobSunMinus,
} from "../data/jujeobData";

interface JujeobProps {
  fcstValue: string;
}

export const Jujeob: React.FC<JujeobProps> = ({ fcstValue }) => {
  const [jujeob, setJujeob] = useState<string>("");
  useEffect(() => {
    // 20도 이상, 비,눈
    if (Number(fcstValue[0]) >= 20 && Number(fcstValue[1]) >= 9) {
      setJujeob(jujeobRain20[Math.floor(Math.random() * 4)]);
      // 20도 이상, 흐림
    } else if (Number(fcstValue[0]) >= 20 && Number(fcstValue[1]) >= 6) {
      setJujeob(jujeobCloud20[Math.floor(Math.random() * 4)]);
      // 20도 이상, 약간 흐림
    } else if (Number(fcstValue[0]) >= 20 && Number(fcstValue[1]) >= 3) {
      setJujeob(jujeobSunCloud20[Math.floor(Math.random() * 4)]);
      // 20도 이상, 맑음
    } else if (Number(fcstValue[0]) >= 20 && Number(fcstValue[1]) >= 0) {
      setJujeob(jujeobSun20[Math.floor(Math.random() * 4)]);
      // 10도 이상, 비,눈
    } else if (Number(fcstValue[0]) >= 10 && Number(fcstValue[1]) >= 9) {
      setJujeob(jujeobRain10[Math.floor(Math.random() * 4)]);
      // 10도 이상, 흐림
    } else if (Number(fcstValue[0]) >= 10 && Number(fcstValue[1]) >= 6) {
      setJujeob(jujeobCloud10[Math.floor(Math.random() * 4)]);
      // 10도 이상, 약간 흐림
    } else if (Number(fcstValue[0]) >= 10 && Number(fcstValue[1]) >= 3) {
      setJujeob(jujeobSunCloud10[Math.floor(Math.random() * 4)]);
      // 10도 이상, 맑음
    } else if (Number(fcstValue[0]) >= 10 && Number(fcstValue[1]) >= 0) {
      setJujeob(jujeobSun10[Math.floor(Math.random() * 4)]);
      // 0도 이상, 비,눈
    } else if (Number(fcstValue[0]) >= 0 && Number(fcstValue[1]) >= 9) {
      setJujeob(jujeobRain0[Math.floor(Math.random() * 4)]);
      // 0도 이상, 흐림
    } else if (Number(fcstValue[0]) >= 0 && Number(fcstValue[1]) >= 6) {
      setJujeob(jujeobCloud0[Math.floor(Math.random() * 4)]);
      // 0도 이상, 약간 흐림
    } else if (Number(fcstValue[0]) >= 0 && Number(fcstValue[1]) >= 3) {
      setJujeob(jujeobSunCloud0[Math.floor(Math.random() * 4)]);
      // 0도 이상, 맑음
    } else if (Number(fcstValue[0]) >= 0 && Number(fcstValue[1]) >= 0) {
      setJujeob(jujeobSun0[Math.floor(Math.random() * 15)]);
      // 영하, 비,눈
    } else if (Number(fcstValue[0]) < 0 && Number(fcstValue[1]) >= 9) {
      setJujeob(jujeobRainMinus[Math.floor(Math.random() * 4)]);
      // 영하, 흐림
    } else if (Number(fcstValue[0]) < 0 && Number(fcstValue[1]) >= 6) {
      setJujeob(jujeobCloudMinus[Math.floor(Math.random() * 4)]);
      // 영하, 약간 흐림
    } else if (Number(fcstValue[0]) < 0 && Number(fcstValue[1]) >= 3) {
      setJujeob(jujeobSunCloudMinus[Math.floor(Math.random() * 4)]);
      // 영하, 맑음
    } else if (Number(fcstValue[0]) < 0 && Number(fcstValue[1]) >= 0) {
      setJujeob(jujeobSunMinus[Math.floor(Math.random() * 4)]);
      // 기타
    } else {
      setJujeob(jujeobRandom[Math.floor(Math.random() * 4)]);
    }
  }, []);
  return <StyledJujeob>{jujeob}</StyledJujeob>;
};

const StyledJujeob = styled.p`
  font-family: "Binggrae-Regular";
  flex-grow: 1;
  margin: 0 20px;
  font-size: 20px;
  color: #dfdfdf;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
  @media screen and (max-width: 900px) {
    padding-top: 20px;
    border-top: 1px solid #555;
    order: 3;
    width: 100%;
    font-size: 24px;
  }
  @media screen and (max-width: 500px) {
  }
`;
