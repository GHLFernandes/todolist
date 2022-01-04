import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';

import Main from './src/screens/Main';

export default function App() {
  return (
     
    <Main style={styles.container} />
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
