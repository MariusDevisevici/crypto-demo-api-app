import React from "react";

function Coins({ param }: { param: any }) {
  // console.log(param);

  return <div>{param}</div>;
}

export default Coins;

export async function getServerSideProps(context: any) {
  
  return {
    props: {},
  };
}
