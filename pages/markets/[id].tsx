import { useRouter } from "next/router";
function CoinDetails({ data }: { data: string }) {
  return <div>{data}</div>;
}

export default CoinDetails;

export async function getServerSideProps(context: any) {
  const params = context.params.id;

  return {
    props: {
      data: params,
    },
  };
}
