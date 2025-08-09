# Token Price Widget

> A lightweight, framework-agnostic Web Component for showing real-time ERC-20 token prices and 24h changes.
> Embed it anywhere - no build tools required.

## 🚀 Quick Start

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Token Price Widget Demo</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />

    <style>
      body {
        font-family: sans-serif;
        background-color: #f9fafb;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 16px;
        flex-wrap: wrap;
        min-height: 100vh;
      }
    </style>
  </head>
  <body>
    <div>
      <h2>Default</h2>
      <token-price-widget
        chain-id="1"
        token-address="0x7fc66500c84a76ad7e9c93437bfc5ac33e2ddae9"
      ></token-price-widget>
    </div>

    <div>
      <h2>Custom Refresh Interval (30ms)</h2>
      <token-price-widget
        chain-id="1"
        token-address="0xb8c77482e45f1f44de1745f52c74426c631bdd52"
        refresh-interval="30000"
      ></token-price-widget>
    </div>

    <script
      src="https://thedreamydev.github.io/token-price-widget/token-price-widget.iife.js"
      defer
    ></script>
  </body>
</html>
```

---

#### IIFE (Script Tag)

```html
<script
  src="https://thedreamydev.github.io/token-price-widget/token-price-widget.iife.js"
  defer
></script>
```

#### MJS (ES Modules)

```html
<script type="module">
  import "https://thedreamydev.github.io/token-price-widget/token-price-widget.mjs";
</script>
```

## ⚙️ Parameters

| Attribute          | Type   | Required | Default | Description                          |
| ------------------ | ------ | -------- | ------- | ------------------------------------ |
| `chain-id`         | number | ✅       | —       | EVM chain ID (e.g. `1` for Ethereum) |
| `token-address`    | string | ✅       | —       | ERC-20 token contract address        |
| `refresh-interval` | number | ❌       | `60000` | Update interval in milliseconds      |

## 🛠 Troubleshooting

> **Q:** Widget not displaying?
>
> **A:** Make sure the props value are correct and supported by CoinGecko.

> **Q:** Styles broken or missing?
>
> **A:** Verify your bundler correctly processes CSS or inline styles used by the widget.

> **Q:** Rate limit / API errors?
>
> **A:** Increase `refresh-interval` to reduce API calls.
