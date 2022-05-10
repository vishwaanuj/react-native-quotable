import { View, Text } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native';
import { StatusBar} from 'expo-status-bar'
import styled from 'styled-components'
import Constants from 'expo-constants';
import { useFonts,Freehand_400Regular as Freehand } from '@expo-google-fonts/freehand';
import Categories from '../components/Categories';
import Qod from '../components/Qod';
import QuotesList  from '../components/QuotesList';




const Safe=styled(SafeAreaView)`
            flex:1;
            background-color:"rgb(230, 206, 177)";
            padding-top: ${Constants.statusBarHeight+20}px;
            padding-left:20px;
            padding-right:20px;
            `
const HomeText=styled(Text)`
                font-size:32px;
                font-family:Freehand`;

const Category=styled(View)`
                padding-top:15px`

const CategoryText=styled(Text)`
                    font-size:18px`

const FallBackText=styled(Text)`
                font-size:32px;
                `
                
const Home = () => {

    const [category,selectedCategory]=useState("life")

    const [fontsLoaded] = useFonts({
        Freehand,
      });

  return (

    <Safe> 
        <StatusBar />
         {fontsLoaded ?   <View>
            <HomeText>Quotable</HomeText>
            </View>:<View><FallBackText>Quotes</FallBackText></View>}
              <View>
                <Qod />
              </View>  
              <Category>
                <CategoryText> Choose Category</CategoryText>
                <Categories setCategory={selectedCategory}/>
              </Category>

              <View style={{flex:1}}>
                <QuotesList tag={category}/>
              </View>   
    </Safe>
   
  )
}

export default Home