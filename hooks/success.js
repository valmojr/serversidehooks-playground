async function sendDiscordMessage() {
    const discord_webhook = "https://discord.com/api/webhooks/1073007808334803036/LGs14Mx4ko-H5qIZPK4q-4pdiCf1TMTpm9CfN4SOYSYwR_ClqNxPwsPk6FkKV4j4AQsh";

    const error_pbo = process.argv[2];

    const content = `✅ ${error_pbo}\n`;

    await fetch(discord_webhook, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            content,
            avatar_url: 'https://noticiasdatv.uol.com.br/media/_versions/sandro_rocha_tropa_de_elite_free_big.jpg',
            username: 'Rocha',
        })
    });
}

sendDiscordMessage().catch(console.error);