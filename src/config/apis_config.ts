require('dotenv').config();
import OpenAI from "openai";

const aiUrl = "https://api.groq.com/openai/v1/";
const weatherUrl = "https://api.openweathermap.org/data/2.5/weather";
const news_Url = "https://newsapi.org/v2/everything";


// const weatherApiKey = process.env.OPEN_WEATHER_API_KEY;
const newsApiKey = process.env.NEWS_API_KEY;
const weatherApiKey = process.env.OPEN_WEATHER_API_KEY;


export const openAi = () =>{
    const client = new OpenAI({
        apiKey : process.env.GORQ_API_KEY //"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"
    });
    client.baseURL = aiUrl;
    return client;
}

export const weatherApi = async (lat:number, lon:number) => {
    const baseUrl = `${weatherUrl}?lat=${lat}&lon=${lon}&appid=${weatherApiKey}`
    try {
        const response = await fetch(baseUrl);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        return JSON.stringify(data);
    } catch (error) {
        console.error("Failed to fetch weather data:", error);
        return JSON.stringify({ error: "Failed to fetch weather data" });
    }
}

export const newsApi = async(question:string) => {
    const baseUrl = `${news_Url}?q=${question}&apiKey=${newsApiKey}&pageSize=2&sortBy=popularity`;
    try {
        const response = await fetch(baseUrl);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        return JSON.stringify(data);
    } catch (error) {
        console.error("Failed to fetch news data:", error);
        return JSON.stringify({ error: "Failed to fetch news data" });
    }

}