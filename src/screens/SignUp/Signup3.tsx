import { View, Text, StyleSheet, TextInput, Dimensions, Alert } from 'react-native'
import React, { useState } from 'react'
import { displayName } from '../../../app.json';
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Feather from 'react-native-vector-icons/Feather'
import Entypo from 'react-native-vector-icons/Entypo'
import { TouchableOpacity } from 'react-native-gesture-handler';
import colors from '../../assets/colors';
import GlobalStyles from '../../components/GlobalStyles';
import DocumentPicker from 'react-native-document-picker';

const { width, height } = Dimensions.get('window');
const textInputWidth = width / 100 * 90
export default function Signup3({ navigation, route }: { navigation: any, route: any }) {
    const [registration_proof, setProof] = useState(String);
    const userDetails = route.params.user;

    function validation() {
        if (registration_proof) {
            navigation.navigate("Signup4", {
                user: {
                    ...userDetails,
                    registration_proof
                }
            })
        }
        else
            Alert.alert("Alert", "Please attach a registration proof")
    }

    const chooseFile = async () => {
        try {
            const res = await DocumentPicker.pick({
                type: [DocumentPicker.types.pdf, DocumentPicker.types.doc, DocumentPicker.types.docx,],
            })
            const type = res[0].name.split(".")
            console.log(res[0]);
            setProof(res[0].name);
        } catch (err) {
            if (DocumentPicker.isCancel(err)) {
                console.log("canceled");
                // User cancelled the picker, exit any dialogs or menus and move on
            } else {
                console.log(err);
            }
        }
    }

    return (
        <>
            <View style={[GlobalStyles.container, { justifyContent: 'flex-start', paddingTop: height / 4 }]}>
                <Text style={GlobalStyles.appName}>{displayName}</Text>
                <Text style={GlobalStyles.signupStep}>Signup 3 of 4</Text>
                <Text style={GlobalStyles.title}>Verification</Text>
                <Text style={styles.description}>Attached proof of Department of Agriculture registrations... Florida Fresh, USDA Approved. USDA Organic</Text>

                <View style={styles.cameraContainer}>
                    <Text style={styles.attachText}>Attach proof of registration</Text>
                    <TouchableOpacity
                        style={{ backgroundColor: colors.primary, borderRadius: 100, padding: 10 }}
                        onPress={function () {
                            chooseFile();
                        }}
                    >
                        <Feather name="camera" size={35} color={colors.white} />
                    </TouchableOpacity>
                </View>

                {
                    registration_proof ?
                        <View style={[styles.cameraContainer, { backgroundColor: colors.lightGray, marginVertical: 30 }]}>
                            <Text style={styles.proofName}>{registration_proof}</Text>
                            <TouchableOpacity
                                onPress={function () {
                                    setProof(String);
                                }}
                            >
                                <Entypo name="cross" size={25} color={colors.black} />
                            </TouchableOpacity>
                        </View> : null
                }

                <View style={[styles.buttonContainer, { position: 'absolute', bottom: 20 }]}>
                    <TouchableOpacity
                        style={{ width: 90, alignItems: 'center', justifyContent: 'center' }}
                        onPress={function () {
                            navigation.goBack();
                        }}
                    >

                        <MaterialIcons size={30} color={colors.black} name="keyboard-backspace" />
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={validation}
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
    },
    description: {
        marginBottom: 30,
        alignSelf: 'flex-start',
        color: colors.placeholderColor
    },
    cameraContainer: {
        width: textInputWidth,
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
        alignItems: 'center'
    },
    attachText: {
        fontSize: 14,
        color: colors.black,
        fontWeight: '500'
    },
    proofName: {
        fontSize: 14,
        fontWeight: "500",
        textDecorationLine: 'underline',
        color: colors.black
    }
})