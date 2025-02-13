import { Text, View } from "react-native";
import TaskList from "@/components/TaskList";

export default function NotFound() {
    return (
        <View
            style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <Text>The page your looking for doesn't exist!</Text>
        </View>
    );
}
