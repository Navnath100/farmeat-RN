import { View, Text, StyleSheet, TextInput, Dimensions, Image } from 'react-native'
import React, { useState, useRef } from 'react'
import colors from '../assets/colors'
import { displayName } from '../../app.json';
import Entypo from 'react-native-vector-icons/Entypo'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { TouchableOpacity } from 'react-native-gesture-handler';
import GlobalStyles from '../components/GlobalStyles';
const { width, height } = Dimensions.get('window');

export default function VerifyOtp({ navigation }: { navigation: any }) {
  const [OTP, setOTP] = useState(Number);
  let textInput = useRef<TextInput>();

  return (
    <>
      <View style={GlobalStyles.container}>
        <Text style={GlobalStyles.appName}>{displayName}</Text>
        <Text style={GlobalStyles.title}>
          Verify OTP
        </Text>
        <Text style={GlobalStyles.subTitle}>
          Remember your pasword?
          <Text
            onPress={function () {
              navigation.navigate("Login");
            }}
            style={GlobalStyles.subTitleButton}> Login</Text>
        </Text>
        <View style={styles.textInputContainer}>
          <TextInput
            style={styles.textInput}
            ref={(input: any) => textInput = input}
            keyboardType={'number-pad'}
            onChangeText={(text: any) => setOTP(text)}
            autoFocus={false}
            secureTextEntry={true}
            maxLength={6}
            returnKeyType="done"
          />
          {
            Array(6).fill(undefined).map((item, index: Number) => {
              return (
                <Text style={styles.otp} onPress={() => textInput.focus()}>
                  {OTP[index]}
                </Text>
              )
            })
          }
        </View>

        <TouchableOpacity
        onPress={function () {
          navigation.navigate("ResetPassword")
        }}
        >
          <Text style={GlobalStyles.button}>Submit</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={styles.resendCode}>Reset Code</Text>
        </TouchableOpacity>
      </View>
    </>
  )
}
const styles = StyleSheet.create({
  resendCode: {
    fontSize: 14,
    fontWeight: '500',
    color: colors.black,
    textDecorationLine: 'underline'
  },
  textInputContainer: {
    width: width / 100 * 90,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignSelf: 'center',
    marginVertical:20
  },
  textInput: { height: 0, width: 0 },
  otp: {
    height: 50, width: 50, textAlign: 'center', textAlignVertical: 'center',
    color: colors.black, borderRadius: 8, backgroundColor: colors.lightGray,
    marginEnd: 10,
  },
})