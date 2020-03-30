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

class MyCart extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.MyCart}>
          <Text style={styles.MyCartFont}>My Cart</Text>
          <Text style={styles.ItemStyle}>1 item</Text>
        </View>

        <View style={styles.OfferSection}>
          <View>
            <Image
              source={require('../src/Assets/Truck.png')}
              style={{marginLeft: 25, height: 30, width: 30}}
            />
          </View>

          <View style={styles.OfferTextSection}>
            <Text style={styles.OfferText}>
              FREE STANDARD DELIEVERY ON ORDERS ABOVE AED 250
            </Text>
            <View style={styles.SmallGreyLine} />
            <Text style={styles.OfferText}>
              SHOP & COLLECT FOR FREE ON ORDERS ABOVE AED 100
            </Text>
          </View>
        </View>

        <View style={styles.PurchaseSection}>
        
        <View >
        <Image
              source={require('../src/Assets/Man.jpg')}
              style={styles.DisplayPic}
            />
        </View>
        
        <View style={{marginLeft:10}}>
        <Text style={styles.DressName}>Tasso Elba</Text>
        <Text>Men's Pallo Cardigan Sweater, Ether</Text>
        
        <Text style={styles.DressSize}>AED 52</Text>
        <View style={styles.PurchaseAttributes}>
            <Text>QTY:</Text>
            <Text style={{marginLeft:8}}>1</Text>
            <TouchableOpacity>
            <Image
             source={require('../src/Assets/DownChevron.png')}
             style={{height:20,width:10,marginLeft:7}}/>
            </TouchableOpacity>
            <Text style={{marginLeft:40}}>SIZE:</Text>
            <Text style={{marginLeft:8}} >XL</Text>
            <TouchableOpacity>
            <Image
             source={require('../src/Assets/DownChevron.png')}
             style={{height:20,width:10,marginLeft:7}}/>
             </TouchableOpacity>
        </View>
        </View>
        </View>
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  MyCart: {
    alignItems: 'center',
    marginTop: 20,
  },
  MyCartFont: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  ItemStyle: {
    marginTop: 7,
    fontSize: 11,
  },
  OfferSection: {
    marginTop: 15,
    borderTopColor: 'black',
    borderTopWidth: 1,
    borderBottomWidth: 'black',
    borderBottomWidth: 1,
    alignItems: 'center',
    padding: 10,
    flexDirection: 'row',
  },
  SmallGreyLine: {
    width: '50%',
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
    marginTop: 9,
    marginBottom: 9,
    marginLeft: 80,
  },
  OfferText: {
    fontWeight: '700',
    fontSize: 10,
    marginLeft: 20,
  },
  PurchaseSection:{
      flexDirection:"row",
      marginTop:20,
      marginLeft:10
    },
    DisplayPic:{
        height:120,
        width:80
    },
    DressName:{fontWeight:"600",color:"black"},
    DressSize:{marginTop:30,fontSize:17},
    PurchaseAttributes:{flexDirection:"row",marginTop:20}
});
export default MyCart;
