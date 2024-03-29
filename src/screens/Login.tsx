import { View, Text, StyleSheet, TextInput, Dimensions, Image, Alert } from 'react-native'
import React, { useState } from 'react'
import colors from '../assets/colors'
import { displayName } from '../../app.json';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Entypo from 'react-native-vector-icons/Entypo'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { TouchableOpacity } from 'react-native-gesture-handler';
import GlobalStyles from '../components/GlobalStyles';
import apiList from '../server/apiList';
import { ValidateEmail } from '../components/validators';
const { width, height } = Dimensions.get('window');
export default function Login({ navigation }: { navigation: any }) {
  const [email, setEmail] = useState(String);
  const [password, setPassword] = useState(String);
  const role = "farmer";

  function validation() {
    const validationEmail = ValidateEmail(email)
    if (validationEmail.isError) {
      Alert.alert("Alert", validationEmail.err)
    } else if (!password)
      Alert.alert("Alert", "Please enter password")
    else login()
  }


  async function login() {
    const body = {
      email,
      password,
      role
    };
    try {
      fetch(apiList.login, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
      })
        .then((response) => response.json())
        .then(res => {
          console.log(res);
          Alert.alert(res.success ? "Success" : "Alert", res.message)
        });
    } catch (error: any) {
      Alert.alert("Alert", error)
    }
  }

  return (
    <>
      <Text style={[GlobalStyles.appName, { paddingHorizontal: 20, padding: 10 }]}>{displayName}</Text>
      <View style={styles.container}>
        <Text style={GlobalStyles.title}>Login</Text>
        <View style={{ flexDirection: 'row', alignSelf: "flex-start", paddingVertical: 10 }}>
          <Text style={GlobalStyles.subTitle}>New here?</Text>
          <TouchableOpacity>
            <Text
              onPress={function () {
                navigation.navigate("Signup1");
              }}
              style={[GlobalStyles.subTitleButton]}> Create account</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.textInputContainer} >
          <Entypo style={styles.textInputIcon} name='email' size={20} color={colors.black} />
          <TextInput
            style={styles.textInput}
            onChangeText={(text) => setEmail(text)}
            placeholder={"Email"}
            defaultValue={email}
            placeholderTextColor={colors.placeholderColor}
            multiline={false}
          />
        </View>

        <View style={styles.textInputContainer} >
          <MaterialIcons style={styles.textInputIcon} name='lock-outline' size={25} color={colors.black} />
          <TextInput
            style={styles.textInput}
            onChangeText={(text) => setPassword(text)}
            placeholder={"Password"}
            defaultValue={password}
            placeholderTextColor={colors.placeholderColor}
            multiline={false}
          />
          <TouchableOpacity
            onPress={function () {
              navigation.navigate('ForgotPassword')
            }}
          >

            <Text style={styles.textInputIconRight}>Forgot?</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={validation}>
          <Text style={styles.loginButton}>Login</Text>
        </TouchableOpacity>
        <Text style={styles.orLoginWith} >or login with</Text>

        <View style={styles.loginOptionContainer}>
          <TouchableOpacity style={styles.iconContainer}>
            <Image
              style={styles.loginWithIcon}
              source={require('../assets/img/google.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconContainer}>
            <AntDesign name="apple1" size={30} color={colors.black} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.iconContainer}>
            <Image
              style={styles.loginWithIcon}
              source={require('../assets/img/facebook.png')}
            />
          </TouchableOpacity>
        </View>
      </View>
    </>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center'
  },
  appName: {
    fontSize: 14,
    color: colors.black,
    fontWeight: '400',
    position: 'absolute',
    top: 20,
    start: 20
  },
  textInputContainer: {
    height: 50,
    width: (width / 100) * 90,
    borderRadius: 8,
    flexDirection: 'row',
    backgroundColor: colors.lightGray,
    marginVertical: 10
  },
  textInput: {
    // width: (width / 100) * 90,
    flex: 1,
    borderRadius: 8,
    color: colors.black,
  },
  textInputIcon: {
    height: 50,
    width: 50,
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  textInputIconRight: {
    height: 50,
    paddingHorizontal: 10,
    color: colors.primary,
    fontSize: 14,
    fontWeight: '400',
    textAlignVertical: 'center'
  },
  loginButton: {
    height: 50,
    width: width / 100 * 85,
    fontSize: 18,
    fontWeight: '500',
    color: colors.white,
    borderRadius: 30,
    marginVertical: 20,
    backgroundColor: colors.primary,
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  orLoginWith: {
    fontSize: 10,
    color: colors.placeholderColor,
    fontWeight: '500',
    marginVertical: 20,
  },
  loginOptionContainer: {
    width: width / 100 * 90,
    flexDirection: 'row',
    justifyContent: 'space-between'
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
  }


})