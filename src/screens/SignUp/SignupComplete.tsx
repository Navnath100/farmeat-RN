import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native'
import React from 'react'
import GlobalStyles from '../../components/GlobalStyles'
import colors from '../../assets/colors'
const LottieView = require("lottie-react-native");

const { width, height } = Dimensions.get('window');
export default function ({ navigation }: { navigation: any }) {
  return (
    <View style={GlobalStyles.container}>
      <LottieView
        style={styles.check}
        source={require('../../assets/icons/animated/check.json')}
        autoPlay={true}
        loop={false}
      />
      <Text style={styles.title}>You're all done!</Text>
      <Text style={styles.text}>Hang tight! We are currently reviewing your account and will follow up with you in 2-3 business days. In the meantime, you can setup your inventory.</Text>
      <TouchableOpacity
        style={styles.btn}
        onPress={function () {
          navigation.navigate("Signup4")
        }}
      >
        <Text style={[GlobalStyles.button, { width: (width / 100 * 85) - 90 }]}>Continue</Text>
      </TouchableOpacity>
    </View>
  )
}
const styles = StyleSheet.create({
  title: {
    fontSize: 28,
    color: colors.black,
    fontWeight: '700',
    marginBottom: 20,
    marginTop:10
  },
  text: {
    fontSize: 16,
    color: colors.black,
    textAlign: 'center'
  },
  btn: {
    position: 'absolute',
    bottom: 20
  },
  check: {
    height: 120,
    width: 120
  }
})