import { siteConfig } from "@/config/site";
import { ButtonLink } from "@/components/ui/ButtonLink";

// Visual preview only. Fixed sample data, never presented as live market data.
type Level = { price: number; size: number };
type Row = Level & { total: number };

// Both lists start at the best price and move away from the spread.
const asks: Level[] = [
  { price: 3214.4, size: 0.67 },
  { price: 3214.62, size: 1.32 },
  { price: 3214.98, size: 0.91 },
  { price: 3215.31, size: 0.56 },
  { price: 3215.74, size: 1.14 },
  { price: 3216.1, size: 0.82 },
];
const bids: Level[] = [
  { price: 3214.12, size: 0.71 },
  { price: 3213.86, size: 1.08 },
  { price: 3213.47, size: 0.64 },
  { price: 3213.05, size: 1.25 },
  { price: 3212.69, size: 0.83 },
  { price: 3212.31, size: 1.17 },
];

function withTotals(levels: Level[]): Row[] {
  let running = 0;
  return levels.map((l) => {
    running += l.size;
    return { ...l, total: running };
  });
}

const askRows = withTotals(asks);
const bidRows = withTotals(bids);
const maxTotal = Math.max(
  askRows[askRows.length - 1].total,
  bidRows[bidRows.length - 1].total,
);

const bestAsk = asks[0].price;
const bestBid = bids[0].price;
const spread = bestAsk - bestBid;
const mid = (bestAsk + bestBid) / 2;
const midLabel = mid.toLocaleString("en-US", {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});
const spreadLabel = `${spread.toFixed(2)} (${((spread / mid) * 100).toFixed(3)}%)`;

function BookRow({ row, side }: { row: Row; side: "ask" | "bid" }) {
  const pct = Math.min(100, (row.total / maxTotal) * 100);
  const isAsk = side === "ask";
  return (
    <div className="relative flex justify-between px-3.5 py-[5px] font-mono text-[10px] min-[381px]:text-[11px] phone:px-[18px] phone:text-[13px]">
      <span
        aria-hidden="true"
        className={`bar-grow absolute inset-y-0 z-0 ${isAsk ? "right-0 origin-right bg-ask/8" : "left-0 origin-left bg-mint/8"}`}
        style={{ width: `${pct}%` }}
      />
      <span className={`relative z-[1] ${isAsk ? "text-ask" : "text-mint"}`}>
        {row.price.toFixed(2)}
      </span>
      <span className="relative z-[1] text-muted">{row.size.toFixed(3)}</span>
      <span className="relative z-[1] text-muted">{row.total.toFixed(2)}</span>
    </div>
  );
}

export function OrderBookPreview() {
  return (
    <div
      role="group"
      aria-label="Order book preview with example data"
      style={{ "--d": "200ms" } as React.CSSProperties}
      className="anim-fade-up mx-auto w-full max-w-[720px] min-w-0 overflow-hidden rounded-card border border-line bg-panel tablet:mx-0 tablet:max-w-none"
    >
      <div className="flex items-center justify-between gap-3 border-b border-line p-3.5 phone:px-[18px] phone:py-4">
        <div className="flex min-w-0 flex-wrap items-center gap-2 text-[14.5px] font-semibold">
          <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-mint" />
          ETH / USDC
          <span className="ml-1.5 text-[10px] font-semibold uppercase tracking-[0.08em] opacity-55">
            Market preview · Example data
          </span>
        </div>
        <div className="font-mono text-[14.5px] text-mint">{midLabel}</div>
      </div>

      <div className="flex justify-between px-3.5 pb-1 pt-[9px] font-mono text-[10px] text-muted phone:px-[18px] phone:pt-2.5 phone:text-[11.5px]">
        <span>Price</span>
        <span>Size</span>
        <span>Total</span>
      </div>

      <div className="pb-1 pt-1.5">
        {/* Farthest ask on top, best ask next to the spread */}
        {[...askRows].reverse().map((row) => (
          <BookRow key={row.price} row={row} side="ask" />
        ))}
      </div>

      <div className="flex items-center justify-between border-y border-line bg-panel-2 px-3.5 py-[9px] text-[11px] text-muted phone:px-[18px] phone:text-xs">
        <span>Spread</span>
        <b className="font-mono font-medium text-fg">{spreadLabel}</b>
      </div>

      <div className="pb-1 pt-1.5">
        {bidRows.map((row) => (
          <BookRow key={row.price} row={row} side="bid" />
        ))}
      </div>

      <p className="border-y border-white/5 px-3.5 py-2 text-[11px] leading-[1.4] text-fg/55">
        Example order-book data — live prices appear in the Vorqexa trading app.
      </p>

      <div className="flex gap-2.5 px-3.5 py-3 phone:px-[18px] phone:py-3.5">
        <ButtonLink href={siteConfig.dexUrl} variant="ghost" size="block" aria-label="Sell">
          Sell
        </ButtonLink>
        <ButtonLink href={siteConfig.dexUrl} size="block" aria-label="Buy">
          Buy
        </ButtonLink>
      </div>
    </div>
  );
}
