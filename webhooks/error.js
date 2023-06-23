// generate a script to send a HTTP post request to a discord webhook
// example command to run this script: node error.js error_pbo error_message

discord_webhook = "https://discord.com/api/webhooks/1073007808334803036/LGs14Mx4ko-H5qIZPK4q-4pdiCf1TMTpm9CfN4SOYSYwR_ClqNxPwsPk6FkKV4j4AQsh";

error_pbo = process.argv[2];
error_message = process.argv[3];

content = `Erro ao fechar o PBO ${error_pbo}` + "```" + error_message + "```";

fetch(discord_webhook, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        content
    })
});