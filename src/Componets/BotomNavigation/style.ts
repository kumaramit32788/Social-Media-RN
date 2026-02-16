import { StyleSheet } from "react-native";
import { TAB_WIDTH } from "./Constant";
import { Colors } from "../../theme/colors";

export const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  
    height: 60,
    backgroundColor: Colors.bottomNavBar,

  
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 6,
  
    elevation: 20,
    zIndex: 10,

    overflow: 'hidden',
    marginBottom:22
  },
  

  indicator: {
    position: 'absolute',
    left: 6,
    top: 6,
  
    width: TAB_WIDTH ,
    height: 48,
  
    backgroundColor: Colors.accent,
    borderRadius: 24,
  },
  

  tab: {
    width: TAB_WIDTH,
    height: '100%',

    justifyContent: 'center',
    alignItems: 'center',

    zIndex: 1,
  },

  label: {
    color: Colors.textMuted,
    fontSize: 14,
  },

  activeLabel: {
    color: Colors.whiteText,
    fontWeight: "600",
    justifyContent:'center',
    alignItems:'center'
  },
});
