import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import Animation1 from './components/Animation1';
import Animation2 from './components/Animation2';
import Animation3 from './components/Animation3';
import Animation4 from './components/Animation4';
import Animation5 from './components/Animation5';
import Animation6 from './components/Animation6';
import Animation7 from './components/Animation7';

const App = () => {
  return (
    <View style={styles.content}>
      {/* <Animation1 />
      <Animation2 /> */}
      {/* <Animation3 />
      <Animation4 /> */}
      {/* <Animation5 /> */}
      {/* <Animation6 /> */}
      <Animation7 />
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    marginTop: 100,
  },
});

export default App;
