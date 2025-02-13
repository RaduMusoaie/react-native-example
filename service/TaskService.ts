import { TaskModel} from "@/model/Task";
import {getItem, setItem} from "@/util/AsyncStorage";
import CounterService from "@/service/CounterService";

export default interface ITaskService {
    getAllTasks(): Promise<TaskModel[]>;
    getTaskById(id: number): Promise<TaskModel>;
    createTask(task: TaskModel): Promise<void>;
    deleteTask(id: number): Promise<void>;
}

export class TaskService implements ITaskService{

    key: string = 'tasks';

    async createTask(task: TaskModel): Promise<void> {
        await CounterService.getAndIncrement()
            .then((count: number) => {
                task.id = count;
            });
        await getItem(this.key)
            .then((tasks: TaskModel[]) => {
                if(!tasks) tasks = [];
                const newTasks: TaskModel[] = [...tasks, task];
                setItem(this.key, newTasks);
            })
    }
    async deleteTask(id: number): Promise<void> {
        await getItem(this.key)
            .then((tasks: TaskModel[]) => {
                const filteredTasks = tasks.filter(task => task.id !== id);
                setItem(this.key, filteredTasks);
            })
    }
    async getAllTasks(): Promise<TaskModel[]> {
        const items = await getItem(this.key);
        if(items) return items;
        return [];
    }
    async getTaskById(id: number): Promise<TaskModel> {
        const data = await getItem(this.key);
        return await data.filter((task: TaskModel) => task.id === id)[0];
    }
}