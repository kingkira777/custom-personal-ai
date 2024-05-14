import { weather } from './weather';
import { news } from './news';
import { IFunction } from '../libs/types';

const funcitons: IFunction[] = [weather,news];

const handler = async(name:string, args:any):Promise<string> => {
    const func = funcitons.find((f) => f.function.name === name);
    if(!func) return "";
    return func.execute(args);
};

export const FunctionHandler = {
    handler,
    funcitons
}


