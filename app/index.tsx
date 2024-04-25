import { router } from 'expo-router';
import { StyleSheet } from 'nativewind';
import { Pressable, Text, TextInput, View } from 'react-native';

const Page = () => {
  return (
    <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
      <TextInput placeholder="Username" style={styles.input} />
      <TextInput placeholder="Password" style={styles.input} />
      {/* <GoogleButton /> */}
      <Pressable style={styles.button} onPress={() => router.push('/(tabs)')}>
        <Text style={styles.text}>Login</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'black',
    marginTop: 20,
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
  input: {
    height: 60,
    width: 300,
    marginTop: 20,
    borderColor: 'gray',
    borderWidth: 1,
  },
});

export default Page;
