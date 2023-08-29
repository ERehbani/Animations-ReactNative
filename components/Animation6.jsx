import React, {useEffect, useState} from 'react';
import {Text, View, StyleSheet, Animated} from 'react-native';

function Animation6() {
  const [animation1] = useState(new Animated.Value(0));
  const [animation2] = useState(new Animated.Value(-50));

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(animation2, {
          toValue: -30,
          duration: 1000,
        }),
        Animated.timing(animation1, {
          toValue: 60,
          duration: 500,
        }),
        Animated.timing(animation2, {
          toValue: 30,
          duration: 500,
        }),
        Animated.timing(animation1, {
          toValue: 0,
          duration: 500,
        }),
        Animated.timing(animation2, {
          toValue: -30,
          duration: 500,
        }),
      ]),
    ).start();
  }, []);

  const styleAnimation1 = {
    transform: [{translateY: animation1}, {translateX: animation2}],
  };

  const styleAnimation2 = {};

  return (
    <View style={{alignItems: 'center'}}>
      <Animated.View style={[styles.caja, styleAnimation1]}></Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  caja: {
    width: 10,
    height: 10,
    backgroundColor: 'red',
  },
});

export default Animation6;
