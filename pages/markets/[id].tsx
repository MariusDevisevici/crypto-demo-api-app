import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Graph from "../../components/graph/Graph";
import { getDataID } from "../../utils/fetchapi";
import { json } from "stream/consumers";
function CoinDetails({ data }: { data: object }) {
  return (
    <>
      <Graph days={7}></Graph>
    </>
  );
}

export default CoinDetails;

export async function getServerSideProps(context: any) {
  const params = context.params.id;
  const data = await getDataID(params);
  console.log(data);

  return {
    props: {
      data,
    },
  };
}
