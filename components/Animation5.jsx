import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  Animated,
} from 'react-native';

function Animation5() {
  const [animation] = useState(new Animated.Value(1));

  const pushButton = () => {
    Animated.spring(animation, {
      toValue: 0.9,
    }).start();
  };
  const releaseButton = () => {
    Animated.spring(animation, {
      toValue: 1,
      //   friction: 4, //mas bajo, mayor rebote
      tension: 10,
    }).start();
  };

  const styleAnimation = {
    transform: [{scale: animation}],
  };

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback
        onPressIn={() => pushButton()}
        onPressOut={() => releaseButton()}>
        <Animated.View style={[styles.btn, styleAnimation]}>
          <Text style={styles.text}>Iniciar sesión</Text>
        </Animated.View>
      </TouchableWithoutFeedback>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    fontSize: 28,
  },
  btn: {
    backgroundColor: 'cornflowerblue',
    width: 280,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Animation5;
