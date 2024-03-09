import UnityView from '@azesmway/react-native-unity';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, Dimensions, StyleSheet, Text, View } from 'react-native';
const height = Dimensions.get("window").height
const width = Dimensions.get("window").width

export default function App() {
  const unityRef = React.useRef()
  const [message,setMessage] = React.useState('')
  const handleClick = ()=>{
    if(unityRef?.current){
      unityRef.current.postMessage("Canvas", "TestUnityCall", "RN Button is tapped!");
    }
  }
  return (
    <View style={styles.container}>
      <UnityView
      ref={unityRef}
      style={styles.container}
      onUnityMessage={(result)=>{
        console.log(`from Unity:${result.nativeEvent.message}`)
        setMessage(result.nativeEvent.message)
      }}/>
      <Text>{`From Unity:${message}`}</Text>
      <Button title='React Native Button' onPress={handleClick}/>
      

      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width:width,
    height:height
  },
});
