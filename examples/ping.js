const { GougeClient, command } = require('gouge')

const client = new GougeClient({
	id: process.env.CLIENT_ID,
	key: process.env.PUBLIC_KEY,
	secret: process.env.CLIENT_SECRET,
	token: process.env.BOT_TOKEN,
})

client.with(
	command('ping', 'Sends back "pong".').handler(async (client, respond) => {
		await respond('Pong!')
	})
)

client.start(process.env.PORT)
