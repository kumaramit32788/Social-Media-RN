import { useState } from "react";
import {
  Alert,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { Colors } from "../../../theme/colors";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import request from "../../../Api/request";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { signupStyle } from "./style";
import { useNavigation } from "@react-navigation/native";

const SignupScreen = () => {
  const navigation = useNavigation<any>();

  const [signupForm, setSignupForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleSignUp = async () => {
    const { name, email, password, confirmPassword } = signupForm;

    if (!name || !email || !password || !confirmPassword) {
      Alert.alert("All fields are required");
      return;
    }

    if (password !== confirmPassword) {
      Alert.alert("Password and confirm password mismatch");
      return;
    }

    try {
      const res = await request.post("/user/signup", {
        name,
        email,
        password,
      });

      await AsyncStorage.setItem("token", res.data.token);
      Alert.alert(res.data.message);
    } catch (err: any) {
      Alert.alert(err || "Signup failed");
    }
  };

  return (
    <KeyboardAwareScrollView
      style={{ flex: 1 }}
      contentContainerStyle={{ flexGrow: 1 }}
      enableOnAndroid
      extraScrollHeight={20}
      keyboardShouldPersistTaps="handled"
    >
      <View style={signupStyle.wrapper}>
        <View style={signupStyle.inputWrapper}>
          <Text style={{ textAlign: 'center', fontSize: 26, color: Colors.text, fontWeight: 'bold' }}>Sign Up</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate("login")}
            style={signupStyle.forgetButton}>
            <Text style={{ color: Colors.textSecondary, fontSize: 20 }}> Already have account? <Text style={{ color: Colors.primary }}>Login</Text></Text>
          </TouchableOpacity>
          <TextInput
            placeholder="Name"
            style={signupStyle.textinput}
            value={signupForm.name}
            onChangeText={(text) =>
              setSignupForm({ ...signupForm, name: text })
            }
          />

          <TextInput
            placeholder="Email"
            keyboardType="email-address"
            autoCapitalize="none"
            style={signupStyle.textinput}
            value={signupForm.email}
            onChangeText={(text) =>
              setSignupForm({ ...signupForm, email: text })
            }
          />

          <TextInput
            placeholder="Password"
            secureTextEntry
            style={signupStyle.textinput}
            value={signupForm.password}
            onChangeText={(text) =>
              setSignupForm({ ...signupForm, password: text })
            }
          />

          <TextInput
            placeholder="Confirm Password"
            secureTextEntry
            style={signupStyle.textinput}
            value={signupForm.confirmPassword}
            onChangeText={(text) =>
              setSignupForm({
                ...signupForm,
                confirmPassword: text,
              })
            }
          />
          <TouchableOpacity
            onPress={handleSignUp}
            style={signupStyle.loginButton}
          >
            <Text style={{ color: Colors.whiteText }}>Sign Up</Text>
          </TouchableOpacity>
        </View>

        <View style={signupStyle.bottomWrapper}>


        </View>
      </View>
    </KeyboardAwareScrollView>
  );
};

export default SignupScreen;
