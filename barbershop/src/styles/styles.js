import { Dimensions, StyleSheet } from "react-native";

const larguraTela = Dimensions.get('window').width;

const styles = StyleSheet.create({
    container:{
        backgroundColor: "#170000",
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    welcomeView: {
        width: larguraTela,
        alignItems: 'center',
        justifyContent: 'center'
    },
    imgwelcome: {
        width: '100%',
        height: '100%',
        justifyContent: 'space-between',
    },
    logo: {
        width: larguraTela * 0.5, // define a largura da imagem como 50% da largura da tela
        height: undefined, // define a altura como undefined para manter a proporção original da imagem
        aspectRatio: 1,
        marginTop: 120,
        marginBottom: 60
    },
    txtforgetPass: {
        color: "#EADABB",
        fontSize: 14,
        lineHeight: 42
    },
    titleWelcome: {
        width: "100%",
        color: "#EADABB",
        textAlign: "center",
        fontSize: 18
    },
    actions: {
        marginBottom: 80,
        justifyContent: "center",
        width: larguraTela,
        alignItems: "center"
    },
    buttonDefault: {
        width: larguraTela * 0.7,
        backgroundColor: 'transparent',
        borderRadius: 100,
        paddingVertical: 14,
        marginVertical: 8,
        borderColor: "#db6130",
        borderWidth: 1
    },
    buttonOutline: {
        width: larguraTela * 0.7,
        backgroundColor: 'transparent',
        borderRadius: 100,
        paddingVertical: 14,
        marginVertical: 8,
    },
    buttonPrimary: {
        width: larguraTela * 0.7,
        backgroundColor: '#db6130',
        borderRadius: 100,
        paddingVertical: 14,
        marginVertical: 8,
    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: '600',
        textAlign: 'center',
    },
    viewField: {
        flexDirection: 'row',
        
    },
    wrapField: {
        width: larguraTela * 0.7,
        height: 60,
        borderRadius: 100,
        paddingHorizontal: 20,
        marginBottom: 15,
        borderColor: '#db6130',
        borderWidth: 1,
        flexDirection: "row",
        alignItems: "center",
        gap: 10
    },
    inputField: {
        fontSize: 16,
        color: "#EADABB",
        width: "100%"
    },
});

export default styles;