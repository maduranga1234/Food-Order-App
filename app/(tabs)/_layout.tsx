import { Tabs } from 'expo-router';
import React from 'react';
import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { StyleSheet, Text } from 'react-native';

export default function RootLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
        tabBarStyle: styles.bottomNav
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          tabBarLabel: ({ focused }) => (
            <Text style={{ color: focused ? 'orange' : Colors[colorScheme ?? 'light'].tabIconDefault }}>
              Home
            </Text>
          ),
          tabBarIcon: ({ focused }) => (
            <TabBarIcon name={focused ? 'home' : 'home-outline'} color={focused ? 'orange' : Colors[colorScheme ?? 'light'].tabIconDefault} size={24} />
          ),
        }}
      />
    
      <Tabs.Screen
        name="menu"
        options={{
          tabBarLabel: ({ focused }) => (
            <Text style={{ color: focused ? 'orange' : Colors[colorScheme ?? 'light'].tabIconDefault }}>
              Menu
            </Text>
          ),
          tabBarIcon: ({ focused }) => (
            <TabBarIcon name={focused ? 'fast-food' : 'fast-food-outline'} color={focused ? 'orange' : Colors[colorScheme ?? 'light'].tabIconDefault} size={24} />
          ),
        }}
      />
      
      <Tabs.Screen
        name="profile"
        options={{
          tabBarLabel: ({ focused }) => (
            <Text style={{ color: focused ? 'orange' : Colors[colorScheme ?? 'light'].tabIconDefault }}>
              Profile
            </Text>
          ),
          tabBarIcon: ({ focused }) => (
            <TabBarIcon name={focused ? 'person' : 'person-outline'} color={focused ? 'orange' : Colors[colorScheme ?? 'light'].tabIconDefault} size={24} />
          ),
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  bottomNav: {
    height: 60,
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    backgroundColor: 'white',
    borderTopWidth: 1,
    borderTopColor: '#ddd',
  },
});
