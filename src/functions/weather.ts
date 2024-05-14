import { IFunction } from "../libs/types";
import { weatherApi } from "../config/apis_config";

export const weather: IFunction = {
    type: "function",
    function: {
      name: "get_weather",
      description: "Get the current weather",
      parameters: {
        type: "object",
        properties: {
          longitude: {
            type: "number",
            description: "The longitude to get the weather for",
          },
          latitude: {
            type: "number",
            description: "The latitude to get the weather for",
          },
        },
      },
    },
    async execute(args: any) {
      return await weatherApi(
        args.latitude,
        args.longitude
      );
    },
  };