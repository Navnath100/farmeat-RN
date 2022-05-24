import { View, Text, Image, StyleSheet, useWindowDimensions, Dimensions } from 'react-native'
import React from 'react'
import colors from '../../assets/colors'
import screensArray from './screensArray';

const {width,height}=Dimensions.get('window');
export default function OnboardingScreen({ item }: { item: any }) {
    // const { width } = useWindowDimensions();
    return (
        <View style={[styles.container]}>
            {/* <View
                style={styles.img}
                // source={item.img}
            /> */}
            {/* <View style={styles.footer}> */}
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.description}>
                    {item.description}
                </Text>
            {/* </View> */}

        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        height: (height/100)*80,
        width:width-40,
    },
    img: {
        height: (height/100)*50
    },
    footer: {
        height: (height/100)*30,
        backgroundColor: colors.white,
        borderTopEndRadius: 30,
        borderTopStartRadius: 30,
        padding: 20
    },
    title: {
        color: colors.black,
        fontSize: 24,
        textAlign: 'center',
        marginVertical: 20,
        fontWeight: "700"
    },
    description: {
        color: '#261C12',
        fontSize: 14,
        textAlign: 'center',
        fontWeight: '400'
    }
})