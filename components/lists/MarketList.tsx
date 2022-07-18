import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import styles from "./Lists.module.css";
import ListSort from "./ListSort";
function MarketList({ data }: { data: any }) {
  const [reverse, setReverse] = useState(true);
  const [sortCase, setSortCase] = useState();
  return (
    <div className={styles.market__list_wrapper}>
      <ListSort
        reverse={reverse}
        setReverse={setReverse}
        setSortCase={setSortCase}
      ></ListSort>
      {data
        .sort((a: any, b: any) => {
          if (reverse && sortCase === "price") {
            return a.current_price - b.current_price;
          }
          if (!reverse && sortCase === "price") {
            return b.current_price - a.current_price;
          }
          if (reverse && sortCase === "change") {
            return (
              a.price_change_percentage_24h - b.price_change_percentage_24h
            );
          }
          if (!reverse && sortCase === "change") {
            return (
              b.price_change_percentage_24h - a.price_change_percentage_24h
            );
          }

          if (reverse && sortCase === "cap") {
            return a.market_cap - b.market_cap;
          }
          if (!reverse && sortCase === "cap") {
            return b.market_cap - a.market_cap;
          } else {
            return;
          }
        })
        .map((el: any, i: number) => {
          return (
            <div className={styles.market__list} key={i}>
              <Link href={`/markets/${el.id}`}>
                <div className={styles.market__item}>
                  <Image
                    height="30px"
                    src={el.image}
                    width="30px"
                    alt="coin logo"
                  />
                  <span>{el.symbol}</span>
                  <span>{el.name}</span>
                </div>
              </Link>
              <div className={styles.market__item}>
                <span>{el.current_price}$</span>
              </div>
              <div className={styles.market__item}>
                <span
                  className={
                    Number(el.price_change_percentage_24h) < 0
                      ? styles.low
                      : styles.high
                  }
                >
                  {el.price_change_percentage_24h}%
                </span>
              </div>
              <div className={styles.market__item}>
                <span>{el.market_cap}</span>
              </div>
            </div>
          );
        })}
    </div>
  );
}

export default MarketList;
