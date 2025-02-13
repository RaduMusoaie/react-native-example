import {View, Text, StyleSheet, Pressable} from "react-native";

interface IProps {
    name: string;
    description?: string;
    deleteHandler: () => Promise<void>;
}

export default function Task({name, description, deleteHandler}: IProps) {

    return (
        <View style={styling.container}>
            <View>
                <Text style={styling.title}>{name}</Text>
                <Text style={styling.description}>{description}</Text>
            </View>
            <Pressable onPress={() => deleteHandler()}
            style={styling.button}>
                <Text style={styling.buttonLabel}>Delete</Text>
            </Pressable>
        </View>
    )
}

const styling = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: 20
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
    },
    description: {
        fontSize: 16,
        fontStyle: 'italic',
        color: 'gray',
    },
    button: {
        backgroundColor: 'red',
        padding: 10,
        borderRadius: 10
    },
    buttonLabel: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 18,
    }
})