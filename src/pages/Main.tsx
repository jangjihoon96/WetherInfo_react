import axios from "axios";
import React, { useEffect, useState } from "react";

export const Main = () => {
  const [currentTmp, setCurrentTmp] = useState("");
  const [seoul, setSeoul] = useState([]);
  const [incheon, setIncheon] = useState([]);
  const [gyeonggido, setGyeonggido] = useState([]);
  const [gangwondo, setGangwondo] = useState([]);
  const [chungcheongbukdo, setChungcheongbukdo] = useState([]);
  const [chungcheongnamdo, setChungcheongnamdo] = useState([]);
  const [jeollabukdo, setJeollabukdo] = useState([]);
  const [jeollanamdo, setJeollanamdo] = useState([]);
  const [gyeongsangnamdo, setGyeongsangnamdo] = useState([]);
  const [gyeongsangbukdo, setGyeongsangbukdo] = useState([]);
  const [jeju, setJeju] = useState([]);
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
    const apiRequests = korea.map(({ nx, ny }) => {
      return axios.get(
        `https://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getVilageFcst?serviceKey=2OU9Jg79p0HKybmFKd8HRaUlLTGYtHFpyPIFm2Z3Pf6pDxEnk%2Bc%2BQfnWBk1T0wYvFswug1OxT%2FudNWWwsndtJA%3D%3D&pageNo=1&numOfRows=99&dataType=JSON&base_date=${now}&base_time=${near_hour_al}00&nx=${nx}&ny=${ny}`
      );
    });
    const filterData = ["POP", "PTY", "PCP", "TMP", "TMN", "TMX"];
    Promise.all(apiRequests).then((results) => {
      results.forEach((res, idx) => {
        let items = res.data.response.body.items.item;
        let filterItem = items.filter(
          (item: any) =>
            filterData.includes(item.category) && item.fcstDate === now
        );
        if (idx === 0) {
          setSeoul(filterItem);
        } else if (idx === 1) {
          setIncheon(filterItem);
        } else if (idx === 2) {
          setGyeonggido(filterItem);
        } else if (idx === 3) {
          setGangwondo(filterItem);
        } else if (idx === 4) {
          setChungcheongbukdo(filterItem);
        } else if (idx === 5) {
          setChungcheongnamdo(filterItem);
        } else if (idx === 6) {
          setJeollabukdo(filterItem);
        } else if (idx === 7) {
          setJeollanamdo(filterItem);
        } else if (idx === 8) {
          setGyeongsangnamdo(filterItem);
        } else if (idx === 9) {
          setGyeongsangbukdo(filterItem);
        } else if (idx === 10) {
          setJeju(filterItem);
        }
      });
      // console.log(results[0].data.response.body);
    });
  }, []);
  return (
    <div>
      <h1>전국 날씨 조회</h1>
      <div>
        <h2>서울날씨</h2>
        <p>{JSON.stringify(seoul[0])}</p>
        <p>{JSON.stringify(seoul[1])}</p>
        <p>{JSON.stringify(seoul[2])}</p>
        <p>{JSON.stringify(seoul[3])}</p>
        <hr />
        <h2>인천날씨</h2>
        <p>{JSON.stringify(incheon[0])}</p>
        <p>{JSON.stringify(incheon[1])}</p>
        <p>{JSON.stringify(incheon[2])}</p>
        <p>{JSON.stringify(incheon[3])}</p>
        <hr />
        <h2>경기도날씨</h2>
        <p>{JSON.stringify(gyeonggido[0])}</p>
        <p>{JSON.stringify(gyeonggido[1])}</p>
        <p>{JSON.stringify(gyeonggido[2])}</p>
        <p>{JSON.stringify(gyeonggido[3])}</p>
        <hr />
        <h2>강원도날씨</h2>
        <p>{JSON.stringify(gangwondo[0])}</p>
        <p>{JSON.stringify(gangwondo[1])}</p>
        <p>{JSON.stringify(gangwondo[2])}</p>
        <p>{JSON.stringify(gangwondo[3])}</p>
        <hr />
        <h2>충청북도날씨</h2>
        <p>{JSON.stringify(chungcheongbukdo[0])}</p>
        <p>{JSON.stringify(chungcheongbukdo[1])}</p>
        <p>{JSON.stringify(chungcheongbukdo[2])}</p>
        <p>{JSON.stringify(chungcheongbukdo[3])}</p>
        <hr />
        <h2>충청남도날씨</h2>
        <p>{JSON.stringify(chungcheongnamdo[0])}</p>
        <p>{JSON.stringify(chungcheongnamdo[1])}</p>
        <p>{JSON.stringify(chungcheongnamdo[2])}</p>
        <p>{JSON.stringify(chungcheongnamdo[3])}</p>
        <hr />
        <h2>전라북도날씨</h2>
        <p>{JSON.stringify(jeollabukdo[0])}</p>
        <p>{JSON.stringify(jeollabukdo[1])}</p>
        <p>{JSON.stringify(jeollabukdo[2])}</p>
        <p>{JSON.stringify(jeollabukdo[3])}</p>
        <hr />
        <h2>전라남도날씨</h2>
        <p>{JSON.stringify(jeollanamdo[0])}</p>
        <p>{JSON.stringify(jeollanamdo[1])}</p>
        <p>{JSON.stringify(jeollanamdo[2])}</p>
        <p>{JSON.stringify(jeollanamdo[3])}</p>
        <hr />
        <h2>경상북도날씨</h2>
        <p>{JSON.stringify(gyeongsangbukdo[0])}</p>
        <p>{JSON.stringify(gyeongsangbukdo[1])}</p>
        <p>{JSON.stringify(gyeongsangbukdo[2])}</p>
        <p>{JSON.stringify(gyeongsangbukdo[3])}</p>
        <hr />
        <h2>경상남도날씨</h2>
        <p>{JSON.stringify(gyeongsangnamdo[0])}</p>
        <p>{JSON.stringify(gyeongsangnamdo[1])}</p>
        <p>{JSON.stringify(gyeongsangnamdo[2])}</p>
        <p>{JSON.stringify(gyeongsangnamdo[3])}</p>
        <hr />
        <h2>제주도날씨</h2>
        <p>{JSON.stringify(jeju[0])}</p>
        <p>{JSON.stringify(jeju[1])}</p>
        <p>{JSON.stringify(jeju[2])}</p>
        <p>{JSON.stringify(jeju[3])}</p>
      </div>
    </div>
  );
};
