import React from "react";
import { getData } from "../../utils/fetchapi";

function Coins({ data }: { data: any }) {
  console.log(data);

  return (
    <div>
      {data.map((el: any, i: number) => {
        return <h1>{el.name}</h1>;
      })}
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
