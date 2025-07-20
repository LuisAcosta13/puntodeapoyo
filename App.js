import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import GlobalStyles from './GlobalStyles';
import Home from './components/Home';
import { LinearGradient } from 'expo-linear-gradient';

export default function App() {

  let screen = <Home />

  return (
    <LinearGradient colors={['#c7ffda', '#ffffff']} style={styles.root}>
      <StatusBar style="dark" />
      <SafeAreaView style={GlobalStyles.androidSafeArea}>
        {screen}
      </SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
});
