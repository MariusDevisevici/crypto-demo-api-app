import { GetServerSideProps } from "next";
import { useEffect, useState } from "react";
import Banner from "../components/banner/Banner";
// import Carrousel from "../components/carrousel/Carrousel";
import { getData } from "../utils/fetchapi";
import BarLoader from "react-spinners/BarLoader";
import styles from "../styles/Home.module.css";
import FeaturedList from "../components/lists/FeaturedList";
import Link from "next/link";
function Home({ data }: { data: JSON }) {
  const [clientData, setClientData] = useState();

  useEffect(() => {
    const interval = setInterval(async () => {
      const data = await getData();

      return setClientData(data);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  if (!clientData) {
    return (
      <>
        <section title="Hero Section" className={styles.container}>
          <Banner></Banner>
        </section>
        <section
          className={`${styles.container} ${styles.section__second}`}
          style={{
            marginBottom: " 1rem",
          }}
        >
          <h1>Featured cryptocurrencies</h1>
          <BarLoader color="#00ce79"></BarLoader>
        </section>
      </>
    );
  }

  return (
    <>
      <section title="Hero Section" className={styles.container}>
        <Banner></Banner>
      </section>
      <section
        title="Featured Section"
        className={`${styles.container} ${styles.section__second}`}
      >
        <h1>Featured cryptocurrencies</h1>
        <FeaturedList data={clientData}></FeaturedList>
        <Link href="/markets">
          <a> Show more </a>
        </Link>
      </section>
      {/* <Carrousel data={clientData}></Carrousel> */}
    </>
  );
}

export default Home;

export const getServerSideProps: GetServerSideProps = async () => {
  const data = await getData();
  return {
    props: {
      data,
    },
  };
};
