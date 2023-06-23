// generate a script to send a HTTP post request to a discord webhook
// example command to run this script: node success.js succes_pbo

discord_webhook = "https://discord.com/api/webhooks/1073007808334803036/LGs14Mx4ko-H5qIZPK4q-4pdiCf1TMTpm9CfN4SOYSYwR_ClqNxPwsPk6FkKV4j4AQsh";

sucess_pbo = process.argv[2];

content = `PBO ${error_pbo} fechado com sucesso`;

fetch(discord_webhook, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        content
    })
});