import styles from "./Carrousel.module.css";
function CarrouseItem({ data }: { data: any }) {
  return (
    <div className={styles.marquee__item}>
      {data.map((el: any, i: number) => {
        return (
          <>
            <img src={el.image} alt="coinLogo" />
            <span className={styles.name}>{el.name}</span>
            <span className={styles.symbol}>{el.symbol}</span>
            <span className={styles.price}>
              {Number(el.current_price).toFixed(3)}$
            </span>
            <span className={styles.percent}>
              {Number(el.price_change_percentage_24h).toFixed(3)}%
            </span>
          </>
        );
      })}
    </div>
  );
}

export default CarrouseItem;
