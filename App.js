import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image, SafeAreaView } from 'react-native';

export default function App() {
  
  return (
    <SafeAreaView style={styles.container}>
      <Text>Hello, you are welcome to React Native.</Text>
      <Image source={require('./assets/icon.png')}/>

      // specify the dimension for network images
      <Image />
      {/* <StatusBar style="auto" /> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
