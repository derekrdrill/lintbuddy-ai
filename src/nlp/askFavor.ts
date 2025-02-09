import { ChatOpenAI } from '@langchain/openai';
import parseOpenAIData from './parseOpenAIData';

const model = new ChatOpenAI({
  apiKey: process.env.OPENAI_API_KEY,
  temperature: 0.5,
});

const askFavor = async ({ code, favor }: { code: string; favor: string }) => {
  const newRuleprompt = `Can you do me a favor & convert this linting rule into a structured JSON format. 
                          The object should always have a "rule"  key. 
                          The object should have a "favor" key, which will be a concise version of the plain-english request. 
                          The value of the "rule" should be condensed to 3-4 words, hyphenated.
                          If you feel multiple rules should be created, based on the context, please do so.
                          The rule should be: "${favor}"`;

  const newCodePrompt = `${favor} on this code and return all of the edited code: "${code}"`;

  const structuredNewRule = parseOpenAIData({
    data: JSON.stringify(await model.invoke(newRuleprompt)),
  }).kwargs.content;

  const lintedCode = parseOpenAIData({
    data: JSON.stringify(await model.invoke(newCodePrompt)),
  }).kwargs.content;

  console.log(structuredNewRule);

  return lintedCode;
};

export default askFavor;
