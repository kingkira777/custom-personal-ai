import { openAi } from "../config/apis_config";
import { FunctionHandler } from "../functions";

const model = process.env.AI_MODEL || "llama3-70b-8192"

type IBody = {
    currentDate: string;
    userInput: string;
    location : {
        lat : number,
        lon : number
    }
};

const ChatAi  = async (req:IBody) => {
    let return_message:string = "";
    const system = `
        You are Personal AI. Answer in 1-2 sentences. Be friendly, helpful and concise.
        Default to metric units when possible. Keep the conversation short and sweet.
        You only answer in text. Don't include links or any other extras.
        Don't respond with computer code, for example don't return user longitude.

        User's current info:
        country: Philippines,
        date: ${req.currentDate}
        lat:${req.location.lat}, lon:${req.location.lon}
    `;

    let messages:any = [
        {
            role : "system",
            content : system
        },
        {
            role : "user",
            content : req.userInput
        }   
    ];

    const response = await openAi().chat.completions.create({
        model : model,
        messages : messages,
        tools : FunctionHandler.funcitons
    });

    const message = response.choices[0].message;
    const tools = message.tool_calls;
    messages.push(message);
    
    if(tools){
        for(const tool of tools){
            const result = await FunctionHandler.handler(
                tool.function.name,
                JSON.parse(tool.function.arguments)
            );
            messages.push({
                tool_call_id : tool.id,
                role : "tool",
                name : tool.function.name,
                content : result
            });

            const sec_res =  await openAi().chat.completions.create({
                model : model,
                messages : messages    
            });

            const sec_res_message = sec_res.choices[0].message;
            return_message = (sec_res_message.content)? sec_res_message.content : "";
        }
    }

    if(response.choices[0].finish_reason === "stop"){
        return_message = (response.choices[0].message.content)? response.choices[0].message.content : "";
    }

    return return_message;
};


export default ChatAi;