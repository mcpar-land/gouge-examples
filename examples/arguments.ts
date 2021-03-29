import { GougeClient, command } from 'gouge'

const client = new GougeClient({
	id: process.env.CLIENT_ID,
	key: process.env.PUBLIC_KEY,
	secret: process.env.CLIENT_SECRET,
	token: process.env.BOT_TOKEN,
} as any)

client.with(
	command('foobar', 'Takes int foo and optional string bar')
		.integer('foo', 'foo argument', true)
		.string('bar', 'optional bar argument', false)
		.handler(async (client, respond, [foo, bar]) => {
			await respond('Foo: ' + foo + ' Bar: ' + bar)
		})
)

client.start(process.env.PORT || 3000)
