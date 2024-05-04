import { ChatOpenAI } from '@langchain/openai'
import 'dotenv/config'

const chatModel = new ChatOpenAI()

const reactors = await chatModel.invoke(
  'How many nuclear reactors are in the United States?'
)

console.log(reactors)
