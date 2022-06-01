import { View, Text, StyleSheet, TextInput, Dimensions, Alert, ScrollView } from 'react-native'
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
import apiList from '../../server/apiList';

const { width, height } = Dimensions.get('window');
const weekDay = ["M", "T", "W", "Th", "F", "S", "Su"]
const workingHours = [
    "8:00am - 10:00am",
    "10:00am - 01:00pm",
    "01:00pm - 04:00pm",
    "04:00pm - 07:00pm",
    "07:00pm - 10:00pm"
]
// [{ label: "8:00am - 10:00am", item: "8to10" },
// { label: "10:00am - 01:00pm", item: "10to1" },
// { label: "01:00pm - 04:00pm", item: "1to4" },
// { label: "04:00pm - 07:00pm", item: "4to7" },
// { label: "07:00pm - 10:00pm", item: "7to10" }]
const textInputWidth = width / 100 * 90
export default function ({ navigation, route }: { navigation: any, route: any }) {
    const [email, setEmail] = useState(String);
    const [state, setState] = useState(Array);
    const [selectedDay, setselectedDay] = useState("M");
    const [mon, setMon] = useState(Array);
    const [tue, setTue] = useState(Array);
    const [wed, setWed] = useState(Array);
    const [thu, setThu] = useState(Array);
    const [fri, setFri] = useState(Array);
    const [sat, setSat] = useState(Array);
    const [sun, setSun] = useState(Array);
    const userDetails = route.params.user;

    function setWorkingHours({ item }: { item: any }) {
        if (selectedDay == "M") {
            const isExists = mon.some((i) => i == item)
            if (isExists) {
                setMon(mon.filter(function (i) {
                    return i !== item
                }));
            }
            else setMon([...mon, item])
        } else if (selectedDay == "T") {
            const isExists = tue.some((i) => i == item)
            if (isExists) {
                setTue(tue.filter(function (i) {
                    return i !== item
                }));
            }
            else setTue([...tue, item])
        } else if (selectedDay == "W") {
            const isExists = wed.some((i) => i == item)
            if (isExists) {
                setWed(wed.filter(function (i) {
                    return i !== item
                }));
            }
            else setWed([...wed, item])
        } else if (selectedDay == "Th") {
            const isExists = thu.some((i) => i == item)
            if (isExists) {
                setThu(thu.filter(function (i) {
                    return i !== item
                }));
            }
            else setThu([...thu, item])
        } else if (selectedDay == "F") {
            const isExists = fri.some((i) => i == item)
            if (isExists) {
                setFri(fri.filter(function (i) {
                    return i !== item
                }));
            }
            else setFri([...fri, item])
        } else if (selectedDay == "S") {
            const isExists = sat.some((i) => i == item)
            if (isExists) {
                setSat(sat.filter(function (i) {
                    return i !== item
                }));
            }
            else setSat([...sat, item])
        } else if (selectedDay == "Su") {
            const isExists = sun.some((i) => i == item)
            if (isExists) {
                setSun(sun.filter(function (i) {
                    return i !== item
                }));
            }
            else setSun([...sun, item])
        }
    }
    function checkIfSelected({ item }: { item: string }) {
        if (selectedDay == "M") {
            if (mon.some(i => i == item)) return true
        } else if (selectedDay == "T") {
            if (tue.some(i => i == item)) return true
        } else if (selectedDay == "W") {
            if (wed.some(i => i == item)) return true
        } else if (selectedDay == "Th") {
            if (thu.some(i => i == item)) return true
        } else if (selectedDay == "F") {
            if (fri.some(i => i == item)) return true
        } else if (selectedDay == "S") {
            if (sat.some(i => i == item)) return true
        } else if (selectedDay == "Su") {
            if (sun.some(i => i == item)) return true
        }
        return false
        // item === workingHours[0]
    }

    function showAlert(text: any) {
        Alert.alert("Alert", text);
    }

    function validation() {
        if (!(mon.length >= 1)) showAlert("Select business hours for monday")
        else if (!(mon.length >= 1)) showAlert("Select business hours for tuesday")
        else if (!(tue.length >= 1)) showAlert("Select business hours for tuesday")
        else if (!(wed.length >= 1)) showAlert("Select business hours for wednesday")
        else if (!(thu.length >= 1)) showAlert("Select business hours for thursday")
        else if (!(fri.length >= 1)) showAlert("Select business hours for friday")
        else if (!(sat.length >= 1)) showAlert("Select business hours for saturday")
        else if (!(sun.length >= 1)) showAlert("Select business hours for sunday")
        else signup();
    }


    async function signup() {
        try {
            let formdata = new FormData();
            formdata.append("full_name", userDetails.name)
            formdata.append("email", userDetails.email)
            formdata.append("phone", userDetails.email)
            formdata.append("role", "farmer")

            formdata.append("business_name", userDetails.business_name)
            formdata.append("informal_name", userDetails.informal_name)
            formdata.append("address", userDetails.address)
            formdata.append("city", userDetails.city)
            formdata.append("state", userDetails.state)
            formdata.append("zip_code", userDetails.zip_code)

            formdata.append("registration_proof", userDetails.registration_proof)

            formdata.append("business_hours", {
                "mon": mon, "tue": tue, "wed": wed, "thu": thu, "fri": fri, "sat": sat, "sun": sun
            })

            const body = {
                ...userDetails,
                business_hours: {
                    mon, tue, wed, thu, fri, sat, sun
                }
            };
            console.log("formated data", formdata);
            console.log(" data", body);

            fetch(apiList.signup, {
                method: 'POST',
                headers: {
                    'Content-Type': 'multipart/form-data'
                },
                body: formdata
            })
                .then((res) => {
                    console.log(res);

                    if (res.ok) navigation.navigate("SignupComplete")
                    else Alert.alert(res.ok ? "Success" : "Alert", `status:${res.status}`
                        , [
                            {
                                text: "Ok",
                                onPress: () => navigation.navigate("SignupComplete")
                            },
                        ],
                        { cancelable: true }
                    )
                }
                ).catch(function (error) {
                    Alert.alert("Signup error", error)
                })
        } catch (error: any) {
            Alert.alert("Signup error", error)
        }
    }

    return (
        <>
            <View style={GlobalStyles.container}>
                <Text style={GlobalStyles.appName}>{displayName}</Text>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <Text style={GlobalStyles.signupStep}>Signup 4 of 4</Text>
                    <Text style={GlobalStyles.title}>
                        Business Hours
                    </Text>
                    <Text style={styles.description}>Attached proof of Department of Agriculture registrations... Florida Fresh, USDA Approved. USDA Organic</Text>

                    <View style={[styles.workingHoursContainer, { marginVertical: 20 }]} >

                        {

                            weekDay.map((item: any, index) => {
                                return (
                                    <TouchableOpacity onPress={function () {
                                        setselectedDay(item)
                                    }} key={index}><Text style={[
                                        styles.weekDay,
                                        {
                                            backgroundColor: item === selectedDay ? colors.primary : colors.lightGray,
                                            color: item === selectedDay ? colors.white : colors.black,
                                        }
                                    ]}>{item}</Text></TouchableOpacity>
                                )
                            })
                        }
                    </View>

                    <View style={styles.workingHoursContainer}>
                        {
                            workingHours.map((item: any, index) => {
                                return (
                                    <TouchableOpacity onPress={() => setWorkingHours({ item })} key={index}><Text style={[
                                        styles.workingHours,
                                        {
                                            backgroundColor:
                                                checkIfSelected({ item }) ? colors.secondary : colors.lightGray,
                                        }
                                    ]}>{item}</Text>
                                    </TouchableOpacity>
                                )
                            })
                        }

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
                            onPress={validation}
                        >
                            <Text style={[GlobalStyles.button, { width: (width / 100 * 85) - 90 }]}>Signup</Text>
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
    weekDay: {
        height: 40,
        width: 39,
        margin: 5,
        borderRadius: 8,
        flexDirection: "row",
        backgroundColor: colors.lightGray,
        fontSize: 13,
        fontWeight: '600',
        color: colors.black,
        textAlign: 'center',
        textAlignVertical: 'center',
        borderColor: colors.lightGray,
        borderWidth: 1
    },
    workingHoursContainer: {
        width: textInputWidth,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    workingHours: {
        width: (textInputWidth - 20) / 2,
        backgroundColor: colors.lightGray,
        padding: 15,
        borderRadius: 10,
        margin: 5,
        fontSize: 14,
        fontWeight: '600',
        color: colors.black,
        textAlign: 'center',
        textAlignVertical: 'center'

    }
})