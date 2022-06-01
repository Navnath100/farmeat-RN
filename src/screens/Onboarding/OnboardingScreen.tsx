import { View, Text, Image, StyleSheet, useWindowDimensions, Dimensions } from 'react-native'
import React from 'react'
import colors from '../../assets/colors'
import screensArray from './screensArray';

const { width, height } = Dimensions.get('window');
export default function OnboardingScreen({ item }: { item: any }) {
    // const { width } = useWindowDimensions();
    return (
        <View style={[styles.container]}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.description}>
                {item.description}
            </Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        height: (height / 100) * 80,
        width: width - 40,
    },
    title: {
        color: colors.black,
        fontSize: 24,
        textAlign: 'center',
        marginVertical: 10,
        fontWeight: "700"
    },
    description: {
        color: '#261C12',
        fontSize: 14,
        textAlign: 'center',
        fontWeight: '400'
    }
})