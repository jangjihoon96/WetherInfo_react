import React, { useEffect, useState } from "react";

export const Main = () => {
  const [currentTmp, setCurrentTmp] = useState("");
  useEffect(() => {
    let today = new Date();
    let week = ["일", "월", "화", "수", "목", "금", "토"];
    let year = today.getFullYear();
    let month = today.getMonth() + 1;
    let day = today.getDate().toString();
    if (Number(day) < 10) day = "0" + day;
    let hours = today.getHours();
    let minutes = today.getHours();
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
    fetch(
      `https://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getVilageFcst?serviceKey=2OU9Jg79p0HKybmFKd8HRaUlLTGYtHFpyPIFm2Z3Pf6pDxEnk%2Bc%2BQfnWBk1T0wYvFswug1OxT%2FudNWWwsndtJA%3D%3D&pageNo=1&numOfRows=1000&dataType=JSON&base_date=${now}&base_time=${near_hour_al}00&nx=60&ny=127`
    )
      .then((res) => res.json())
      .then((res) => {
        // console.log(res);
        let result = res.response.body.items.item;
        const currentTemperature = result.filter(
          (item: any) => item.category === "TMP" && item.fcstDate === now
        );
        console.log(currentTemperature);
        setCurrentTmp(currentTemperature[0].fcstValue);
      });
  }, []);
  return (
    <div>
      <h1>전국 날씨 조회</h1>
      <div>
        <p>
          서울날씨 <span>{currentTmp}도</span>
        </p>
      </div>
    </div>
  );
};
