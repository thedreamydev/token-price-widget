import r2wc from "@r2wc/react-to-web-component";

import styles from "./styles/global.css?inline";

import TokenPriceWidget, {
  type TokenPriceWidgetProps,
} from "./components/TokenPriceWidget";

const StyledTokenPriceWidget: React.FC<TokenPriceWidgetProps> = (props) => (
  <>
    <style dangerouslySetInnerHTML={{ __html: styles }} />
    <TokenPriceWidget {...props} />
  </>
);

const TokenPriceWebComponent = r2wc(StyledTokenPriceWidget, {
  props: {
    chainId: "number",
    tokenAddress: "string",
    refreshInterval: "number",
  },
  shadow: "open", // Enable shadow DOM
});

// register the custom element
if (!customElements.get("token-price-widget")) {
  customElements.define("token-price-widget", TokenPriceWebComponent);
}

export default TokenPriceWebComponent;
