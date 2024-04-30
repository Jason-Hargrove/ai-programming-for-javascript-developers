import OpenAI from 'openai'

const openai = new OpenAI()

async function hello() {
  const stream = await openai.chat.completions.create({
    messages: [
      {
        role: 'system',
        content:
          'You are a great motivational speaker and artist who encourages me as an artist to keep studying and doing the hard work necessary for success',
      },
      {
        role: 'user',
        content:
          'What do I need to study to be a great artist who takes advantage of the latest techniques',
      },
    ],
    model: 'gpt-3.5-turbo',
    stream: true,
  })
  for await (const chunk of stream) {
    process.stdout.write(chunk.choices[0].delta.content || '')
  }
}

hello()
