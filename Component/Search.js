import React, { useEffect, useState } from "react";
import { View,Text, TextInput } from "react-native";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Card from "./Card";

export default function Search() {
    const [SearchedData , setSearchedData] = useState([])
    const [input , setInput] = useState('')
    const [data, setData] = useState([]);
    const URL =
    'https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=afd43f2dcff64ea5b649e5477ebca914';
  useEffect(() => {
    fetch(URL)
      .then(res => res.json())
      .then(outputData => setData(outputData.articles))
      .catch(err => console.log('Error in fetch ', err));
  }, []);
  const renderChange = (val) => {
    setInput(val);
    let capitalizeVal = val.charAt(0).toUpperCase() + val.slice(1);
    let newSearchedData = data.filter(item =>{
        return item.source.name.includes(capitalizeVal);
    });
    setSearchedData(newSearchedData);
  }
    return(
        <View>
        <View style={{flexDirection:'row' , alignItems:'center' , borderColor:"#666" , borderWidth:1 , borderRadius:7 , margin:11}}>
        <MaterialIcons name="search" size={18} color="#666" style={{paddingHorizontal:7}}/>
        <TextInput placeholder="search with title" value={input} onChangeText={val=>renderChange(val)}/>
        </View>
        {input==='' ? <Card data={data}/> : <Card data={SearchedData}/>}
        </View>
    )
}