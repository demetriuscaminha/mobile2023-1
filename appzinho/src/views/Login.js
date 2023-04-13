import { View, StyleSheet, Text, Image } from "react-native";
import logoEstacio from '../assets/estacio.png';

export default function LoginScreen () {
    return(
        <View style={StyleSheet.container}>
            <Text>Login Screen</Text>
            <Image source={logoEstacio} style={StyleSheet.logoEstacio}></Image>
        </View>
    );
}

const style = StyleSheet.create ({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    logoEstacio: {
        width: 200
    }
});