import {StyleSheet} from 'react-native'
import { Colors } from '../../../theme/colors'

export const signupStyle = StyleSheet.create({
    wrapper: {
        flex: 1,
        justifyContent: 'space-between',
        // padding: 20,
        backgroundColor: Colors.primaryLight,
    },
    textinput: {
        width: '100%',
        height: 50,
        marginVertical: 8,
        borderRadius: 26,
        paddingHorizontal: 20,
        backgroundColor: Colors.inputBackground,
        color: Colors.placeholder,
    },
    loginButton: {
        backgroundColor: Colors.primary,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        height: 56,
        borderRadius: 30,
        marginVertical: 28,
        borderColor: Colors.primaryBorder,
    },
    forgetButton: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        height: 40,
        marginTop: 16
    },
    bottomWrapper: {
        width: "100%",
    },
    inputWrapper: {
        width: "100%",
        marginTop: 400,
        backgroundColor: Colors.white,
        padding:20,
        height:'60%',
        borderTopLeftRadius:30,
        borderTopRightRadius:30
    }
})
