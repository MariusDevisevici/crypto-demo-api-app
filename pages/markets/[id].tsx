import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Graph from "../../components/graph/Graph";
import { getDataID } from "../../utils/fetchapi";
import styles from "./Market.module.css";
import { BarLoader } from "react-spinners";
import Image from "next/image";
function CoinDetails({ data }: { data: object }) {
  const [details, setDetails] = useState<any>();
  const router = useRouter();
  useEffect(() => {
    const interval = setInterval(async () => {
      const response = await getDataID(router.query.id);
      setDetails(response);
      console.log(response);
    }, 10000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  if (!details) {
    return (
      <div>
        <BarLoader color="gold"> </BarLoader>
      </div>
    );
  }

  return (
    <div>
      <div className={styles.details}>
        <div className={styles.details__top}>
          <div className={styles.details__row}>
            <Image src={details.image.small} width={50} height={50}></Image>
            <span>{details.symbol}</span>
          </div>

          <h1>{details.name}</h1>
          <span>{details.market_data.current_price.usd}$</span>
        </div>
        <ul className={styles.details__list}>
          <li>
            Market Cap: <span>{details.market_data.market_cap.usd}$</span>
          </li>
          <li>
            Market Cap Rank: <span>{details.market_cap_rank}</span>
          </li>
          <li>
            All time high: <span>{details.market_data.ath.usd}$</span>
          </li>
          <li>
            Genesis Date: <span>{details.genesis_date}</span>
          </li>
          <li>
            Hashing Algorithm: <span>{details.hashing_algorithm}</span>
          </li>
        </ul>
        <h2>Description: </h2>
        <p>{details.description.en}</p>
      </div>

      <Graph days={7}></Graph>
    </div>
  );
}

export default CoinDetails;

export async function getServerSideProps(context: any) {
  const params = context.params.id;
  const data = await getDataID(params);
  console.log(data);
  if (!data) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      data,
    },
  };
}
