import { useState } from "react"
import { Alert, Text, TextInput, TouchableOpacity, View } from "react-native"
import { Colors } from "../../../theme/colors"
import KeyboardAvoidingWrapper from "../../../Componets/KeyboardAvoidingWrapper"
import request from "../../../Api/request"
import AsyncStorage from "@react-native-async-storage/async-storage"
import { loginStyle } from "./style"
import { useNavigation } from "@react-navigation/native"
import { setToken, setUser } from "../../../Store/Slice/authSlice"
import { useDispatch } from "react-redux"

const loginScreen = () => {
    const dispatch = useDispatch()
    const navigation = useNavigation<any>()
    const [loginForm, setLoginForm] = useState({ email: '', password: '' })

    const handleLogin = async () => {
        console.log(loginForm)
        request.post("/user/login", loginForm)
            .then((res: any) => {
                dispatch(setUser(res?.user))
                dispatch(setToken(res?.token))
            })
            .catch(err => {
                console.log('err', err)
                Alert.alert(err)
            })
    }

    const handleSignUp = () => {
        navigation.navigate('SignUp');
    }
    return (
        <KeyboardAvoidingWrapper style={loginStyle.wrapper} scrollable>
            <View style={loginStyle.inputWrapper}>
                <Text style={{ textAlign: 'center', fontSize: 26, color: Colors.text,fontWeight:'bold' }}>Login</Text>
                <TouchableOpacity
                    onPress={() => handleSignUp()}
                    style={loginStyle.forgetButton}>
                    <Text style={{ color: Colors.textSecondary,fontSize:20}}>Don't have Account? <Text style={{color: Colors.primary}}>Sign Up</Text></Text>
                </TouchableOpacity>
                <TextInput
                 underlineColorAndroid="transparent"
                    placeholder="Email"
                    style={loginStyle.textinput}
                    value={loginForm?.email}
                    onChangeText={(text) => {
                        setLoginForm({
                            ...loginForm,
                            email: text,
                        })
                    }} />
                <TextInput
                 underlineColorAndroid="transparent"
                    placeholder="Password"
                    style={loginStyle.textinput}
                    value={loginForm?.password}
                    onChangeText={(text) => {
                        setLoginForm({
                            ...loginForm,
                            password: text,
                        })
                    }} />
                <TouchableOpacity
                    onPress={() => handleLogin()}
                    style={loginStyle.loginButton}>
                    <Text style={{ color: Colors.whiteText }}>Login</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingWrapper>
    )
}



export default loginScreen