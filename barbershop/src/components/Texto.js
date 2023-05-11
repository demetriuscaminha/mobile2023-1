import React from 'react';
import { StyleSheet, Text } from 'react-native';

export default function Texto({ children }) {
  return (
    <Text style={estilos.title}>{children}</Text>
  )
}

const estilos = StyleSheet.create({
  textDefault: {
    color: "#EADABB",
  }
})