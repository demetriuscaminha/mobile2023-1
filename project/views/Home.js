import React from "react";
import { TouchableOpacity } from "react-native";
import { Text } from "react-native";
import { css } from "../assets/css/Css";

export default function Home() {
  return (
    <TouchableOpacity
      style={css.button}
      onPress={() => navigation.navigate("Cadastro")}
    >
      <Text style={css.button__text}>Cadastro</Text>
    </TouchableOpacity>
  );
}
