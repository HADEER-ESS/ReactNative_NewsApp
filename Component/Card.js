import React, {useEffect, useState} from 'react';
import {Text, ScrollView, Image, View, TouchableOpacity} from 'react-native';
import moment from "moment";
import { useNavigation } from '@react-navigation/native';

export default function Card({data}) {
  const navigation = useNavigation()
  return (
    <ScrollView>
      <View style={{flex: 1, alignItems: 'center'}}>
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
              borderBottomColor:"#666" ,
              borderBottomWidth:1 ,
              borderBottomRightRadius:16 ,
              borderBottomLeftRadius:16
              }}>
              <Image
                source={{uri: `${element.urlToImage}`}}
                style={{height: 160, width: 105 , marginRight:9}}
              />
              <View style={{flexShrink:1 }}>
                <Text style={{fontSize: 19, fontWeight: 'bold' , color:"#000"}}>{element.source.name}</Text>
                <Text style={{fontSize: 19 ,}}>{element.title}</Text>
              </View>
            </TouchableOpacity>
          );
        })
        }
      </View>
    </ScrollView>
  );
}

