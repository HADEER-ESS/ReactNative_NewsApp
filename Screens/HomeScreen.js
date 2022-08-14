import React from "react";
import { View,Text } from "react-native";
import Card from "../Component/Card";
import Header from "../Component/Header";
import Search from "../Component/Search";

export default HomeScreen = () => {
    return(
        <View>
        <Header title={"New App"}/>
        <Search/>
        </View>
    )
}