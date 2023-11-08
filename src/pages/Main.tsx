import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";

export const Main = () => {
  const [region, setRegion] = useState<string>("");
  const [currentTmp, setCurrentTmp] = useState<any[]>([]);
  let today = new Date();
  let year = today.getFullYear();
  let month = today.getMonth() + 1;
  let day = today.getDate().toString();
  if (Number(day) < 10) day = "0" + day;
  let hours = today.getHours();
  let now = year.toString() + month.toString() + day.toString();
  let hours_al = ["02", "05", "08", "11", "14", "17", "20", "23"];
  let near_hour_al = "";
  if (hours <= 3) {
    near_hour_al = hours_al[0];
  } else if (hours <= 6) {
    near_hour_al = hours_al[1];
  } else if (hours <= 9) {
    near_hour_al = hours_al[2];
  } else if (hours <= 12) {
    near_hour_al = hours_al[3];
  } else if (hours <= 15) {
    near_hour_al = hours_al[4];
  } else if (hours <= 18) {
    near_hour_al = hours_al[5];
  } else if (hours <= 21) {
    near_hour_al = hours_al[6];
  } else if (hours <= 24) {
    near_hour_al = hours_al[7];
  }
  let korea = [
    { region: "서울", nx: 60, ny: 127 },
    { region: "인천", nx: 55, ny: 124 },
    { region: "경기도", nx: 60, ny: 121 },
    { region: "강원도", nx: 92, ny: 131 },
    { region: "충청북도", nx: 69, ny: 106 },
    { region: "충청남도", nx: 68, ny: 100 },
    { region: "전라북도", nx: 63, ny: 89 },
    { region: "전라남도", nx: 50, ny: 67 },
    { region: "경상남도", nx: 90, ny: 77 },
    { region: "경상북도", nx: 91, ny: 106 },
    { region: "제주도", nx: 52, ny: 38 },
  ];
  const filterData = ["POP", "PTY", "TMP", "TMN", "TMX"];
  const fetchData = (region: string, nx: number, ny: number) => {
    setRegion(region);
    setCurrentTmp([]);
    const secretKey = process.env.REACT_APP_WEATHER_SECRET_KEY;
    axios
      .get(
        `https://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getVilageFcst?serviceKey=${secretKey}&pageNo=1&numOfRows=100&dataType=JSON&base_date=${now}&base_time=${near_hour_al}00&nx=${nx}&ny=${ny}`
      )
      .then((res) => {
        let result = res.data.response.body.items.item;
        console.log(result);
        const currentTemperature = result.filter((item: any) =>
          filterData.includes(item.category)
        );
        console.log(currentTemperature);
        setCurrentTmp(currentTemperature);
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
  useEffect(() => {
    seoulTmp();
  }, []);
  return (
    <div>
      <h1>전국 날씨 조회</h1>
      <StyledUl>
        <li>
          <button type="button" onClick={seoulTmp}>
            서울
          </button>
        </li>
        <li>
          <button type="button" onClick={inchenTmp}>
            인천
          </button>
        </li>
        <li>
          <button type="button" onClick={gyeonggidoTmp}>
            경기도
          </button>
        </li>
        <li>
          <button type="button" onClick={gangwondoTmp}>
            강원도
          </button>
        </li>
        <li>
          <button type="button" onClick={chungcheongbukdoTmp}>
            충청북도
          </button>
        </li>
        <li>
          <button type="button" onClick={chungcheongnamdoTmp}>
            충청남도
          </button>
        </li>
        <li>
          <button type="button" onClick={jeollabukdoTmp}>
            전라북도
          </button>
        </li>
        <li>
          <button type="button" onClick={jeollanamdoTmp}>
            전라남도
          </button>
        </li>
        <li>
          <button type="button" onClick={gyeongsangbukdoTmp}>
            경상북도
          </button>
        </li>
        <li>
          <button type="button" onClick={gyeongsangnamdoTmp}>
            경상남도
          </button>
        </li>
        <li>
          <button type="button" onClick={jejuTmp}>
            제주도
          </button>
        </li>
      </StyledUl>
      <div>
        <h2>{region} 날씨</h2>
        {currentTmp.length !== 0 ? (
          currentTmp
            .filter(
              (a) =>
                (a.fcstDate === now && a.category === "TMP") ||
                (a.fcstDate === now && a.category === "POP")
            )
            .map((a, idx) => {
              if (idx % 2 === 0) {
                return (
                  <div key={idx}>
                    <p>
                      날짜 : {a.fcstDate.slice(0, 4)}년 {a.fcstDate.slice(4, 6)}
                      월 {a.fcstDate.slice(6)}일, 시간 :{" "}
                      {a.fcstTime.slice(0, 2)}시 {a.fcstTime.slice(2)}분
                    </p>
                    <p>온도 : {a.fcstValue}도</p>
                  </div>
                );
              } else {
                return (
                  <div key={idx}>
                    <p>강수확률 : {a.fcstValue}%</p>
                    <hr />
                  </div>
                );
              }
            })
        ) : (
          <div>데이터 불러오는 중...</div>
        )}
      </div>
    </div>
  );
};

const StyledUl = styled.ul`
  display: flex;
  flex-flow: row nowrap;
  padding: 0;
  gap: 10px;
  li {
    list-style: none;
  }
  button {
    background-color: #6363ff;
    color: #ffffff;
    border: 0;
    padding: 4px 12px;
    border-radius: 4px;
    cursor: pointer;
    &:hover {
      background-color: #8a8aff;
    }
  }
`;
