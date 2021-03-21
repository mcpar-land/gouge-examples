const { GougeClient, command } = require('gouge')

const client = new GougeClient({
	id: process.env.CLIENT_ID,
	key: process.env.PUBLIC_KEY,
	secret: process.env.CLIENT_SECRET,
	token: process.env.BOT_TOKEN,
})

client.with(
	command('cake', 'Get a cake').handler(async (client, respond) => {
		await respond('You got a cake!')
	})
)

client.with(
	command('bread', 'Various sorts of bread')
		.group(
			'bagels',
			'different kinds of bagels',
			command('plain', 'A plain bagel').handler(async (client, respond) => {
				await respond('You got a plain bagel!')
			}),
			command('poppy', 'A poppy seed bagel').handler(
				async (client, respond) => {
					await respond('You got a poppy seed bagel!')
				}
			),
			command('blueberry', 'A blueberry bagel').handler(
				async (client, respond) => {
					await respond('You got a blueberry bagel!')
				}
			)
		)
		.group(
			'loafs',
			'Different kinds of loafs',
			command('white', 'A white bread loaf').handler(
				async (client, respond) => {
					await respond('You got a white loaf of bread!')
				}
			),
			command('wheat', 'A wheat bread loaf').handler(
				async (client, respond) => {
					await respond('You got a wheat loaf of bread!')
				}
			),
			command('sourdough', 'A sourdough bread loaf').handler(
				async (client, respond) => {
					await respond('You got a loaf of sourdough bread!')
				}
			)
		)
)

client.with(
	command('berries', 'Different sorts of berries')
		.subcommand(
			command('raspberry', 'A raspberry').handler(async (client, respond) => {
				await respond('You got a raspberry!')
			})
		)
		.subcommand(
			command('blueberry', 'A blueberry').handler(async (client, respond) => {
				await respond('You got a blueberry!')
			})
		)
		.subcommand(
			command('orange', 'An orange').handler(async (client, respond) => {
				await respond("You got an orange- hang on, this isn't a berry!")
			})
		)
)

client.start(process.env.PORT)
