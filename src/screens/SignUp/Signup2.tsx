import { View, Text, StyleSheet, TextInput, Dimensions } from 'react-native'
import React, { useState } from 'react'
import { displayName } from '../../../app.json';
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Feather from 'react-native-vector-icons/Feather'
import Octicons from 'react-native-vector-icons/Octicons'
import { TouchableOpacity } from 'react-native-gesture-handler';
import colors from '../../assets/colors';
import GlobalStyles from '../../components/GlobalStyles';
import DropDown from '../../components/DropDown';
import states from '../../assets/json/states';

const { width, height } = Dimensions.get('window');
const textInputWidth = width / 100 * 90
export default function Signup2({ navigation }: { navigation: any }) {
    const [email, setEmail] = useState(String);
    const [state, setState] = useState(undefined);
    return (
        <>
            <View style={GlobalStyles.container}>
                <Text style={GlobalStyles.appName}>{displayName}</Text>
                <Text style={GlobalStyles.signupStep}>Signup 2 of 4</Text>
                <Text style={GlobalStyles.title}>
                    Farm Info
                </Text>

                <View style={GlobalStyles.textInputContainer} >
                    <Octicons style={GlobalStyles.textInputIcon} name='tag' size={20} color={colors.black} />
                    <TextInput
                        style={GlobalStyles.textInput}
                        onChangeText={(text) => setEmail(text)}
                        placeholder={"Business Name"}
                        placeholderTextColor={colors.placeholderColor}
                        multiline={false}
                    />
                </View>

                <View style={GlobalStyles.textInputContainer} >
                    <Feather style={GlobalStyles.textInputIcon} name='smile' size={20} color={colors.black} />
                    <TextInput
                        style={GlobalStyles.textInput}
                        onChangeText={(text) => setEmail(text)}
                        placeholder={"Informal Name"}
                        placeholderTextColor={colors.placeholderColor}
                        multiline={false}
                    />
                </View>

                <View style={GlobalStyles.textInputContainer} >
                    <Octicons style={GlobalStyles.textInputIcon} name='home' size={20} color={colors.black} />
                    <TextInput
                        style={GlobalStyles.textInput}
                        onChangeText={(text) => setEmail(text)}
                        placeholder={"Street Address"}
                        placeholderTextColor={colors.placeholderColor}
                        multiline={false}
                    />
                </View>
                <View style={GlobalStyles.textInputContainer} >
                    <Ionicons style={GlobalStyles.textInputIcon} name='location-outline' size={25} color={colors.black} />
                    <TextInput
                        style={GlobalStyles.textInput}
                        onChangeText={(text) => setEmail(text)}
                        placeholder={"City"}
                        placeholderTextColor={colors.placeholderColor}
                        multiline={false}
                    />
                </View>

                <View style={{ width: textInputWidth, flexDirection: 'row', justifyContent: 'space-between' }}>
                    <DropDown
                        style={{ width: textInputWidth / 100 * 40 }}
                        data={states}
                        setSelectedItem={(item: any) => setState(item)}
                        searchable={true}
                        defaultValue={state}
                        placeholder={"State"}
                    />
                    <View style={[GlobalStyles.textInputContainer, { width: textInputWidth / 100 * 55 }]} >
                        <Ionicons style={GlobalStyles.textInputIcon} name='location-outline' size={25} color={colors.black} />
                        <TextInput
                            style={GlobalStyles.textInput}
                            onChangeText={(text) => setEmail(text)}
                            placeholder={"City"}
                            placeholderTextColor={colors.placeholderColor}
                            multiline={false}
                        />
                    </View>
                </View>

                <View style={styles.buttonContainer}>
                    <TouchableOpacity
                        style={{ width: 90, alignItems: 'center', justifyContent: 'center' }}
                        onPress={function () {
                            navigation.goBack();
                        }}
                    >

                        <MaterialIcons size={30} color={colors.black} name="keyboard-backspace" />
                    </TouchableOpacity>
                    <TouchableOpacity
                    onPress={function () {
                        navigation.navigate("Signup3")
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