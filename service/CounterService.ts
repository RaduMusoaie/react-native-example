import {getItem, removeItem, setItem} from "../util/AsyncStorage";

export default class CounterService {

    static async getAndIncrement(): Promise<number> {
        const value = await getItem('counter');
        if(value){
            await setItem('counter', value + 1);
            return value;
        }
        else{
            await setItem('counter', 2);
            return 1;
        }
    }

    static async clear(): Promise<void> {
        const value = await getItem('counter');
        if(value){
            await removeItem('counter');
        }
    }
}