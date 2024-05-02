import 'dotenv/config'
import axios from 'axios'

const generateImage = async (prompt, size = '1024x1024') => {
  const baseUrl = 'https://api.openai.com/v1/images/generations'
  const model = 'dall-e-3'

  try {
    const response = await axios.post(
      baseUrl,
      {
        model: model,
        prompt: prompt,
        size: size,
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
          'Content-Type': 'application/json',
        },
      }
    )

    return response.data // Return the response data directly.
  } catch (error) {
    if (error.response) {
      console.error('Failed with status:', error.response.status)
      console.error('Error response data:', error.response.data)
    } else {
      console.error('Error message:', error.message)
    }
    return null
  }
}

const prompt =
  "A thrilling scene of people, running away in terror from a menacing, frothing character of a nuclear reactor that is a cartoon character. The nuclear reactor is depicted as radioactive and rabid, glowing ominously with a hue of green and launching tendrils of corrosive energy in an attempt to reach the fleeing crowd. The landscape surrounding them is barren and vast, depicting the intense urgency and desperation. It's a surreal and chilling blend of a sunny beach day slapped against a dystopian sci-fi horror but cartoonish at the same time and playful"

generateImage(prompt)
  .then((data) => console.log(data))
  .catch((error) => console.error('Failed to generate image:', error))
