import { View, Text,FlatList } from 'react-native'
import React,{useEffect,useState} from 'react'
import Loading from '../utils/Loading'
import styled from 'styled-components';
import axios from 'axios';
import { QUOTES_DATA } from '../services/mock/quotes.mock';
import { BASE_URL } from '../utils/utils';
import { MotiView } from 'moti';


const QuoteListHolder=styled.View`
                        align-items:center;
                        flex:1;
                        width:100%
                        `

const QuoteList=styled.View`
                background-color:white;
                border-radius:10px;
                color:"rgb(0,0,0)";
                elevation:1;
         
                justify-content:center;
                align-items:center;
                margin-bottom:20px;
                width:100%;
                padding:10px;
                `


const QuoteListtext=styled.Text`
                    `
const QuotesList = ({tag}) => {

  const [quotes,SetQuotes]=useState([{}]);
  const [loading,setLoading]=useState(false);
  

  const List=()=>{

  return(  <QuoteListHolder >
    <FlatList
   
    showsVerticalScrollIndicator={false}
    data={quotes}
    renderItem={({item}) => (

<MotiView   from={{scale:0}} animate={{scale:1}}
            transition={{
                    scale: {
                      type: 'spring',
                      delay: 200,
                    },
                    }}>
                <QuoteList style={{fontFamily:}}>
                        <QuoteTextList>{item.content+"~"+item.author}</QuoteTextList>
                </QuoteList>
</MotiView>

  )}
  keyExtractor={(item) => item._id}
  contentContainerStyle={{ padding: 16 }}
   />
 
</QuoteListHolder>)


  }



  useEffect(() => {
   setLoading(false)
  async function getReq(){
        const request=await axios.get(BASE_URL+tag);
        SetQuotes((request.data.results));
        //console.log(quotes)
        setLoading(true)
        return request}
    getReq()
    },[tag])

  
  return(


     loading? <List/>: <Loading/>
  )
  
}

export default QuotesList