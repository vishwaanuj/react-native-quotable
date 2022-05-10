import { View, Text } from 'react-native'
import React, { useState,useEffect } from 'react'
import axios from 'axios'
import { useFonts,Oswald_400Regular} from '@expo-google-fonts/oswald';
import {useFonts as useFreehand,Freehand_400Regular} from '@expo-google-fonts/freehand';
import styled from 'styled-components';
import Loading from '../utils/Loading'
import { PanGestureHandler } from 'react-native-gesture-handler';
import { useAnimatedGestureHandler } from 'react-native-reanimated';

const Qod = () => {

const [fontFreehand] = useFreehand({Freehand_400Regular});
const[qod,setQod]=useState('Quote Of The Day');




useEffect(() => {
    const options = {
      method: 'GET',
      url: 'https://quotable.io/random?maxLength=100',
     
    };
    axios.request(options).then(function (response) {
    console.log(JSON.stringify(response.data.author));
    setQod((response.data.content)+"~"+response.data.author);

    }).catch(function (error) {
        console.error(error);
    });
      },[])

const QodText=styled.Text`
              font-family:Freehand_400Regular;
              margin-top:5px;
              elevation:1;
              font-size:18px`;

const Qod=styled.Text`
          font-size:18px`;

const QODHolder=styled.View`
                align-items:center;
                elevation:2;
                background-color:"rgb(255,255,255)";
                padding:5px;
                borderRadius:10px`;

const  panGestureEvent=useAnimatedGestureHandler({
  onStart:(event)=>{alert(event.translationY)},
  onActive:(event)=>{alert(event.translationX)}
})
  return (
    <QODHolder >
        <Qod>Quote Of The Day</Qod>

        {(fontFreehand)&& 
        <PanGestureHandler onGestureEvent={panGestureEvent}>
           <QodText>{qod}</QodText>
        </PanGestureHandler>
       }
    
    
    </QODHolder>
  )
}

export default Qod