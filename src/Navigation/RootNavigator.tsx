import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import AuthStack from "./AuthStack";
import AppStack from "./AppStack";
import { useSelector } from "react-redux";
import type { RootState } from "../Store";

const RootNavigator = () => {
    // const [isLoggedIn, setIsLoggedIn] = useState<boolean | null>(null);
    const {isLogin} = useSelector((state:RootState)=>state.auth)

    if (isLogin === null) return null; // splash / loader

    return isLogin ? <AppStack /> : <AuthStack />;
}
export default RootNavigator;
