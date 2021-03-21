const { GougeClient, command } = require('gouge')

// Quick utility function that delays by a number of seconds.
function sleep(seconds) {
	return new Promise((resolve) => setTimeout(Resolve, seconds * 1000))
}

const client = new GougeClient({
	id: process.env.CLIENT_ID,
	key: process.env.PUBLIC_KEY,
	secret: process.env.CLIENT_SECRET,
})

client.with(
	command('edit', 'Example of editing a response').handler(
		async (client, respond) => {
			const [edit] = await respond('This message will explode in 5...')
			await sleep(1)
			await edit('This message will explode in 4...')
			await sleep(1)
			await edit('This message will explode in 3...')
			await sleep(1)
			await edit('This message will explode in 2...')
			await sleep(1)
			await edit('This message will explode in 1...')
			await sleep(1)
			await edit('BOOM!')
		}
	)
)

client.with(
	command('delete', 'Example to deleting a response').handler(
		async (client, respond) => {
			const [edit, del] = await respond(
				'This message will disappear in 5 seconds...'
			)
			await sleep(5)
			await del()
		}
	)
)

client.with(
	command('followup', 'Example of sending extra responses').handler(
		async (client, respond) => {
			const [edit, del, followup] = await respond(
				'This message will have some responses.'
			)
			await sleep(1)
			await followup('First response!')
			await sleep(1)
			await followup('Second response!')
			await sleep(1)
			await followup('Third response!')
		}
	)
)

client.start(process.env.PORT)
