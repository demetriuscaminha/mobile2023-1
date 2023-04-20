import { View, StyleSheet, Text, Image, Button } from "react-native";

import logoEstacio from '../assets/estacio.png';

export default function LoginScreen ({navigation}) {
    return(
        <View style={styles.container}>
            <Text>Login Screen</Text>
            <Image source={logoEstacio} style={styles.logoEstacio}></Image>
            <Button title="Ir para Home Screen" 
                style={styles.navigationButton}
                onPress={() => navigation.navigate('Main')}
            />
        </View>
    );
}

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    logoEstacio: {
        width: 200,
        height: 200,
    },
    navigationButton: {
        marginTop: 20,
        borderColor: '#000',
        borderWidth: 1,
        borderRadius: 5,
    }
});