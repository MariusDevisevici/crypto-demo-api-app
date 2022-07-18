import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import styles from "./Graph.module.css";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { BarLoader } from "react-spinners";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);
function Graph({ days }: { days: number }) {
  const [prices, setPrices] = useState();
  const router = useRouter();
  const gettingData = async () => {
    const response =
      await fetch(`https://api.coingecko.com/api/v3/coins/${router.query.id}/market_chart?vs_currency=usd&days=${days}&interval=daily
      `);
    const data = await response.json();
    

    const pricesList = data.prices.map((el: any, i: number) => {
      return el[1];
    });
    setPrices(pricesList);
  };
  useEffect(() => {
    gettingData();
  }, []);

  const data: any = {
    labels:
      days > 1
        ? Array(days)
            .fill("")
            .map((el, i: number) => {
              return i + 1;
            })
        : Array(24)
            .fill("")
            .map((el, i: number) => {
              return i + 1;
            }),
    datasets: [
      {
        label: "Price",
        fill: false,
        lineTension: 0.1,
        backgroundColor: "gold",
        borderColor: "gray",
        borderCapStyle: "butt",
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: "miter",
        pointBorderColor: "#00ce79",
        pointBackgroundColor: "#00ce79",
        pointBorderWidth: 3,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "#00ce79",
        pointHoverBorderColor: "#00ce79",
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: prices,
      },
    ],
  };

  if (!prices) {
    return (
      <div>
        <BarLoader color="#00ce79"></BarLoader>
      </div>
    );
  }

  return (
    <div className={styles.graph}>
      <Line data={data}></Line>
    </div>
  );
}

export default Graph;
