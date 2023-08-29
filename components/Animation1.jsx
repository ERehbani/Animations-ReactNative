import React, {useState, useEffect} from 'react';
import {Text, Animated, StyleSheet} from 'react-native';

function Animation1() {
  const [animation] = useState(new Animated.Value(0));

  useEffect(() => {
    Animated.timing(animation, {
      toValue: 1,
      duration: 1000,
    }).start();
  }, []);

  return (
    <>
      <Animated.View style={{opacity: animation}}>
        <Text style={styles.text}>oa</Text>
      </Animated.View>
    </>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    textAlign: 'center',
    color: 'black',
  },
});

export default Animation1;
