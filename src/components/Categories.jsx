import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import { Badge, TouchableRipple } from 'react-native-paper';
import styled from 'styled-components';
import { tags } from '../utils/json/tags';

const Cat=styled(Badge)`
            background-color:rgb(94, 83, 72);
            color:rgb(255,255,255);
            margin:1px;
            height:40px;
            width:85px`


const Categories = ({setCategory}) => {
  return (
    <View >
        <FlatList
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        data={tags}
        renderItem={({item}) => (
       <TouchableOpacity onPress={()=>{setCategory(item.name)}}>
              <Cat >{item.name}</Cat>
       </TouchableOpacity>
      )}
      keyExtractor={(item) => item._id}
      contentContainerStyle={{ padding: 5 }}
       />
     
    </View>
  )
}

export default Categories