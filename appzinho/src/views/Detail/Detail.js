import { StyleSheet, SafeAreaView, VirtualizedList, TouchableWithoutFeedback, View } from "react-native";

import DetailListItem from "../../components/DetailListItem/DetailListItem";

const getItem = (data, index) => ({
    id: Math.random().toString(12).substring(0),
    title: `item ${index}`,
});

const getItemCount = (data) => 100;

export default function Detail({ navigation }) {
    return (
        <SafeAreaView  style={styles.container}>
            <VirtualizedList
                getItem={getItem}
                getItemCount={getItemCount}
                initialNumToRender={10}
                renderItem={
                    ({ item }) => (
                        <View>
                            <DetailListItem item={item.title} />
                        </View>
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