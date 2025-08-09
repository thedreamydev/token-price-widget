import React from "react";

type TokenErrorProps = {
  message: string;
};

const TokenError: React.FC<TokenErrorProps> = ({ message }) => (
  <div role="alert" aria-label="Token Price Error">
    <p className="text-center text-sm text-red-600">{message}</p>
  </div>
);

export default TokenError;
