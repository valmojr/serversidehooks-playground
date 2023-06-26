import fs from 'fs';
import config from './config.json' assert { type: 'json' };;

async function sendDiscordMessage() {
    const discord_webhook = "https://discord.com/api/webhooks/1073007808334803036/LGs14Mx4ko-H5qIZPK4q-4pdiCf1TMTpm9CfN4SOYSYwR_ClqNxPwsPk6FkKV4j4AQsh";

    const error_pbo = process.argv[2];

    const commit_hash = process.argv[3];

    const commit_author = process.argv[4];

    const commit_message = process.argv[5];

    const logFilePath = `P:\\temp\\${error_pbo}.packing.log`;

    const maxMessageLength = 1000;

    fs.readFile(logFilePath, 'utf8', async (err, data) => {
        if (err) {
            console.error(err);
            return;
        };

        let content;

        if (data.length > maxMessageLength) {
            const startIndex = data.length - maxMessageLength;
            content = `⛔ ${error_pbo}\n` + '\n' + `${commit_author} - ${commit_hash} - ${commit_message}` + "\n```\n" + data.slice(startIndex) + "\n```";
          } else {
            content = `⛔ ${error_pbo}\n` + '\n' + `${commit_author} - ${commit_hash} - ${commit_message}` + "\n```\n" + data + "\n```";
          }

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
    });
}

sendDiscordMessage().catch(console.error);