import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from './Home';
import Login from './Login';
import Index from './Onboarding/Index';
import ForgotPassword from './ForgotPassword';
import VerifyOtp from './VerifyOtp';
import ResetPassword from './ResetPassword';
import Signup1 from './SignUp/Signup1';
import Signup2 from './SignUp/Signup2';
import Signup3 from './SignUp/Signup3';
import Signup4 from './SignUp/Signup4';
import SignupComplete from './SignUp/SignupComplete';

const Stack = createStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false
                }}
                initialRouteName={'Onboarding'}
            >
                <Stack.Screen name="Onboarding" component={Index} />
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
                <Stack.Screen name="VerifyOtp" component={VerifyOtp} />
                <Stack.Screen name="ResetPassword" component={ResetPassword} />
                <Stack.Screen name="Signup1" component={Signup1} />
                <Stack.Screen name="Signup2" component={Signup2} />
                <Stack.Screen name="Signup3" component={Signup3} />
                <Stack.Screen name="Signup4" component={Signup4} />
                <Stack.Screen name="SignupComplete" component={SignupComplete} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}