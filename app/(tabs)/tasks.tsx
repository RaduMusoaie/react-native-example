import { Text, View } from "react-native";
import TaskList from "@/components/TaskList";

export default function Tasks() {
    return (
        <View
            style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <TaskList />
        </View>
    );
}
