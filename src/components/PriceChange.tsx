import React from "react";

type PriceChangeProps = {
  change24h: number | null;
};

const PriceChange: React.FC<PriceChangeProps> = ({ change24h }) => {
  if (change24h === null || isNaN(change24h)) {
    return <span />;
  }

  const isPositive = change24h >= 0;
  const colorClass = isPositive ? "text-green-500" : "text-red-500";

  return (
    <div className={`flex items-center gap-1 font-medium ${colorClass}`}>
      <div className="shrink-0">
        {isPositive ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="size-5"
          >
            <path d="M16 7h6v6" />
            <path d="m22 7-8.5 8.5-5-5L2 17" />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="size-5"
          >
            <path d="M16 17h6v-6" />
            <path d="m22 17-8.5-8.5-5 5L2 7" />
          </svg>
        )}
      </div>
      <span aria-label="24 Hour Change" className="leading-5">
        {change24h.toFixed(2)}%
      </span>
    </div>
  );
};

export default PriceChange;
