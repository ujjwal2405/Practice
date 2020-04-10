import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator
} from 'react-native';


class Test extends React.Component{
    constructor(props){
        super(props)
        this.state={
            loader:true,
            jsondata:''
        }
    }

    componentDidMount(){
        return fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(responseJson =>{
            this.setState({
                loader:false,
                jsondata:responseJson
            })
        })
        .catch(error =>{
            console.log(error)
        })
    }
  

ActivityIndication = ()=>{
    return (
        <View style={[styles.container, styles.horizontal]}>
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      );
    }

DisplayData =()=>{
    return(
        <SafeAreaView>
        <FlatList
            style={{marginTop:10}}
            data={this.state.jsondata}
            renderItem={({item}) => {
              return (
            <View style={{flex:1}}>
                <Text style={{marginTop:10,fontSize:20}}>
                    {item.title}
                </Text>
            </View>
              );
            }}
          />
          </SafeAreaView>
    )
}

render(){
    return(
        <SafeAreaView style={{flex:1}}>
            <View style={{marginTop:20,padding:20}}>

                {this.state.loader ? this.ActivityIndication() : this.DisplayData()}
          
            </View>
        </SafeAreaView>
    )
}

}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center"
    },
    horizontal: {
      flexDirection: "row",
      justifyContent: "space-around",
      padding: 10
    }
  });
export default Test




// https://admin-stage-temp.priskoll.occdev.axfood.se/axfood/axfood-security/login