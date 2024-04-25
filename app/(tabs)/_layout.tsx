import { Ionicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';

const Layout = () => {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          title: 'list',
          headerShown: true,
          // This tab will no longer show up in the tab bar.
          href: null,
          tabBarIcon: ({ size, color }) => (
            <Ionicons name="basket-outline" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="camera"
        options={{
          title: 'Home',
          headerShown: false,
          tabBarIcon: ({ size, color }) => (
            <Ionicons name="qr-code-outline" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
};

export default Layout;
