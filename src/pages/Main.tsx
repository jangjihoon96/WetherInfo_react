import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { WeatherIcon } from "../components/WeatherIcon";
import { Jujeob } from "../components/Jujeob";

export const Main = () => {
  let today = new Date();
  let year = today.getFullYear();
  let month = today.getMonth() + 1;
  let day = today.getDate().toString();
  if (Number(day) < 10) day = "0" + day;
  let hours = today.getHours();
  let minutes = today.getMinutes();
  let now = year.toString() + month.toString() + day.toString();
  let hours_al = ["02", "05", "08", "11", "14", "17", "20", "23"];
  let near_hour_al = "";
  if (hours >= 23) {
    if (minutes <= 10) {
      near_hour_al = hours_al[6];
    } else {
      near_hour_al = hours_al[7];
    }
  } else if (hours >= 20) {
    if (minutes <= 10) {
      near_hour_al = hours_al[5];
    } else {
      near_hour_al = hours_al[6];
    }
  } else if (hours >= 17) {
    if (minutes <= 10) {
      near_hour_al = hours_al[4];
    } else {
      near_hour_al = hours_al[5];
    }
  } else if (hours >= 14) {
    if (minutes <= 10) {
      near_hour_al = hours_al[3];
    } else {
      near_hour_al = hours_al[4];
    }
  } else if (hours >= 11) {
    if (minutes <= 10) {
      near_hour_al = hours_al[2];
    } else {
      near_hour_al = hours_al[3];
    }
  } else if (hours >= 8) {
    if (minutes <= 10) {
      near_hour_al = hours_al[1];
    } else {
      near_hour_al = hours_al[2];
    }
  } else if (hours >= 5) {
    if (minutes <= 10) {
      near_hour_al = hours_al[0];
    } else {
      near_hour_al = hours_al[1];
    }
  } else if (hours >= 2) {
    if (minutes <= 10) {
      now = String(+now - 1);
      near_hour_al = hours_al[7];
    } else {
      near_hour_al = hours_al[0];
    }
  } else {
    now = String(+now - 1);
    near_hour_al = hours_al[7];
  }
  console.log(near_hour_al);
  const [region, setRegion] = useState<string>("");
  const [currentTmp, setCurrentTmp] = useState<any[]>([]);
  const [date, setDate] = useState(now);
  const filterData = ["POP", "SKY", "TMP"];
  const fetchData = (region: string, nx: number, ny: number) => {
    setRegion(region);
    setCurrentTmp([]);
    const secretKey = process.env.REACT_APP_WEATHER_SECRET_KEY;
    axios
      .get(
        `https://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getVilageFcst?serviceKey=${secretKey}&pageNo=1&numOfRows=1000&dataType=JSON&base_date=${now}&base_time=${near_hour_al}00&nx=${nx}&ny=${ny}`
      )
      .then((res) => {
        let result = res.data.response.body.items.item;
        // console.log(result);
        const currentTemperature = result.filter((item: any) =>
          filterData.includes(item.category)
        );
        console.log(currentTemperature);
        // 결과를 저장할 빈 배열
        const outputData: any[] = [];

        // 데이터를 처리하면서 원하는 형태로 합칩니다
        currentTemperature.forEach((item: any) => {
          const existingItem = outputData.find(
            (outputItem) =>
              outputItem.baseDate === item.baseDate &&
              outputItem.baseTime === item.baseTime &&
              outputItem.fcstDate === item.fcstDate &&
              outputItem.fcstTime === item.fcstTime
          );

          if (existingItem) {
            existingItem.fcstValue.push(item.fcstValue);
          } else {
            item.fcstValue = [item.fcstValue];
            outputData.push(item);
          }
        });
        console.log(outputData);
        setCurrentTmp(outputData);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const seoulTmp = () => {
    fetchData("서울", 60, 127);
  };
  const inchenTmp = () => {
    fetchData("인천", 55, 124);
  };
  const gyeonggidoTmp = () => {
    fetchData("경기도", 60, 121);
  };
  const gangwondoTmp = () => {
    fetchData("강원도", 92, 131);
  };
  const chungcheongbukdoTmp = () => {
    fetchData("충청북도", 69, 106);
  };
  const chungcheongnamdoTmp = () => {
    fetchData("충청남도", 68, 100);
  };
  const jeollabukdoTmp = () => {
    fetchData("전라북도", 63, 89);
  };
  const jeollanamdoTmp = () => {
    fetchData("전라남도", 50, 67);
  };
  const gyeongsangbukdoTmp = () => {
    fetchData("경상북도", 91, 106);
  };
  const gyeongsangnamdoTmp = () => {
    fetchData("경상남도", 90, 77);
  };
  const jejuTmp = () => {
    fetchData("제주도", 52, 38);
  };
  let korea = [
    { region: "서울", nx: 60, ny: 127, event: seoulTmp },
    { region: "인천", nx: 55, ny: 124, event: inchenTmp },
    { region: "경기도", nx: 60, ny: 121, event: gyeonggidoTmp },
    { region: "강원도", nx: 92, ny: 131, event: gangwondoTmp },
    { region: "충청북도", nx: 69, ny: 106, event: chungcheongbukdoTmp },
    { region: "충청남도", nx: 68, ny: 100, event: chungcheongnamdoTmp },
    { region: "전라북도", nx: 63, ny: 89, event: jeollabukdoTmp },
    { region: "전라남도", nx: 50, ny: 67, event: jeollanamdoTmp },
    { region: "경상북도", nx: 91, ny: 106, event: gyeongsangbukdoTmp },
    { region: "경상남도", nx: 90, ny: 77, event: gyeongsangnamdoTmp },
    { region: "제주도", nx: 52, ny: 38, event: jejuTmp },
  ];
  useEffect(() => {
    seoulTmp();
  }, []);
  return (
    <StyledContainer>
      <h1>오늘의 날씨</h1>
      <StyledUl>
        {korea.map((btn, idx) => {
          return (
            <li key={idx}>
              <button type="button" onClick={btn.event}>
                {btn.region}
              </button>
            </li>
          );
        })}
      </StyledUl>
      <StyledContents>
        <h2 className="region">{region} 날씨</h2>
        <p className="date">
          {date.slice(0, 4)}년 {date.slice(4, 6)}월 {date.slice(6)}일
        </p>
        {currentTmp.length !== 0 ? (
          currentTmp
            .filter(
              (a) =>
                (a.fcstDate === now && a.category === "TMP") ||
                (a.fcstDate === now && a.category === "POP") ||
                (a.fcstDate === now && a.category === "SKY")
            )
            .map((a, idx) => {
              return (
                <StyledCard key={idx}>
                  <p className="time">{a.fcstTime.slice(0, 2)}시</p>
                  <Jujeob fcstValue={a.fcstValue} />
                  <WeatherIcon fcstValue={a.fcstValue} />
                  <p className="tmp">{a.fcstValue[0]}&#8451;</p>
                </StyledCard>
              );
            })
        ) : (
          <div>데이터 불러오는 중...</div>
        )}
      </StyledContents>
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  box-sizing: border-box;
  max-width: 840px;
  padding: 0 20px;
  margin: 0 auto;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  h1 {
    font-size: 40px;
    padding: 40px 0;
    text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.2);
  }
`;
const StyledUl = styled.ul`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  padding: 0;
  gap: 10px;
  li {
    list-style: none;
  }
  button {
    background-color: #418781;
    font-weight: 700;
    color: #ffffff;
    border: 0;
    padding: 8px 12px;
    border-radius: 4px;
    cursor: pointer;
    &:hover {
      background-color: #55b2aa;
    }
  }
`;

const StyledContents = styled.div`
  width: 100%;
  .region {
    font-size: 32px;
    font-weight: 700;
    margin-top: 40px;
    margin-bottom: 10px;
    text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.2);
  }
  .date {
    font-size: 28px;
    margin-bottom: 20px;
    text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.2);
  }
`;

const StyledCard = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  box-sizing: border-box;
  padding: 16px 30px;
  margin-bottom: 20px;
  background-color: rgba(0, 0, 0, 0.3);
  font-size: 24px;
  text-align: center;
  border-radius: 8px;
  .time {
    flex-shrink: 0;
    font-weight: 700;
    font-size: 24px;
    padding: 0;
    text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.2);
  }
  .tmp {
    min-width: 60px;
    margin-left: 10px;
    font-weight: 700;
    font-size: 24px;
    padding: 0;
    text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.2);
  }
  @media screen and (max-width: 900px) {
    flex-flow: row wrap;
    justify-content: center;
    padding: 20px 16px;
    gap: 16px;
    .time {
      margin: 0;
      order: 0;
    }
    .tmp {
      min-width: auto;
      margin: 0;
      order: 2;
    }
  }
`;
