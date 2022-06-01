import { View, Text, StyleSheet, TextInput, Dimensions, Image, Alert, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { displayName } from '../../../app.json';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Entypo from 'react-native-vector-icons/Entypo'
import Feather from 'react-native-vector-icons/Feather'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { TouchableOpacity } from 'react-native-gesture-handler';
import colors from '../../assets/colors';
import GlobalStyles from '../../components/GlobalStyles';
import { ValidateConfirmPassword, ValidateEmail, ValidateName, ValidatePassword, ValidatePhone } from '../../components/validators';

const { width, height } = Dimensions.get('window');
export default function Signup1({ navigation }: { navigation: any }) {
    const [name, setName] = useState(String)
    const [email, setEmail] = useState(String)
    const [phone, setPhone] = useState(String)
    const [password, setPassword] = useState(String)
    const [confirmPassword, setConfirmPassword] = useState(String)

    function showAlert(text: any) {
        Alert.alert("Alert", text);
    }

    function validation() {
        const nameValidation = ValidateName(name)
        const emailValidation = ValidateEmail(email)
        const phoneValidation = ValidatePhone(phone)
        const passwordValidation = ValidatePassword(password)
        const confirmPasswordValidation = ValidateConfirmPassword(password, confirmPassword)
        if (nameValidation.isError) showAlert(nameValidation.err)
        else if (emailValidation.isError) showAlert(emailValidation.err)
        else if (phoneValidation.isError) showAlert(phoneValidation.err)
        else if (passwordValidation.isError) showAlert(passwordValidation.err)
        else if (confirmPasswordValidation.isError) showAlert(confirmPasswordValidation.err)
        else navigation.navigate("Signup2", {
            user: {
                "full-name": name,
                email,
                phone, password
            }
        })
    }

    // let formdata = new FormData();
    // formdata.append("data", { name: name })
    // formdata.append("data2", { name2: 'navnath' })
    // console.log("formated data", formdata.getParts());

    return (
        <>
            <View style={GlobalStyles.container}>
                <ScrollView showsVerticalScrollIndicator={false}>
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
                            onChangeText={(text) => setName(text)}
                            defaultValue={name}
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
                            defaultValue={email}
                            placeholderTextColor={colors.placeholderColor}
                            multiline={false}
                        />
                    </View>
                    <View style={GlobalStyles.textInputContainer} >
                        <Feather style={GlobalStyles.textInputIcon} name='phone' size={20} color={colors.black} />
                        <TextInput
                            style={GlobalStyles.textInput}
                            onChangeText={(text) => setPhone(text)}
                            placeholder={"Phone"}
                            keyboardType={'number-pad'}
                            maxLength={10}
                            defaultValue={phone}
                            placeholderTextColor={colors.placeholderColor}
                            multiline={false}
                        />
                    </View>
                    <View style={GlobalStyles.textInputContainer} >
                        <MaterialIcons style={GlobalStyles.textInputIcon} name='lock-outline' size={25} color={colors.black} />
                        <TextInput
                            style={GlobalStyles.textInput}
                            onChangeText={(text) => setPassword(text)}
                            placeholder={"Password"}
                            defaultValue={password}
                            placeholderTextColor={colors.placeholderColor}
                            multiline={false}
                        />
                    </View>
                    <View style={GlobalStyles.textInputContainer} >
                        <MaterialIcons style={GlobalStyles.textInputIcon} name='lock-outline' size={25} color={colors.black} />
                        <TextInput
                            style={GlobalStyles.textInput}
                            onChangeText={(text) => setConfirmPassword(text)}
                            defaultValue={confirmPassword}
                            placeholder={"Re-enter Password"}
                            placeholderTextColor={colors.placeholderColor}
                            multiline={false}
                        />
                    </View>

                    <View style={[styles.buttonContainer, { width: width / 100 * 90 }]}>
                        <TouchableOpacity
                            onPress={function () {
                                navigation.navigate("Login");
                            }}
                        >
                            <Text style={styles.loginButton}>Login</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={validation}
                        >
                            <Text style={[GlobalStyles.button, { width: (width / 100 * 90) - 100 }]}>Continue</Text>
                        </TouchableOpacity>
                    </View>


                </ScrollView>
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
        marginVertical: 30,
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