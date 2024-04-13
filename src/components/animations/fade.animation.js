import { Animated } from "react-native";
import React, { useEffect, useRef } from "react";

const FadeInAnimation = ({ duration = 1500, ...props }) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  const fadeIn = () => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: duration,
      useNativeDriver: true,
    }).start();
  };
  useEffect(() => {
    fadeIn();
  }, [fadeAnim, duration]);
  return (
    <Animated.View style={{ ...props.style, opacity: fadeAnim }}>
      {props.children}
    </Animated.View>
  );
};

export default FadeInAnimation;
