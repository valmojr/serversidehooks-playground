async function sendDiscordMessage() {
    const discord_webhook = "https://discord.com/api/webhooks/1073007808334803036/LGs14Mx4ko-H5qIZPK4q-4pdiCf1TMTpm9CfN4SOYSYwR_ClqNxPwsPk6FkKV4j4AQsh";

    const error_pbo = process.argv[2];
    const error_message = "O PBO " + error_pbo + "não foi enpacotado corretamente, verifique se está usando a versão correta do mikero";

    const content = `⛔ ${error_pbo}\n\n` + "```\n" + error_message + "\n```";

    console.log("ERROR: " + error_message);

    await fetch(discord_webhook, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            content
        })
    }); 
}

sendDiscordMessage().catch(console.error);