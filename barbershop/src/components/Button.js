import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import styles from '../styles/styles'

export default function Button({onPress, title, style}) {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.buttonPrimary, style]}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  )
}