export const USD = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

export const formatNumberToUSD = (n: number) => USD.format(n);

export const formatNumberWithCommas = (n: number) =>
  n.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
