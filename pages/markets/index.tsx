import { useEffect, useState } from "react";
import { BarLoader } from "react-spinners";
import MarketList from "../../components/lists/MarketList";
import { getData } from "../../utils/fetchapi";

function Coins({ data }: { data: any }) {
  const [clientData, setClientData] = useState();
  useEffect(() => {
    const interval = setInterval(async () => {
      const data = await getData();

      setClientData(data);
    }, 10000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  if (!clientData && !data) {
    return (
      <div>
        <BarLoader></BarLoader>
      </div>
    );
  }

  if (!clientData) {
    return (
      <div>
        <MarketList data={data}></MarketList>
      </div>
    );
  }
  return (
    <div>
      <MarketList data={clientData}></MarketList>
    </div>
  );
}

export default Coins;

export async function getServerSideProps(context: any) {
  const data = await getData();

  return {
    props: {
      data,
    },
  };
}
