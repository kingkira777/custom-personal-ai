import { IFunction } from "../libs/types";
import { newsApi } from "../config/apis_config";

export const news: IFunction = {
    type: "function",
    function: {
        name : "get_news",
        description : "The the latest news",
        parameters : {
            question : {
                type : "string",
                description : "Question to get the news"
            }
        }
    },
    async execute(args: any) {
      return await newsApi(
        args.question
      );
    },
  };



  