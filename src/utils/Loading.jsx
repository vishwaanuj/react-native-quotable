import React, { useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  withRepeat,
  useAnimatedGestureHandler,
} from 'react-native-reanimated';
import styled from 'styled-components';

const SIZE = 20.0;


const LoadingMorph=styled(Animated.View)`
                    height: ${SIZE}px;
                    width: ${SIZE}px; 
                    background-color: 'rgb(230, 230, 230)';
                    elevation:1`
const handleRotation = (progress) => {
  'worklet';

  return `${progress.value * 5 * Math.PI}rad`;
};

export default function Loading() {
  const progress = useSharedValue(1);
  const scale = useSharedValue(2);

  const reanimatedStyle = useAnimatedStyle(() => {
    return {
      opacity: progress.value,
      borderRadius: (progress.value * SIZE/4) ,
      transform: [{ scale: scale.value }, { rotate: handleRotation(progress) }],
    };
  }, []);

  useEffect(() => {
    progress.value = withRepeat(withSpring(0.5), -1, true);
    scale.value = withRepeat(withSpring(1), -1, true);
  }, []);

  return (
    <View style={styles.container}>
      <LoadingMorph
        style={
          reanimatedStyle}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
   
    alignItems: 'center',
    justifyContent: 'center',
    
  },
});