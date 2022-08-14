import React from "react";
import { View,Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export default function Header({title}){
    const navigation = useNavigation()
    return(
        <View style={{height:60,display:'flex' , justifyContent:"center" , alignItems:"center" , backgroundColor:"#31087B"}}>
            {
                title === "New App"
                ?
                <Text style={{color:"#fff" , fontSize:23 , fontWeight:"bold"}}>{title}</Text>
                :
                <View style={{justifyContent:'space-between' ,flexDirection:'row' , alignItems:'center' , margin:4}}>
                <TouchableOpacity onPress={()=>navigation.goBack()} >
                    <MaterialIcons name="arrow-back" color='#fff' size={25}/>
                </TouchableOpacity>
                <View style={{flex:1}}>
                <Text style={{fontSize:21 , fontWeight:'bold' , color:'#fff' , textAlign:'center'}}>{title}</Text>
                </View>
            </View>
            }
        </View>
    )
}