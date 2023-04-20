import { StyleSheet, SafeAreaView, VirtualizedList, TouchableWithoutFeedback, View } from "react-native";

import FeedListItem from "../../components/FeedListItem/FeedListItem";

const getItem = (data, index) => ({
    id: Math.random().toString(12).substring(0),
    title: `item ${index}`,
});

const getItemCount = (data) => 100;

export default function Feed({ navigation }) {
    return (
        <SafeAreaView style={styles.container}>
            <VirtualizedList
                getItem={getItem}
                getItemCount={getItemCount}
                initialNumToRender={10}
                renderItem={
                    ({ item }) => (
                        <TouchableWithoutFeedback onPress={
                            () => navigation.navigate('Detail', {title: item.title})
                        }>
                            <View>
                                <FeedListItem item={item.title} />
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
    }
});