import {useEffect, useState} from "react";
import {getItem} from "@/util/AsyncStorage";
import {TaskModel} from "@/model/Task";
import {TaskService} from "@/service/TaskService";
import Task from "@/components/Task";
import {Pressable, StyleSheet, TextInput, View, Text, Animated} from "react-native";
import CounterService from "@/service/CounterService";
import ScrollView = Animated.ScrollView;

export default function TaskList() {

    const [tasks, setTasks] = useState<TaskModel[]>([]);

    const [taskName, setTaskName] = useState<string>("");
    const [taskDescription, setTaskDescription] = useState<string>("");

    const [loading, setLoading] = useState<boolean>(false);

    const taskService = new TaskService();

    const getTasks = () => {
        setLoading(true);
        taskService.getAllTasks()
        .then((data) => {;
            setTasks(data);
            setLoading(false);
        })
    }

    const addTask = async (item: TaskModel) => {
        setLoading(true);
        taskService.createTask(item)
            .then(() => {
                console.log('done');
                setLoading(false)
                getTasks();
            })
    }

    const removeTask = async (id: number) => {
        setLoading(true);
        console.log('done');
        taskService.deleteTask(id)
            .then(() => {
                setLoading(false)
                getTasks();
            })
    }

    useEffect(() => {
        getTasks();
    }, [])

    return (
        <View style={styles.container}>
            <View style={styles.inputContainer}>
                <TextInput placeholder={'Task Name'}
                onChangeText={taskName => setTaskName(taskName)}
                style={styles.textInputs}/>
                <TextInput placeholder={'Task Description'}
                onChangeText={taskDescription => setTaskDescription(taskDescription)}
                style={styles.textInputs}/>
                <Pressable onPress={() => {
                    const task: TaskModel = {
                        id: 0, name: taskName, description: taskDescription,
                    };
                    addTask(task);
                }} style={styles.addButton}>
                    <Text style={styles.addButtonLabel}>Add</Text>
                </Pressable>
            </View>
            <ScrollView style={styles.tasks}>
            {tasks.length > 0 && (
                tasks.map((task: TaskModel) => <Task name={task.name} description={task.description}
                                                     key={task.id}
                                                     deleteHandler={() => removeTask(task.id)} />)
            )}
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    inputContainer: {
        marginTop: 20,
        flexDirection: 'row',
        gap: 10,
        alignItems: "center",
    },
    textInputs : {
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 10,
        fontSize: 16,
    },
    addButton: {
        backgroundColor: '#6543d8',
        padding: 12,
        borderRadius: 8,

    },
    addButtonLabel: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'white'
    },
    tasks: {
        marginTop: 40
    }
})