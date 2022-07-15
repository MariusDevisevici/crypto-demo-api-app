export async function getData() {
  const response =
    await fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&sparkline=false
  `);

  const data = await response.json();

  return data;
}

export async function getDataID(id: any) {
  const response = await fetch(`https://api.coingecko.com/api/v3/coins/${id}`);
  const data = await response.json();
  return data;
}
