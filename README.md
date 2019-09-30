# Assets Self-Listing
Please follow these steps to add your token's logo and additional information to our assets database which will be used across our products, notably the information will be displayed on our exchange's dashboards & in Saturn Wallet. This helps our users research your token and ensures your community does not confuse your token with another, therefore, we ask you be as accurate as possible.

For any token listing support you can reach us via email: contact@saturn.network

## How to add your logo & additional information
* Step 1: Ensure you have a 200x200 logo on a transparent background in PNG format ready. For the best results, your logo should take up most of the canvas & you do not want to have a transparent margin around it.
* Step 2: Fork the project's repository.
* Step 3: Upload your token's logo to the relevant directory: Ethereum tokens go in assets/eth/logo/ whereas Ethereum Classic tokens go in assets/etc/logo/.
* Step 4: Add your token's information to the relevant JSON file: Ethereum tokens use assets/eth/tokens.json whereas Ethereum Classic tokens use assets/etc/tokens.json. Follow this format:
```
{
  "name": "Token Name",
  "address": "Token Address",
  "symbol": "Token Ticker",
  "decimals": Token Decimals,
  "logo": "https://github.saturn.network/BLOCKCHAIN/logo/YOUR_TOKEN_SYMBOL.png",
  "website": "Link to your website",
  "twitter": "Link to your Twitter profile"
}
```
* Step 5: Create a Pull Request.

## **Please note we have to manually approve pull requests and we may refuse requests containing abusive content or misleading information that will alienate our website visitors.**

## **Our exchange is [censorship-free](https://forum.saturn.network/t/our-philosophy/1550), so steps above are not a requirement for your token to be tradable.**

