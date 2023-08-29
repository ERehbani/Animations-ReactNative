import React, {useState, useEffect} from 'react';
import {Text, Animated, StyleSheet} from 'react-native';

function Animation2() {
  const [animation] = useState(new Animated.Value(0));

  useEffect(() => {
    Animated.timing(animation, {
      toValue: 450,
      duration: 1000,
    }).start();
  }, []);

  return (
    <>
      <Animated.View
        style={[
          styles.box,
          {width: animation, height: animation},
        ]}></Animated.View>
    </>
  );
}

const styles = StyleSheet.create({
  box: {
    width: 100,
    height: 100,
    backgroundColor: 'cornflowerblue',
  },
});

export default Animation2;
