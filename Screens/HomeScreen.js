import React from "react";
import { View} from "react-native";
import Header from "../Component/Header";
import Search from "../Component/Search";

export default HomeScreen = () => {
    return(
        <View>
        <Header title={"All News"}/>
        <Search/>
        </View>
    )
}