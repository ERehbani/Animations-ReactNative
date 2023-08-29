import React, {useState, useEffect} from 'react';
import {Text, Animated, StyleSheet, View} from 'react-native';

function Animation4() {
  const [animation] = useState(new Animated.Value(0));

  useEffect(() => {
    Animated.timing(animation, {
      toValue: 360,
      duration: 1000,
    }).start();
  }, []);

  const interpolate = animation.interpolate({
    inputRange: [0, 360],
    outputRange: ['0deg', '360deg'],
  });

  const styleAnimation = {
    transform: [{rotate: interpolate}],
  };

  return (
    <>
      <View>
        <Animated.View style={[styles.text, styleAnimation]}></Animated.View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  text: {
    width: 100,
    height: 100,
    backgroundColor: 'cornflowerblue',
  },
});

export default Animation4;
