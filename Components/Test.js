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
} from 'react-native';


class Test extends React.Component{
    constructor(props){
        super(props)
    }

  

render(){
    return(
        <SafeAreaView style={{flex:1}}>
            <View style={{flexDirection:"row",justifyContent:"space-between",marginTop:20}}>
                <Text>Stay Safe</Text>
                <Text>Stay Home</Text>
          
            </View>
        </SafeAreaView>
    )
}

}

export default Test