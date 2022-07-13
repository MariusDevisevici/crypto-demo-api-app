import {} from "react";
import styles from "./Lists.module.css";
import { useRouter } from "next/router";
import Image from "next/image";

function FeaturedList({ data }: { data: any }) {
  const router = useRouter();

  return (
    <div className={styles.featured__list}>
      <div className={styles.featured__list_top}>
        <h2>Name</h2>
        <h2>Last Price</h2>
        <h2>24h Change</h2>
        <h2 className={styles.market}>Market Cap</h2>
      </div>
      {data.slice(0, 5).map((el: any, i: number) => {
        return (
          <div
            onClick={() => {
              router.push(`/markets/${el.id}`);
            }}
            key={i}
            className={styles.featured__list_items}
          >
            <div>
              <Image width={30} height={30} src={el.image} alt="coinLogo" />{" "}
              {el.name}
              <span>[{el.symbol}]</span>
            </div>
            <div>{Number(el.current_price).toFixed(3)}$</div>
            <div
              className={
                Number(el.price_change_percentage_24h) < 0
                  ? styles.low
                  : styles.high
              }
            >
              {Number(el.price_change_percentage_24h).toFixed(3)}%
            </div>
            <div className={styles.market}>{el.market_cap}</div>
          </div>
        );
      })}
    </div>
  );
}

export default FeaturedList;
