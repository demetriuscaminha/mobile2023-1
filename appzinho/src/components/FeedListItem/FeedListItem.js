import { View, StyleSheet, Text } from "react-native";

export default function FeedListItem({item}) {
    return (
        <View style={styles.item}>
            <Text style={styles.text}>{item}</Text>
        </View>
    );
}

const styles =  StyleSheet.create({
    text: {
        color: '#fff',
        fontSize: 20,
    },
    item: {
        backgroundColor: '#0b0b0b',
        color: '#fff',
        padding: 20,
        marginTop: 15,
        height: 100,
        justifyContent: 'center',
        borderRadius: 10,
    },
});