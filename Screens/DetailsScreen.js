import React, { useEffect } from "react";
import { View,Text, Image, ScrollView} from "react-native";
import moment from "moment";
import Header from "../Component/Header";

 export default class DetailsScreen extends React.Component{
     state = {itemData : this.props.route.params}
     componentDidMount(){
         console.log(this.state.itemData.image)
         console.log(this.state.itemData.auther)
         console.log(this.state.itemData.date)
         console.log(this.state.itemData.title)
         console.log(this.state.itemData.content)
     }
     render(){
         return(
             <View>
             <Header title={this.state.itemData.name}/>
             <Image source={{uri: `${this.state.itemData.image}`}} style={{width: '100%', height: '28%' }}/>
             <View style={{margin:17}}>
             <Text style={{fontSize:23 , fontWeight:'bold' , color:'#000' , paddingBottom:9}}>{this.state.itemData.auther}</Text>
             <Text style={{fontSize:19 , color:"#666" , paddingBottom:9}}>{moment(this.state.itemData.date).utc().format("DD-MM-YYYY")}</Text>
             <Text style={{fontSize:23 , color:"#000" , fontWeight:'bold', paddingBottom:9}}>{this.state.itemData.title}</Text>
             <Text style={{fontSize:19 , color:"#000" , paddingBottom:9}}>{this.state.itemData.content}</Text>
             </View>
             </View>
         )
     }
 }
