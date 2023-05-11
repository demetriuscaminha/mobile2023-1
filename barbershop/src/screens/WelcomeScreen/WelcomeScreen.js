import React from "react";
import { Image, ImageBackground, SafeAreaView, Text, View } from "react-native";
import styles from "../../styles/styles";
import Button from "../../components/Button";

import logo from "../../../assets/logo.png";
import { useNavigation } from "@react-navigation/native";

export default function WelcomeScreen() {
  
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require("../../../assets/welcomeBG.jpg")}
        resizeMode="cover"
        style={styles.imgwelcome}
      >
        <View style={styles.welcomeView}>
          <Image source={logo} style={styles.logo} />
        </View>
        <View style={styles.actions}>
          <Button
            title="Efetuar login"
            onPress={() => navigation.navigate("Login")}
          />
          <Button
            title="Registre-se"
            onPress={() => navigation.navigate("SignIn")}
            style={styles.buttonDefault}
          />
          <Button
            title="Esqueceu sua senha?"
            onPress={() => navigation.navigate("ForgotPass")}
            style={styles.buttonOutline}
          />
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}
