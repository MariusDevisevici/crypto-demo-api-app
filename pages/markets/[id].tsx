import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Graph from "../../components/graph/Graph";
import { getDataID } from "../../utils/fetchapi";
import { json } from "stream/consumers";
import { BarLoader } from "react-spinners";
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
      <div>
        <h1>{details.name}</h1>
        <span>{details.market_data.current_price.usd}$</span>
        <span></span>
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
