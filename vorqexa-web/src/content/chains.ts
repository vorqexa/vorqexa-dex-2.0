export type Chain = { name: string; slug: string; short: string };

export const chains = {
  heading: "Supported on 16+ chains",
  // The five chains shown in the loop
  list: [
    { name: "Ethereum", slug: "ethereum", short: "ETH" },
    { name: "Arbitrum", slug: "arbitrum", short: "ARB" },
    { name: "Optimism", slug: "optimism", short: "OP" },
    { name: "Polygon", slug: "polygon", short: "POL" },
    { name: "BNB Chain", slug: "bnb", short: "BNB" },
  ] satisfies Chain[],
  // Shown after the five as "+ 10 more"
  moreCount: 10,
};
