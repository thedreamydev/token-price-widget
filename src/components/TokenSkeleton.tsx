import React from "react";

const TokenSkeleton: React.FC = () => (
  <div role="status" aria-label="Loading Token Price" className="animate-pulse">
    <div className="flex items-center justify-between mb-4">
      <div className="flex items-center gap-2">
        <div className="size-6 rounded-full bg-gray-200" />
        <div>
          <div className="h-4 w-14 bg-gray-200 rounded-md" />
        </div>
      </div>
      <div className="h-4 w-12 bg-gray-200 rounded-md" />
    </div>
    <div className="h-8 w-24 bg-gray-200 rounded-md" />
  </div>
);

export default TokenSkeleton;
