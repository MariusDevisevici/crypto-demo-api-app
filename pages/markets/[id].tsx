import { useRouter } from "next/router";
import { getDataID } from "../../utils/fetchapi";
function CoinDetails({ data }: { data: string }) {
  console.log(data);

  return <></>;
}

export default CoinDetails;

export async function getServerSideProps(context: any) {
  const params = context.params.id;
  const data = await getDataID(params);
  return {
    props: {
      data,
    },
  };
}
