
import { StatusBar } from "expo-status-bar";

import { StyleSheet, Text, View ,Button} from "react-native";
 
export default function App() {

  return (

    <View style={styles.container}>

      <Text>Welcome to CPRG303D</Text>

      <Text>Hello World !!</Text>

      <Button title = 'Click me!'/>

      <StatusBar style="auto" />

    </View>

  );

}
 
const styles = StyleSheet.create({

  container: {

    flex: 1,

    backgroundColor: "orange",

    alignItems: "center",

    justifyContent: "center",

    color: "red",

  },

});