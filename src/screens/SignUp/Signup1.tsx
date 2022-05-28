import { View, Text, StyleSheet, TextInput, Dimensions, Image } from 'react-native'
import React, { useState } from 'react'
import { displayName } from '../../../app.json';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Entypo from 'react-native-vector-icons/Entypo'
import Feather from 'react-native-vector-icons/Feather'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { TouchableOpacity } from 'react-native-gesture-handler';
import colors from '../../assets/colors';
import GlobalStyles from '../../components/GlobalStyles';

const { width, height } = Dimensions.get('window');
export default function Signup1({ navigation }: { navigation: any }) {
    const [email, setEmail] = useState(String)
    return (
        <>
            <View style={GlobalStyles.container}>
                <Text style={GlobalStyles.appName}>{displayName}</Text>
                <Text style={GlobalStyles.signupStep}>Signup 1 of 4</Text>
                <Text style={GlobalStyles.title}>
                    Welcome!
                </Text>

                <View style={styles.loginOptionContainer}>
                    <TouchableOpacity style={styles.iconContainer}>
                        <Image
                            style={styles.loginWithIcon}
                            source={require('../../assets/img/google.png')}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.iconContainer}>
                        <AntDesign name="apple1" size={30} color={colors.black} />
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.iconContainer}>
                        <Image
                            style={styles.loginWithIcon}
                            source={require('../../assets/img/facebook.png')}
                        />
                    </TouchableOpacity>
                </View>

                <View style={GlobalStyles.textInputContainer} >
                    <Feather style={GlobalStyles.textInputIcon} name='user' size={25} color={colors.black} />
                    <TextInput
                        style={GlobalStyles.textInput}
                        onChangeText={(text) => setEmail(text)}
                        placeholder={"Full name"}
                        placeholderTextColor={colors.placeholderColor}
                        multiline={false}
                    />
                </View>

                <View style={GlobalStyles.textInputContainer} >
                    <Entypo style={GlobalStyles.textInputIcon} name='email' size={20} color={colors.black} />
                    <TextInput
                        style={GlobalStyles.textInput}
                        onChangeText={(text) => setEmail(text)}
                        placeholder={"Email"}
                        placeholderTextColor={colors.placeholderColor}
                        multiline={false}
                    />
                </View>
                <View style={GlobalStyles.textInputContainer} >
                    <Feather style={GlobalStyles.textInputIcon} name='phone' size={20} color={colors.black} />
                    <TextInput
                        style={GlobalStyles.textInput}
                        onChangeText={(text) => setEmail(text)}
                        placeholder={"Phone"}
                        placeholderTextColor={colors.placeholderColor}
                        multiline={false}
                    />
                </View>
                <View style={GlobalStyles.textInputContainer} >
                    <MaterialIcons style={GlobalStyles.textInputIcon} name='lock-outline' size={25} color={colors.black} />
                    <TextInput
                        style={GlobalStyles.textInput}
                        onChangeText={(text) => setEmail(text)}
                        placeholder={"Password"}
                        placeholderTextColor={colors.placeholderColor}
                        multiline={false}
                    />
                </View>
                <View style={GlobalStyles.textInputContainer} >
                    <MaterialIcons style={GlobalStyles.textInputIcon} name='lock-outline' size={25} color={colors.black} />
                    <TextInput
                        style={GlobalStyles.textInput}
                        onChangeText={(text) => setEmail(text)}
                        placeholder={"Re-enter Password"}
                        placeholderTextColor={colors.placeholderColor}
                        multiline={false}
                    />
                </View>

                <View style={styles.buttonContainer}>
                    <TouchableOpacity
                        onPress={function () {
                            navigation.navigate("Login");
                        }}
                    >

                        <Text style={styles.loginButton}>Login</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={function () {
                            navigation.navigate("Signup2")
                        }}
                    >
                        <Text style={[GlobalStyles.button, { width: (width / 100 * 85) - 90 }]}>Continue</Text>
                    </TouchableOpacity>
                </View>


            </View>
        </>
    )
}
const styles = StyleSheet.create({
    loginButton: {
        textDecorationLine: 'underline',
        fontSize: 16,
        paddingHorizontal: 30,
    },
    loginOptionContainer: {
        width: width / 100 * 90,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 30
    },
    loginWithIcon: {
        height: 30,
        width: 30,
    },
    iconContainer: {
        borderColor: "rgba(0, 0, 0, 0.08)",
        borderWidth: 1,
        padding: 10,
        paddingHorizontal: 30,
        borderRadius: 30
    },
    buttonContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    }
})