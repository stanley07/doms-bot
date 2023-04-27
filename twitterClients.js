const {twitterApi, TwitterApi} = require("twitter-api-v2");

const client = new TwitterApi({

    appKey: "cxinT7RGJE2qQx8azDcvn4ByK",
    appSecret: "OlWBFfSWP7bxEazqJf5H0fn79DfUnQKgKKUMxTx5MjQQwvgwmf",
    accessToken: "1558396010921185280-2GKayFJ34uKbkfPqgPJ5b99nUTUv9v",
    accessSecret: "IdDOhletatyizK9rPDUaURzirPbWJ9Pd3tqwPz1S7FIpK"
})

const rwClient = client.readWrite

module.exports = rwClient