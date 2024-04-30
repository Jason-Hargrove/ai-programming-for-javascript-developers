import OpenAI from 'openai'

const openai = new OpenAI()

async function hello(job, text) {
  const stream = await openai.chat.completions.create({
    messages: [
      {
        role: 'system',
        content: 'You are a hiring manager and I need to interview canidates',
      },
      {
        role: 'user',
        content: `Write three interview questions for an ${job} who ${text}`,
      },
    ],
    model: 'gpt-3.5-turbo',
    stream: true,
    max_tokens: 64,
  })
  for await (const chunk of stream) {
    process.stdout.write(chunk.choices[0].delta.content || '')
  }
}

hello(
  'Automation Engineer',
  'has less than a year of automation experince. He was a full stack devlepor before that for 3 years'
)
