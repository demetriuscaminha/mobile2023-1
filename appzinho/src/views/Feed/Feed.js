import { StyleSheet, SafeAreaView, VirtualizedList, TouchableWithoutFeedback, View, Text, FlatList } from "react-native";

import FeedListItem from "../../components/FeedListItem/FeedListItem";
import { useRoute } from "@react-navigation/native"

const getItem = (data, index) => ({
    id: Math.random().toString(12).substring(0),
    title: `item ${index}`,
});

const getId = () => Math.random().toString(12).substring(0);

const data = [
    {
        id: getId(),
        title: "item 1",
    },
    {
        id: getId(),
        title: "item 2",
    },
    {
        id: getId(),
        title: "item 3",
    }

]

const getItemCount = (data) => 100;

export default function Feed({ navigation }) {
    const route = useRoute();
    const { title } = route.params;
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.sectionHeader}>{title}</Text>
            <FlatList
                data={data}
                renderItem={
                    ({ item }) => (
                        <TouchableWithoutFeedback onPress={
                            () => navigation.navigate('Detail', {title: item.title})
                            }>
                            <View>
                                <FeedListItem title={item.title} />
                            </View>
                        </TouchableWithoutFeedback>
                    )
                }
            />
        </SafeAreaView>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 20,
    },
    sectionHeader: {
        fontSize: 40,
        color: '#000',
        alignSelf: 'left',
        fontFamily: 'Roboto',
        marginBottom: 10,
        marginLeft: 15,
    },
});