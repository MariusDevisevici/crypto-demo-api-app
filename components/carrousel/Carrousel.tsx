import { useState } from "react";
import CarrouseItem from "./CarrouseItem";
import styles from "./Carrousel.module.css";
function Carrousel({ data }: { data: any }) {
  return (
    <div className={styles.marquee}>
      <CarrouseItem data={data}></CarrouseItem>
      <CarrouseItem data={data}></CarrouseItem>
    </div>
  );
}

export default Carrousel;
