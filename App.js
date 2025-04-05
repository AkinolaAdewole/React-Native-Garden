import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image, SafeAreaView, TouchableWithoutFeedback, Alert, Button } from 'react-native';


export default function App() {
  
  return (
    <SafeAreaView style={[styles.container, containerStyle]}>
      <Text>Hello, you are welcome to React Native.</Text>
      <Image source={require('./assets/icon.png')}/>

      // specify the dimension for network images
      <TouchableWithoutFeedback></TouchableWithoutFeedback>
      <Image source={{
        width: 200,
        height:300,
        uri: "https://picsum.photos/200/300"
       }} 
      />

      
      <StatusBar style="auto" />
      <Button  title='Click me'
      color="Green"
      onPress={()=> alert('Button clicked')}
      />


      <Button  title='Click me'
      color="Green"
      onPress={()=>Alert.alert("My Title", "My Mesage", [
        {text: "Yes", onPress:()=> console.log("Yes")},
        {text: "No", onPress:()=> console.log("No")},
      ])}
      />

    <Button  title='Click me'
      color="Green"
      onPress={() => Alert.prompt("My Title", "My Message", text => console.log(text))}
      />

    </SafeAreaView> 
  );
}

const containerStyle ={backgroundColor:'Orange'}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
