import {} from "react";
import styles from "./Lists.module.css";

function ListSort({
  reverse,
  setReverse,
  setSortCase,
}: {
  reverse: any;
  setReverse: any;
  setSortCase: any;
}) {
  return (
    <ul className={styles.market__top}>
      <li>Name</li>
      <li
        onClick={() => {
          setReverse(!reverse);
          setSortCase("price");
        }}
      >
        Last Price <span></span>
        <span></span>
      </li>
      <li
        onClick={() => {
          setReverse(!reverse);
          setSortCase("change");
        }}
      >
        24h Change <span></span>
        <span></span>
      </li>
      <li
        onClick={() => {
          setReverse(!reverse);
          setSortCase("cap");
        }}
      >
        Market Cap <span></span>
        <span></span>
      </li>
    </ul>
  );
}

export default ListSort;
