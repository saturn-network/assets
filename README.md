# Assets Self-Listing
Please follow these steps to add your token's logo and additional information to our assets database which will be used across our products, notably the information will be displayed on [our exchange's dashboards](https://saturn.network) & in [Saturn Wallet](https://www.saturn.network/blog/saturn-wallet/). This helps our users research your token and ensures traders do not confuse your token with another, therefore, we ask you be as accurate as possible.

If you need any help please [follow this guide](https://www.saturn.network/blog/token-self-listing-guide/).

For any token listing support you can reach us via email: contact@saturn.network

## How to add your logo & additional information
* Step 1: Ensure you have a 200x200 logo on a transparent background in PNG format ready. For the best results, your logo should take up most of the canvas & you do not want to have a transparent margin around it. We also recommend announcing your project in our [forum](https://forum.saturn.network/c/cryptocurrencies).
* Step 2: Fork the project's repository.
* Step 3: Upload your token's logo to the relevant directory: Ethereum tokens go in assets/eth/logo/ whereas Ethereum Classic tokens go in assets/etc/logo/.
* Step 4: Add your token's information to the relevant JSON file: Ethereum tokens use assets/eth/tokens.json whereas Ethereum Classic tokens use assets/etc/tokens.json. 

For any information you do not have, do not leave it blank, remove the whole row.

Here is an an example below for Saturn DAO Token:
```
  {
    "name": "Saturn DAO Token",
    "address": "0xb9440022a095343b440d590fcd2d7a3794bd76c8",
    "symbol": "SATURN",
    "decimals": 4,
    "logo": "https://github.saturn.network/eth/logo/saturn.png",
    "website": "https://saturn.network/",
    "twitter": "https://twitter.com/SaturnProtocol",
    "reddit": "https://www.reddit.com/r/saturnnetwork/",
    "telegram": "https://t.me/saturn_dao",
    "facebook": "https://www.facebook.com/saturn.protocol",
    "saturn_blog_tag": "saturn-network",
    "forum": "https://forum.saturn.network/t/what-is-saturn-token/1999",
    "coingecko": "https://www.coingecko.com/en/coins/saturn-dao-token",
    "discord": "https://discord.gg/qwb7xNq"
  }
```

* Step 5: Create a Pull Request.

## **Please note we have to manually approve pull requests and we may refuse requests containing abusive content or misleading information that will alienate our website visitors.**

## **Our exchange is [censorship-free](https://forum.saturn.network/t/our-philosophy/1550), so steps above are not a requirement for your token to be tradable.**

