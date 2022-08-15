import React, { useContext, useEffect, useState } from "react";
import { View, TextInput, ActivityIndicator, ScrollView, RefreshControl } from "react-native";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { searchContext } from "../Providers/SearchProvider";
import Card from "./Card";

export default function Search() {
    const {SearchInput , setSearchInput} = useContext(searchContext)
    const [SearchedData , setSearchedData] = useState([])
    const [data, setData] = useState([]);
    const [refresh , setRefresh] = useState(false)
    const URL =
    'https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=afd43f2dcff64ea5b649e5477ebca914';

  useEffect(() => {
    setRefresh(true)
    fetch(URL)
      .then(res => res.json())
      .then(outputData => setData(outputData.articles))
      .catch(err => console.log('Error in fetch ', err));
      setRefresh(false)
  }, []);
  
  const renderChange = (val) => {
    setSearchInput(val);
    let capitalizeVal = val.charAt(0).toUpperCase() + val.slice(1);
    let newSearchedData = data.filter(item =>{
        return item.title.includes(capitalizeVal);
    });
    setSearchedData(newSearchedData);
  }
    return(
        <View>
        <View style={{flexDirection:'row' , alignItems:'center' , borderColor:"#666" , borderWidth:1 , borderRadius:20 , margin:11, backgroundColor:"#fff" , height:37}}>
        <MaterialIcons name="search" size={18} color="#666" style={{paddingHorizontal:7}}/>
        <TextInput placeholder="Search by title" value={SearchInput} onChangeText={val=>renderChange(val)} style={{justifyContent:'center' , alignItems:"center"}}/>
        </View>
        <View style={{ height:0.5 , backgroundColor:"#666"}}></View>
        {
          !refresh?
          <ScrollView refreshControl={<RefreshControl refreshing={refresh}/>}>
          {SearchInput===null ? <Card data={data}/> : <Card data={SearchedData}/>}
          </ScrollView>:
          <ActivityIndicator color="#000" size="large"/>
        }
        
        </View>
    )
}