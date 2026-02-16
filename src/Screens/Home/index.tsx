import { Text, View, TouchableOpacity, StatusBar } from "react-native"
import { useDispatch } from "react-redux";
import { removeToken } from "../../Store/Slice/authSlice";
import BottomNavigation from "../../Componets/BotomNavigation";
import { store } from "../../Store";


const HomeScreen = () => {

console.log("store",store.getState())


  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <StatusBar hidden />
        <BottomNavigation/>
    </View>
  )
}
export default HomeScreen;