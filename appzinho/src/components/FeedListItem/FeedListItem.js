import { View, StyleSheet, Image, Text } from "react-native";

export default function FeedListItem({ title }) {
    return (
        <View style={styles.item}>
            <View>
                <Image
                    style={styles.avatar}
                    source={require("../../assets/user.jpg")}
                />
            </View>
            <View>
                <Text style={styles.text}>{ title }</Text>
                <Text style={styles.description}>
                    Lorem ipsum dolorsit amet
                </Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    text: {
        color: '#fff',
        fontSize: 20,
        alignSelf: 'center',
        fontFamily: 'Roboto',
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
    description: {
        fontSize: 15,
        color: "#FFF",
        fontFamily: 'Roboto',
        alignSelf: 'center',
        fontStyle: 'italic',
    },
    avatar: {
        width: 50,
        height: 50,
        borderRadius:50,
        borderColor: '#FFF',
        borderWidth: 1,
        marginRight: 10,
    },
});