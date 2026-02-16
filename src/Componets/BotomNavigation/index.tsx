import React, { useRef, useState } from 'react'
import { Text, View, Animated, TouchableOpacity } from 'react-native'
import { styles } from './style'
import { TAB_WIDTH } from './Constant'

import Profile from '../../Screens/Profile'
import Post from '../../Screens/Post'
import Search from '../../Screens/Search'
import Setting from '../../Screens/Setting'

const tabs = ['Profile', 'Post', 'Search', 'Settings']

const BottomNavigation = () => {
  const [currentTab, setCurrentTab] = useState(0)
  const translateX = useRef(new Animated.Value(0)).current

  const renderScreen = () => {
    switch (currentTab) {
      case 0:
        return <Profile />
      case 1:
        return <Post />
      case 2:
        return <Search />
      case 3:
        return <Setting />
      default:
        return null
    }
  }

  const tabPress = (index: number) => {
    setCurrentTab(index)

    Animated.spring(translateX, {
      toValue: index * TAB_WIDTH,
      stiffness: 120,
      damping: 14,
      mass: 0.8,
      useNativeDriver: true,
    }).start()
  }

  return (
    <View style={{ flex: 1,width:'100%'}}>
      <View style={{ flex: 1 }}>
        {renderScreen()}
      </View>
  
      <View style={styles.container}>
        <Animated.View
          style={[
            styles.indicator,
            { transform: [{ translateX }] },
          ]}
        />
  
        {tabs.map((tab, index) => (
          <TouchableOpacity
            key={tab}
            style={styles.tab}
            onPress={() => tabPress(index)}
          >
            <Text
              style={[
                styles.label,
                currentTab === index && styles.activeLabel,
              ]}
            >
              {tab}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  )
  
}

export default BottomNavigation
