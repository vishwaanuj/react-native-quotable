import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from './src/screens/Home';
import FETCH_URL from './src/services/quotes.service';
import { useFonts,Freehand_800Regular } from '@expo-google-fonts/freehand';

export default function App() {

 
   
  return (
    <View style={styles.container}>
     <Home/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
