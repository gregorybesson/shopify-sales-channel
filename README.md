# shopify-sales-channel
This is a NodeJS + express implementation of a Shopify Sales Channel

doc: https://help.shopify.com/api/sdks/sales-channel-sdk

## routes of your web server:
- /install: The shop can subscribe to your service
- /api/product_listings : list the products on this Sales Channel

## Webhooks
A webhook is subscribed at this endpoint: product_listings/add

Each time a product is added to your sales channel, your route is called
