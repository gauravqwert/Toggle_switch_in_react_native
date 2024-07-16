import { StyleSheet, Text, View,Switch } from 'react-native';

import React,{useState} from 'react';
import { StatusBar } from 'expo-status-bar';

export default function App() {
        
  const [isEnabled,setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <View style={styles.container}>
      <Text style={{fontWeight:"bold",fontSize: 22,margin:20}}>
           Are You A React Native Developer ?
      </Text>
     <Switch
      trackColor={{false: "#000",true:"#026efd"}}
      thumbColor={isEnabled ? '#f5dd4b': "#f4f3f4"}
      ios_backgroundColor="#3e3e3e"
      onValueChange={toggleSwitch}
      value={isEnabled}
      style={{transform: [{scaleX:2},{scaleY:2}]}} // changing the size of switch button
      onChange={isEnabled ? (console.log("Yes")) : (console.log("No"))}
     />
     <StatusBar style='auto'/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
