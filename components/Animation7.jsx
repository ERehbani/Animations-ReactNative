import React, {useEffect, useState} from 'react';
import {View, StyleSheet, Animated} from 'react-native';

function Animation7() {
  const [animation1] = useState(new Animated.Value(0));
  const [animation2] = useState(new Animated.Value(1));

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(animation1, {
          toValue: 300,
          duration: 1000,
        }),
        Animated.spring(animation2, {
          toValue: 10,
        }),
        Animated.spring(animation2, {
          toValue: 1,
        }),
        Animated.timing(animation1, {
          toValue: 600,
          duration: 1000,
        }),
        Animated.timing(animation1, {
          toValue: 0,
          duration: 1000,
        }),
      ]),
    ).start();
  }, []);

  const styleAnimation = {
    transform: [{translateY: animation1}, {scale: animation2}],
  };

  return (
    <View>
      <Animated.View style={[styles.box, styleAnimation]}></Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    width: 100,
    height: 100,
    backgroundColor: 'cornflowerblue',
  },
});

export default Animation7;
