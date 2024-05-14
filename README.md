# Personal Customize AI

This is customize personal AI that works with weather API and News API. 
Feel free to modify for ur needs!


## Setup


1. **Clone the repository**:
   - Clone this repository and navigate to the root directory.

2. **Install dependencies**:
   - Run `npm install` to install the necessary dependencies.

3. **Get API Keys**
    - [Gorq API](https://groq.com/)
    - [Weather API](https://home.openweathermap.org/)
    - [News API](https://newsapi.org/)


4. **Create .env**

    ```
        AI_MODEL= 
        GORQ_API_KEY= 
        OPEN_WEATHER_API_KEY=
        NEWS_API_KEY=
    ```

    
4. **Run the Program**
    - Run `npm run dev` for development
    - Run `npm run build` for Production

    
4. **Access using your preferred API Testing tool like POSTMAN**
    - Navigate to `localhost:5000/api/v1/personal-ai`
    ```json
        {
            "currentDate" : "2024-05-14",
            "location" : {
                "lat" : "14.532808893683674",
                "lon" : "120.98241277898677"
            },
            "userInput" : "What is the raduis of earth?"
        }
    ```