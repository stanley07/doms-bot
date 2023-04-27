const rwClient = require("./twitterClients.js");
const CronJob = require("cron").CronJob;

const tweet = async () => {
    try {
        await rwClient.v1.tweet("Good Morning World!")
    } catch (e) {
        console.error(e)
    }
}

const job = new CronJob("* * * * *", () => {
    console.log('cron job starting!')
    tweet()
})

job.start();