import 'dotenv/config'
import axios from 'axios'

axios
  .post(
    'https://api.openai.com/v1/images/generations',
    {
      model: 'dall-e-3',
      prompt:
        "A thrilling scene of people, running away in terror from a menacing, frothing character of a nuclear reactor that is a crtoon character. The nuclear reactor is depicted as radioactive and rabid, glowing ominously with a hue of green and launching tendrils of corrosive energy in an attempt to reach the fleeing crowd. The landscape surrounding them is barren and vast, depicting the intense urgency and desperation. It's a surreal and chilling blend of a sunny beach day slapped against a dystopian sci-fi horror but cartoonish at the same time and playful",
      size: '1024x1024',
    },
    {
      headers: {
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
        'Content-Type': `application/json`,
      },
    }
  )
  .then((response) => console.log(response.data))
