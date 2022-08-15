import React from "react";
import { View,Text, Image, ScrollView} from "react-native";
import moment from "moment";
import Header from "../Component/Header";

 export default class DetailsScreen extends React.Component{
     state = {itemData : this.props.route.params}
    //  componentDidMount(){
    //      console.log(this.state.itemData.image)
    //      console.log(this.state.itemData.auther)
    //      console.log(this.state.itemData.date)
    //      console.log(this.state.itemData.title)
    //      console.log(this.state.itemData.content)
    //  }
     render(){
        let {auther , date , title , content , image , name} = this.state.itemData
         return(
             <View style={{flex:1 , backgroundColor:"#fff"}}>
             <Header title={name}/>
             <Image source={{uri: `${image}`}} style={{width: '100%', height: '35%'}} borderBottomLeftRadius={11} borderBottomRightRadius={11}/>
             <ScrollView style={{padding:11 , backgroundColor:"white"}}>
             <Text style={{fontSize:21 , fontWeight:'bold' , color:'#000' , paddingBottom:4}}>Auther: {auther}</Text>
             <Text style={{fontSize:19 , color:"#000" , fontWeight:'bold', paddingBottom:4}}>{title}</Text>
             <Text style={{fontSize:17 ,color:"#666", paddingBottom:4}}>{content}</Text>
             <Text style={{fontSize:16 , color:"#7F8487" , paddingTop:7 , textAlign:'right'}}>{moment(date).utc().format("MM-DD-YYYY")}</Text>
             </ScrollView>
             </View>
         )
     }
 }
