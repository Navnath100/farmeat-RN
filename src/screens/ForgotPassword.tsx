import { View, Text, StyleSheet, TextInput, Dimensions, Image } from 'react-native'
import React, { useState } from 'react'
import colors from '../assets/colors'
import { displayName } from '../../app.json';
import Entypo from 'react-native-vector-icons/Entypo'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { TouchableOpacity } from 'react-native-gesture-handler';
import GlobalStyles from '../components/GlobalStyles';
const { width, height } = Dimensions.get('window');

export default function ForgotPassword({ navigation }: { navigation: any }) {
    const [email, setEmail] = useState(String)
    return (
        <>
            <View style={GlobalStyles.container}>
                <Text style={GlobalStyles.appName}>{displayName}</Text>
                <Text style={styles.title}>
                    Forgot Password?
                </Text>
                <Text style={styles.subTitle}>
                    Remember your pasword?
                    <Text
                        onPress={function () {
                            navigation.navigate("Login");
                        }}
                        style={styles.login}> Login</Text>
                </Text>
                <View style={GlobalStyles.textInputContainer} >
                    <Ionicons style={GlobalStyles.textInputIcon} name='call-outline' size={25} color={colors.black} />
                    <TextInput
                        style={GlobalStyles.textInput}
                        onChangeText={(text) => setEmail(text)}
                        placeholder={"Phone Number"}
                        placeholderTextColor={colors.placeholderColor}
                        multiline={false}
                    />
                </View>

                <TouchableOpacity
                onPress={function () {
                    navigation.navigate('VerifyOtp')
                }}
                >
                    <Text style={GlobalStyles.button}>Send Code</Text>
                </TouchableOpacity>
            </View>
        </>
    )
}
const styles = StyleSheet.create({
    title: {
        fontSize: 32,
        fontWeight: '700',
        color: colors.black,
        alignSelf: 'flex-start',
        marginVertical: 20
    },
    subTitle: {
        fontSize: 14,
        fontWeight: '500',
        color: colors.placeholderColor,
        alignSelf: 'flex-start',
        marginBottom: 30,
        textAlign: 'center'
    },
    login: {
        textDecorationLine: 'underline',
        color: colors.primary
    }
})