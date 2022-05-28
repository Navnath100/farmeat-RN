import { StyleSheet, Dimensions } from "react-native";
import colors from "../assets/colors";
const { width, height } = Dimensions.get('window')
export default StyleSheet.create({
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
    title: {
        fontSize: 32,
        fontWeight: '700',
        color: colors.black,
        alignSelf: 'flex-start',
        marginVertical: 20
    },
    subTitle: {
        fontSize: 14,
        fontWeight: '500',
        color: colors.placeholderColor,
        alignSelf: 'flex-start',
        marginBottom: 30,
        textAlign: 'center'
    },
    subTitleButton: {
        textDecorationLine: 'underline',
        color: colors.primary
    },
    button: {
        height: 50,
        width: width / 100 * 85,
        fontSize: 18,
        fontWeight: '500',
        color:colors.white,
        borderRadius:30,
        marginVertical:20,
        backgroundColor: colors.primary,
        textAlign: 'center',
        textAlignVertical: 'center',
      },
    textInputContainer: {
        height: 50,
        width: (width / 100) * 90,
        borderRadius: 8,
        flexDirection: 'row',
        backgroundColor: colors.lightGray,
        marginVertical: 10,
        alignItems:'center',
        justifyContent:'center'
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
    signupStep:{
alignSelf:'flex-start',
color:colors.placeholderColor
    }
})