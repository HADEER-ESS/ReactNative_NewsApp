import React, { useContext } from "react";
import { View,Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { searchContext } from "../Providers/SearchProvider";

export default function Header({title}){
    const navigation = useNavigation()
    const {setSearchInput} = useContext(searchContext)
    const navigateToHome = () => {
        setSearchInput(null)
        navigation.goBack()
    }
    return(
        <View style={{height:60,display:'flex' , justifyContent:"center" , alignItems:"center" , backgroundColor:"#31087B"}}>
            {
                title === "All News"
                ?
                <Text style={{color:"#fff" , fontSize:25 , fontWeight:"bold"}}>{title}</Text>
                :
                <View style={{justifyContent:'space-between' ,flexDirection:'row' , alignItems:'center' , margin:4}}>
                <TouchableOpacity onPress={()=>{navigateToHome()}} >
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