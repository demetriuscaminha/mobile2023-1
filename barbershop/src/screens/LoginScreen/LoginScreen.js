import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import { Image, SafeAreaView, Text, TextInput, TouchableOpacity, View } from 'react-native'
import styles from '../../styles/styles';
import Ionicons from '@expo/vector-icons/Ionicons';

import logo from "../../../assets/logo.png";

export default function LoginScreen() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
        <View>
            <View style={styles.welcomeView}>
                <Image source={logo} style={styles.logo} />
            </View>

            <View style={styles.actions}>
                <View style={styles.wrapField}>
                    <Ionicons name="md-mail" size={18} color="white" />
                    <TextInput
                        style={styles.inputField}
                        placeholder="Email"
                        placeholderTextColor="#EADABB"
                        onChangeText={text => setEmail(text)}
                        value={email}
                    />
                </View>
                <View style={styles.wrapField}>
                    <Ionicons name="md-key" size={18} color="white" />
                    <TextInput
                        style={styles.inputField}
                        placeholder="Senha"
                        placeholderTextColor="#EADABB"
                        secureTextEntry={true}
                        onChangeText={text => setPassword(text)}
                        value={password}
                    />
                </View>
                <Text style={styles.titleWelcome}>Não tem conta, </Text>
                <TouchableOpacity onPress={() => navigation.navigate("ForgotPass")}>
                    <Text style={styles.titleWelcome}>cadastre-se</Text>
                </TouchableOpacity>
            </View>
        </View>
    </SafeAreaView>
  )
}
