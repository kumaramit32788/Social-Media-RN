import { createNativeStackNavigator} from "@react-navigation/native-stack";
import loginScreen from "../Screens/Auth/Login/index"
import SignUpScreen from "../Screens/Auth/signup";

const Stack = createNativeStackNavigator()
const AuthStack =()=>{
return(
    <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="login"component={loginScreen} />
        <Stack.Screen name="SignUp"component={SignUpScreen} />
    </Stack.Navigator>
)
}

export default AuthStack;