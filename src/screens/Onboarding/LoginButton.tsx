import { View, Text, StyleSheet, Dimensions } from 'react-native'
import React from 'react'
import colors from '../../assets/colors';
import { TouchableOpacity } from 'react-native-gesture-handler';
import screensArray from './screensArray';

const { width, height } = Dimensions.get('window');
export default function LoginButton({ currentIndex, navigation }: { currentIndex: any, navigation: any }) {
    return (
        <View style={styles.container}>
            <Text style={[styles.joinTheMoment, { backgroundColor: screensArray[currentIndex].color }]}>
                Join The Moment
            </Text>
            <TouchableOpacity
                onPress={function () {
                    navigation.navigate("Login")
                }}
            >
                <Text style={styles.login}>
                    Login
                </Text>
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        width,
        height: (height / 100) * 20,
        backgroundColor: colors.white,
        justifyContent: 'center',
        alignItems: 'center',
    },
    joinTheMoment: {
        height: 50,
        // width:(width/100)*50,
        textAlign: 'center',
        textAlignVertical: 'center',
        backgroundColor: colors.green,
        borderRadius: 117,
        color: colors.white,
        fontSize: 18,
        fontWeight: '500',
        paddingHorizontal: 50
    },
    login: {
        textDecorationLine: 'underline',
        fontSize: 14,
        fontWeight: '500',
        marginVertical: 20,
        padding:10,
        paddingHorizontal:20,
        color: colors.black
    }
})