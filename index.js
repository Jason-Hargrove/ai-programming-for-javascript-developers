import OpenAI from 'openai'

const openai = new OpenAI()

async function imageDescription() {
  let response = await openai.chat.completions.create({
    messages: [
      {
        role: 'user',
        content: [
          {
            type: 'text',
            text: 'What is this a picture of?',
          },
          {
            type: 'image_url',
            image_url: {
              url: 'https://images.squarespace-cdn.com/content/v1/57902faa59cc68a958c59c03/067c935d-c1b3-47a0-8b71-5730940bc0c9/santa-lexie.jpg',
            },
          },
        ],
      },
    ],
    model: 'gpt-4-vision-preview',
    max_tokens: 100,
  })
  console.log(response.choices[0].message)
}

imageDescription()
