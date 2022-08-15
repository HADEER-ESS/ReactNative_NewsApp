import React, {useState} from 'react';
import {Text, ScrollView, Image, View, TouchableOpacity, RefreshControl} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import moment from "moment";

export default function Card({data}) {
  const navigation = useNavigation()
  
  return (
    <ScrollView showsHorizontalScrollIndicator={false} style={{ backgroundColor:"#f1f1f3"}}>
      <View style={{flex: 1, alignItems: 'center' , marginHorizontal:11}}>
        {
        data.map((element, index) => {
          return (
            <TouchableOpacity onPress={()=>navigation.navigate("Details" , {
              image : element.urlToImage,
              auther : element.author,
              title : element.title,
              date : element.publishedAt,
              content : element.content,
              name : element.source.name,
            })}
            key={index}
            style={{
              flexDirection:'row' ,
              width:'100%' ,
              padding:15 ,
              borderColor:"transparent" ,
              borderWidth:1 ,
              borderRadius:19,
              marginVertical:11,
              backgroundColor:"#fff"
              }}>
              <Image
                source={{uri: `${element.urlToImage}`}}
                style={{height: 100, width: 105 , marginRight:9}}
              />
              <View style={{flexShrink:1 , paddingVertical:9}}>
                <Text style={{fontSize: 17 , color:"#666"}}>{element.source.name}</Text>
                <Text style={{fontSize:19 , fontWeight:'bold' , paddingEnd:7 , color:"#000"}} numberOfLines={2}>{element.title}</Text>
                <Text style={{textAlign:'right' , marginTop:5}}>{moment(element.publishedAt).utc().format("MM-DD-YYYY")}</Text>
              </View>
            </TouchableOpacity>
          );
        })
        }
      </View>
    </ScrollView>
  );
}

