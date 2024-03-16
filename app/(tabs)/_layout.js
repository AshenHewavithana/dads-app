import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import { COLORS, FONT, icons } from '../../constants'
import { Ionicons } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';

const Layout = () => {
  return (
    <Tabs screenOptions={{
        tabBarActiveTintColor: COLORS.primary,
        tabBarLabelStyle: FONT.bold,
    }}>
        <Tabs.Screen name='index' options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({color, size}) => <Ionicons name='home-outline' color={color} size={size}/>
        }}/>
        <Tabs.Screen name='tickets' options={{
            tabBarLabel: 'Tickets',
            tabBarIcon: ({color, size}) => <Ionicons name='ticket-outline' color={color} size={size}/>
        }}/>
        <Tabs.Screen name='albums' options={{
            tabBarLabel: 'Albums',
            tabBarIcon: ({color, size}) => <SimpleLineIcons name='picture' color={color} size={size}/>
        }}/>
        <Tabs.Screen name='profile' options={{
            tabBarLabel: 'Profile',
            tabBarIcon: ({color, size}) => <Ionicons name='person-circle-outline' color={color} size={size}/>
        }}/>
    </Tabs>
  )
}

export default Layout