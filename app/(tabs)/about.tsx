import { Text, View } from "react-native";
import TaskList from "@/components/TaskList";

export default function Index() {
    return (
        <View
            style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <Text>This is cool app</Text>
        </View>
    );
}
