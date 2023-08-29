import React, {useState, useEffect} from 'react';
import {Text, Animated, StyleSheet, View} from 'react-native';

function Animation3() {
  const [animation] = useState(new Animated.Value(14));

  useEffect(() => {
    Animated.timing(animation, {
      toValue: 40,
      duration: 1000,
    }).start();
  }, []);

  return (
    <>
      <View>
        <Animated.Text style={[styles.text, {fontSize: animation}]}>
          oa
        </Animated.Text>
      </View>
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

export default Animation3;
