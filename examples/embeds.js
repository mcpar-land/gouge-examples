const { GougeClient, command } = require('gouge')

const client = new GougeClient({
	id: process.env.CLIENT_ID,
	key: process.env.PUBLIC_KEY,
	secret: process.env.CLIENT_SECRET,
	token: process.env.BOT_TOKEN,
})

client.with(
	command('embed', 'Example of sending an embed').handler(
		async (client, respond) => {
			await respond({
				content: 'This message has an embed.',
				embeds: [
					{
						title: 'Embed!',
						description: 'Check out my cool embed.',
					},
					{
						title: 'Another embed',
						fields: [
							{
								name: 'Field 1',
								value: 'This is a field.',
							},
							{
								name: 'Field 2',
								value: 'This is another field.',
							},
						],
					},
				],
			})
		}
	)
)

client.start(process.env.PORT)
