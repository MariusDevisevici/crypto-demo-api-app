import {} from "react";
import styles from "./Banner.module.css";

function Banner() {
  return (
    <section className={styles.banner}>
      <div>
        <h1>
          Bring <span>stability</span> and <span>growth</span> <br /> in your
          life with
          <br /> 1000+ cryptocurrencies
        </h1>
        <button className={styles.banner__btn}>GET STARTED</button>
      </div>
      <div>
        <img src="/assets/images/Group 2.svg" alt="bannerImage" />
      </div>
    </section>
  );
}

export default Banner;
