import OpenAI from "openai";

const aiUrl = "https://api.groq.com/openai/v1/";
const weatherUrl = "https://api.openweathermap.org/data/2.5/weather";
const news_Url = "https://newsapi.org/v2/everything";

export const openAi = (apikey:string) =>{
    const client = new OpenAI({
        apiKey : apikey //"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"
    });
    client.baseURL = aiUrl;
    return client;
}

export const weatherApi = async (apikey:string, lat:number, lon:number) => {
    const baseUrl = `${weatherUrl}?lat=${lat}&lon=${lon}&appid=${apikey}`
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

export const newsApi = async(apiKey:string, question:string) => {
    const baseUrl = `${news_Url}?q=${question}&apiKey=${apiKey}&pageSize=2&sortBy=popularity`;
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