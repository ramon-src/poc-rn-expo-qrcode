import { Stack } from 'expo-router';

const Layout = () => {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: 'Login', headerShown: false }} />
      <Stack.Screen name="(tabs)" options={{ title: 'Home', headerShown: false }} />
    </Stack>
  );
};

export default Layout;
