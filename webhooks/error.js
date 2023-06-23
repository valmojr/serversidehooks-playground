async function sendDiscordMessage() {
    const discord_webhook = "https://discord.com/api/webhooks/1073007808334803036/LGs14Mx4ko-H5qIZPK4q-4pdiCf1TMTpm9CfN4SOYSYwR_ClqNxPwsPk6FkKV4j4AQsh";

    console.log("process: " + process.argv[2]);

    const error_pbo = process.argv[2];
    const error_message = process.argv[3];

    console.log("process: " + error_pbo);

    const content = `Erro ao fechar o PBO ${error_pbo}` + "```" + error_message + "```";

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