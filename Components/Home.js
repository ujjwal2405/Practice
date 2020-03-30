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



class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={{flex: 1, marginLeft: 20, marginTop: 45}}>
          
          <View style={{flexDirection:"row",justifyContent:"space-between"}}>
          <View>
            <Text style={styles.WelcomeText}>Welcome!</Text>
            <View
            style={{
              marginTop: 7,
              flexDirection: 'row',
              padding: 10,
              backgroundColor: '#f7f7a1',
              opacity:0.8
              
            }}>
            
            <TouchableOpacity>
              <View>
                <Text>SIGN IN </Text>
              </View>
            </TouchableOpacity>


            
            <TouchableOpacity>
              <View style={{marginLeft: 10}}>
                <Text>|    JOIN</Text>
              </View>
            </TouchableOpacity>
           
          </View>
         </View>
        <View>
        <Image
        style={styles.ProfileImg}
        source={require('../src/Assets/DefaultProfile.png')}
            />
        </View>
          </View>

<View style={styles.BigGreyLine}>

</View>

{/* This Whole Section Comprises of a single entity Track Order */}
          <View style={{flex:1}}>
            <View style={styles.LinkParent}>
            <View style={{flexDirection:"row"}}>
            <Image
            source={require('../src/Assets/TrackOrder.png')}
             />
            <Text style={styles.LinkContent}>Track Order</Text>
            </View>
            
            <View>
            <Image
            style={styles.ChevronImg}
            source={require('../src/Assets/Chevron.png')}
             />
            </View>
            </View>

            <View style={styles.GreyLine}/>

            <View style={styles.LinkParent}>
            <View style={{flexDirection:"row"}}>
            <Image
            source={require('../src/Assets/SizeChart.png')}
             />
            <Text style={styles.LinkContent}>Size Chart</Text>
            </View>
            
            <View>
            <Image
            style={styles.ChevronImg}
            source={require('../src/Assets/Chevron.png')}
             />
            </View>
            </View>

            <View style={styles.GreyLine}/>
            
            <View style={styles.LinkParent}>
            <View style={{flexDirection:"row"}}>
            <Image
            
            source={require('../src/Assets/NotificationT.png')}
             />
            <Text style={styles.LinkContent}>Notifications</Text>
            </View>
            
            <View>
            <Image
            style={styles.ChevronImg}
            source={require('../src/Assets/Chevron.png')}
             />
            </View>
            </View>

            <View style={styles.GreyLine}/>

            <View style={styles.LinkParent}>
            <View style={{flexDirection:"row"}}>
            <Image
            
            source={require('../src/Assets/StoreLocator.png')}
             />
            <Text style={styles.LinkContent}>Store Locator</Text>
            </View>
            
            <View>
            <Image
            style={styles.ChevronImg}
            source={require('../src/Assets/Chevron.png')}
             />
            </View>
            </View>

            <View style={styles.BigGreyLineTwo}/>

            <View style={styles.LinkParent}>
            <View style={{flexDirection:"row"}}>
            <Image
            
            source={require('../src/Assets/Globe.png')}
             />
            <Text style={styles.LinkContent}>Country</Text>
            </View>
            
            <View style={{flexDirection:"row"}}>
            <Image
            style={{height:25,width:40,marginRight:20}}
            source={require('../src/Assets/AedFlag.png')}
             />
            <Text style={{marginRight:20,fontSize:18}}>AED</Text>
            <Image
            style={styles.ChevronImg}
            source={require('../src/Assets/Chevron.png')}
             />
            </View>
            </View>
            
            <View style={styles.GreyLine}/>

            <View style={styles.LinkParent}>
            <View style={{flexDirection:"row"}}>
            <Image
            
            source={require('../src/Assets/Language.png')}
             />
            <Text style={styles.LinkContent}>Language</Text>
            </View>
            
            <View style={{flexDirection:"row"}}>
            
            <Text style={{marginRight:20,fontSize:18}}>ENG</Text>
            <Image
            style={styles.ChevronImg}
            source={require('../src/Assets/Chevron.png')}
             />
            </View>
            </View>
            
            <View style={styles.GreyLine}/> 
          
            <View style={styles.LinkParent}>
            <View style={{flexDirection:"row"}}>
            <Image
            
            source={require('../src/Assets/AboutUs.png')}
             />
            <Text style={styles.LinkContent}>About Us</Text>
            </View>
            
            <View>
            <Image
            style={styles.ChevronImg}
            source={require('../src/Assets/Chevron.png')}
             />
            </View>
            </View>
          
            <View style={styles.GreyLine}/> 
          
            <View style={styles.LinkParent}>
            <View style={{flexDirection:"row"}}>
            <Image
            
            source={require('../src/Assets/FAQ.png')}
             />
            <Text style={styles.LinkContent}>FAQ</Text>
            </View>
            
            <View>
            <Image
            style={styles.ChevronImg}
            source={require('../src/Assets/Chevron.png')}
             />
            </View>
            </View>
          
            <View style={styles.GreyLine}/> 

            <View style={styles.LinkParent}>
            <View style={{flexDirection:"row"}}>
            <Image
            
            source={require('../src/Assets/Shipping.png')}
             />
            <Text style={styles.LinkContent}>Shipping & Returns</Text>
            </View>
            
            <View>
            <Image
            style={styles.ChevronImg}
            source={require('../src/Assets/Chevron.png')}
             />
            </View>
            </View>
          
            <View style={styles.GreyLine}/> 
          
          </View>

          

          
  {/* This Whole Section Comprises of a single entity Track Order */}        
          
          
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
  WelcomeText: {
    fontSize: 28,
    fontWeight: 'bold',
  },
  ChevronImg:{
    marginRight:20,
    height:20,
        width:20
  },
  ProfileImg:{
    height:100,
    width:100,
    marginRight:20,
    marginBottom:20
  },
  LinkContent:{
    marginLeft:20,
    fontSize:17
  },
  GreyLine:{
    borderBottomColor: 'grey',
    borderBottomWidth: 0.5,
    marginTop:10,
    marginLeft:-20
  },
  LinkParent:{
    flexDirection:"row",
    marginTop:20,
    justifyContent:"space-between"
  },
  BigGreyLine:{
    backgroundColor:"grey",
    height:15,
    marginLeft:-20,
    opacity:0.2
  },
  BigGreyLineTwo:{
    backgroundColor:"grey",
    height:15,
    marginLeft:-20,
    opacity:0.2,
    marginTop:30
  }
});
export default Home;







{/* <View style={{borderRadius:50,borderWidth:2,alignSelf:"flex-end"}}>
<Image
source={require('../src/Assets/Profile2.png')}
/>
</View> */}