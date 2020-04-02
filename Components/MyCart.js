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

import {Dropdown} from 'react-native-material-dropdown';

class MyCart extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    let quantity = [
      {
        value: 1,
      },
      {
        value: 2,
      },
      {
        value: 3,
      },
    ];

    let SizeofCloth = [
      {
        value: 'S',
      },
      {
        value: 'M',
      },
      {
        value: 'L',
      },
      {
        value: 'XL',
      },
    ];
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
          <View>
            <Image
              source={require('../src/Assets/Man.jpg')}
              style={styles.DisplayPic}
            />
          </View>

          <View style={{marginLeft: 10}}>
            <Text style={styles.DressName}>Tasso Elba</Text>
            <Text>Men's Pallo Cardigan Sweater, Ether</Text>

            <Text style={styles.DressSize}>AED 52</Text>
            <View style={styles.PurchaseAttributes}>
              <View style={{width: 70, color: 'black'}}>
                <Dropdown
                  label="QTY:"
                  data={quantity}
                  value={1}
                  itemColor="black"
                  textColor="black"
                />
              </View>

              <View style={{width: 40, color: 'black', marginLeft: 40}}>
                <Dropdown
                  label="SIZE"
                  data={SizeofCloth}
                  value={'XL'}
                  itemColor="black"
                  textColor="black"
                />
              </View>
            </View>
          </View>
        </View>

        <View style={{width: '100%', height: 1, backgroundColor: 'grey'}} />

        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity>
            <View style={styles.SaveForLater}>
              <Text>SAVE FOR LATER</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View style={styles.Remove}>
              <Text style={{color: 'red'}}>Remove</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={{backgroundColor: '#DCDCDC',marginTop:20}}>
          <View style={styles.LoyaltyPoints}>
            <Text>Sign In to earn loyality points</Text>
          </View>
        
        <View style={{flexDirection:"row"}}>
        <View style={{flex:1}}>
        <Image
              source={require('../src/Assets/Truck.png')}
              style={{height:50,width:50}}/>
        <Text>FREE SHIPPING</Text>
        <Text>On all orders above AED 250</Text>
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
  PurchaseSection: {
    flexDirection: 'row',
    marginTop: 20,
    marginLeft: 10,
  },
  DisplayPic: {
    height: 150,
    width: 100,
  },
  DressName: {fontWeight: '600', color: 'black'},
  DressSize: {
    marginTop: 30,
    fontSize: 17,
  },
  PurchaseAttributes: {flexDirection: 'row'},
  SaveForLater: {
    borderWidth: 1.5,
    borderColor: 'black',
    width: 150,
    height: 50,
    marginLeft: 20,
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  Remove: {
    width: 150,
    height: 50,
    marginLeft: 20,
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  LoyaltyPoints: {
    width: '100%',
    backgroundColor: '#f7f7a1',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
    marginTop: 8,
  },
});
export default MyCart;
