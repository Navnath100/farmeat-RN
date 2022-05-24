import { View, Text, StyleSheet, TextInput, Dimensions, Image } from 'react-native'
import React, { useState } from 'react'
import colors from '../assets/colors'
import { displayName } from '../../app.json';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Entypo from 'react-native-vector-icons/Entypo'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { TouchableOpacity } from 'react-native-gesture-handler';
import GlobalStyles from '../components/GlobalStyles';
const { width, height } = Dimensions.get('window');
export default function ResetPassword({ navigation }: { navigation: any }) {
  const [email, setEmail] = useState(String)
  return (
    <>
      <View style={GlobalStyles.container}>
        <Text style={GlobalStyles.appName}>{displayName}</Text>
        <Text style={GlobalStyles.title}>
          Reset Password
        </Text>
        <Text style={GlobalStyles.subTitle}>
          Remember your pasword?
          <Text
            onPress={function () {
              navigation.navigate("Login");
            }}
            style={GlobalStyles.subTitleButton}> Login</Text>
        </Text>
        <View style={GlobalStyles.textInputContainer} >
          <MaterialIcons style={GlobalStyles.textInputIcon} name='lock-outline' size={25} color={colors.black} />
          <TextInput
            style={GlobalStyles.textInput}
            onChangeText={(text) => setEmail(text)}
            placeholder={"New Password"}
            placeholderTextColor={colors.placeholderColor}
            multiline={false}
          />
        </View>

        <View style={GlobalStyles.textInputContainer} >
          <MaterialIcons style={GlobalStyles.textInputIcon} name='lock-outline' size={25} color={colors.black} />
          <TextInput
            style={GlobalStyles.textInput}
            onChangeText={(text) => setEmail(text)}
            placeholder={"Confirm New Passeord"}
            placeholderTextColor={colors.placeholderColor}
            multiline={false}
          />
        </View>

        <TouchableOpacity
        onPress={function () {
          navigation.navigate("ResetPassword")
        }}
        >
          <Text style={GlobalStyles.button}>Submit</Text>
        </TouchableOpacity>


      </View>
    </>
  )
}
const styles = StyleSheet.create({

})