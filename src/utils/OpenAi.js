import OpenAI from 'openai';
export const sendMsgToAI = async (msg) => {
  // const API_URL = "https://api.openai.com/v1/completions";

  // const requestOptions = {
  //   method: "POST",
  //   headers: {
  //     "Content-Type": "application/json",
  //     Authorization: `Bearer ${process.env.REACT_APP_GPT_KEY}`,
  //   },
  //   body: JSON.stringify({
  //     model: "text-davinci-003",
  //     prompt: msg,
  //     temperature: 0.2,
  //     max_tokens: 2048,
  //     n: 1,
  //     stop: null,
  //   }),
  // };
  try {
      const openai = new OpenAI({
        apiKey: process.env.REACT_APP_GPT_KEY, // This is the default and can be omitted
        dangerouslyAllowBrowser: true
      });
    
      const completion = await openai.chat.completions.create({
        model: "gpt-4o-mini",
        messages: [
            { role: "system", content: "" },
            {
                role: "user",
                content: msg,
            },
        ],
      });
      console.log(completion.choices[0].message.content);
      return completion?.choices[0]?.message.content;
    // const response = await (await fetch(API_URL, requestOptions)).json();
    // console.log(response);
    // return response?.choices[0]?.text;
  } catch (error) {
    console.log(error);
  }
};
