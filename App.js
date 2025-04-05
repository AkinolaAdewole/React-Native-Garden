import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  TouchableWithoutFeedback,
  Alert,
  Button,
  Platform,
  StatusBar,
} from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={[styles.container]}>
      <Text>Hello, you are welcome to React Native.</Text>
      <Image source={require('./assets/icon.png')} />

      {/* specify the dimension for network images */}
      <Image
        source={{
          uri: 'https://picsum.photos/200/300',
        }}
        style={{ width: 200, height: 300 }}
      />

      <ExpoStatusBar style="auto" />

      <Button
        title="Click me"
        color="green"
        onPress={() => alert('Button clicked')}
      />

      <Button
        title="Click me"
        color="green"
        onPress={() =>
          Alert.alert('My Title', 'My Message', [
            { text: 'Yes', onPress: () => console.log('Yes') },
            { text: 'No', onPress: () => console.log('No') },
          ])
        }
      />

      <Button
        title="Click me"
        color="green"
        onPress={() => {
          if (Platform.OS === 'ios') {
            Alert.prompt('My Title', 'My Message', text =>
              console.log(text)
            );
          } else {
            alert('Prompt is not available on Android.');
          }
        }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'orange',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
});
