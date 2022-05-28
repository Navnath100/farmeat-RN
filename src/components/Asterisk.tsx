import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import colors from '../assets/colors'


export default function Asterisk() {
    return (
        <Text style={styles.asterisk}>*</Text>
    )
}

const styles = StyleSheet.create({
    asterisk: {
        color: colors.red
    }
})
