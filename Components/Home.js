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
 import ImagePicker from 'react-native-image-picker'

import Modal from 'react-native-modal';
import { RNCamera } from 'react-native-camera';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalVisible: false,
      img: require('../src/Assets/Man.jpg'),
    };
  }
  toggleModal = () => {
    this.setState({
      isModalVisible: !this.state.isModalVisible,
    });
  };



  launchImageLibrary = () => {
    let options = {
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    
    ImagePicker.launchImageLibrary(options, (response) => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
        alert(response.customButton);
      } else {
        const source = { uri: response.uri };
        console.log('response', JSON.stringify(response));
        this.setState({
          filePath: response,
          fileData: response.data,
          fileUri: response.uri
        });
      }
    });

  }

  launchCamera = () => {
    let options = {
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    ImagePicker.launchCamera(options, (response) => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
        alert(response.customButton);
      } else {
        const source = { uri: response.uri };
        console.log('response', JSON.stringify(response));
        this.setState({
          filePath: response,
          fileData: response.data,
          fileUri: response.uri
        });
      }
    });

  }

  renderFileUri() {
    if (this.state.fileUri) {
      return <Image
        source={{ uri: this.state.fileUri }}
        style={styles.ProfileImg}
      />
    } else {
      return <Image
        source={require('../src/Assets/Man.jpg')}
        style={styles.ProfileImg}
      />
    }
  }





  
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={{flex: 1, marginLeft: 20, marginTop: 45}}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <View>





            <Text style={styles.WelcomeText}>Welcome!</Text>
              <View
                style={{
                  marginTop: 7,
                  flexDirection: 'row',
                  padding: 10,
                  backgroundColor: '#f7f7a1',
                  opacity: 0.8,
                }}>
                <TouchableOpacity>
                  <View>
                    <Text>SIGN IN </Text>
                  </View>
                </TouchableOpacity>

                <TouchableOpacity
                onPress={this.launchCamera}>
                  <View style={{marginLeft: 10}}>
                    <Text>| JOIN</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
            <View>
              <TouchableOpacity onPress={this.launchImageLibrary}>
               {this.renderFileUri()}
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.BigGreyLine}></View>

          {/* This Whole Section Comprises of a single entity Track Order */}
          <View style={{flex: 1}}>
            <View style={styles.LinkParent}>
              <View style={{flexDirection: 'row'}}>
                <Image source={require('../src/Assets/TrackOrder.png')} />
                <Text style={styles.LinkContent}>Track Order</Text>
              </View>

              <View>
                <Image
                  style={styles.ChevronImg}
                  source={require('../src/Assets/Chevron.png')}
                />
              </View>
            </View>

            <View style={styles.GreyLine} />

            <View style={styles.LinkParent}>
              <View style={{flexDirection: 'row'}}>
                <Image source={require('../src/Assets/SizeChart.png')} />
                <Text style={styles.LinkContent}>Size Chart</Text>
              </View>

              <View>
                <Image
                  style={styles.ChevronImg}
                  source={require('../src/Assets/Chevron.png')}
                />
              </View>
            </View>

            <View style={styles.GreyLine} />

            <View style={styles.LinkParent}>
              <View style={{flexDirection: 'row'}}>
                <Image source={require('../src/Assets/NotificationT.png')} />
                <Text style={styles.LinkContent}>Notifications</Text>
              </View>

              <View>
                <Image
                  style={styles.ChevronImg}
                  source={require('../src/Assets/Chevron.png')}
                />
              </View>
            </View>

            <View style={styles.GreyLine} />

            <View style={styles.LinkParent}>
              <View style={{flexDirection: 'row'}}>
                <Image source={require('../src/Assets/StoreLocator.png')} />
                <Text style={styles.LinkContent}>Store Locator</Text>
              </View>

              <View>
                <Image
                  style={styles.ChevronImg}
                  source={require('../src/Assets/Chevron.png')}
                />
              </View>
            </View>

            <View style={styles.BigGreyLineTwo} />

            <View style={styles.LinkParent}>
              <View style={{flexDirection: 'row'}}>
                <Image source={require('../src/Assets/Globe.png')} />
                <Text style={styles.LinkContent}>Country</Text>
              </View>

              <View style={{flexDirection: 'row'}}>
                <Image
                  style={{height: 25, width: 40, marginRight: 20}}
                  source={require('../src/Assets/AedFlag.png')}
                />
                <Text style={{marginRight: 20, fontSize: 18}}>AED</Text>
                <Image
                  style={styles.ChevronImg}
                  source={require('../src/Assets/Chevron.png')}
                />
              </View>
            </View>

            <View style={styles.GreyLine} />

            <View style={styles.LinkParent}>
              <View style={{flexDirection: 'row'}}>
                <Image source={require('../src/Assets/Language.png')} />
                <Text style={styles.LinkContent}>Language</Text>
              </View>

              <View style={{flexDirection: 'row'}}>
                <Text style={{marginRight: 20, fontSize: 18}}>ENG</Text>
                <Image
                  style={styles.ChevronImg}
                  source={require('../src/Assets/Chevron.png')}
                />
              </View>
            </View>

            <View style={styles.GreyLine} />

            <View style={styles.LinkParent}>
              <View style={{flexDirection: 'row'}}>
                <Image source={require('../src/Assets/AboutUs.png')} />
                <Text style={styles.LinkContent}>About Us</Text>
              </View>

              <View>
                <Image
                  style={styles.ChevronImg}
                  source={require('../src/Assets/Chevron.png')}
                />
              </View>
            </View>

            <View style={styles.GreyLine} />

            <View style={styles.LinkParent}>
              <View style={{flexDirection: 'row'}}>
                <Image source={require('../src/Assets/FAQ.png')} />
                <Text style={styles.LinkContent}>FAQ</Text>
              </View>

              <View>
                <Image
                  style={styles.ChevronImg}
                  source={require('../src/Assets/Chevron.png')}
                />
              </View>
            </View>

            <View style={styles.GreyLine} />

            <View style={styles.LinkParent}>
              <View style={{flexDirection: 'row'}}>
                <Image source={require('../src/Assets/Shipping.png')} />
                <Text style={styles.LinkContent}>Shipping & Returns</Text>
              </View>

              <View>
                <Image
                  style={styles.ChevronImg}
                  source={require('../src/Assets/Chevron.png')}
                />
              </View>
            </View>

            <View style={styles.GreyLine} />
          </View>

          {/* This Whole Section Comprises of a single entity Track Order */}

          <Modal isVisible={this.state.isModalVisible}>
            <SafeAreaView
              style={{
                flex: 1,
                backgroundColor: 'white',
                marginTop: 50,
                backgroundColor: 'white',
              }}>
              <TouchableOpacity
                onPress={() => {
                  this.setState({
                    isModalVisible: false,
                  });
                }}>
                <Text style={styles.saveCommentModal}>Close</Text>
              </TouchableOpacity>

              <View style={{flexDirection: 'row'}}>
                <Text>Profilea</Text>
                <TouchableOpacity>
                  <Image
                    source={require('../src/Assets/Profilea.jpg')}
                    style={styles.ModalImageStyle}
                  />
                </TouchableOpacity>
              </View>

              <View style={{flexDirection: 'row'}}>
                <Text>Profileb</Text>
                <TouchableOpacity
                  onPress={() => {
                    this.setState({
                      img: require('../src/Assets/Profileb.jpg'),
                    });
                  }}>
                  <Image
                    source={require('../src/Assets/Profileb.jpg')}
                    style={styles.ModalImageStyle}
                  />
                </TouchableOpacity>
              </View>

              <View style={{flexDirection: 'row'}}>
                <Text>Profilec</Text>
                <Image
                  source={require('../src/Assets/Profilec.jpg')}
                  style={styles.ModalImageStyle}
                />
              </View>
            </SafeAreaView>
          </Modal>
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
  ChevronImg: {
    marginRight: 20,
    height: 20,
    width: 20,
  },
  ProfileImg: {
    height: 100,
    width: 100,
    marginRight: 20,
    marginBottom: 20,
    borderRadius: 500 / 2,
  },
  LinkContent: {
    marginLeft: 20,
    fontSize: 17,
  },
  GreyLine: {
    borderBottomColor: 'grey',
    borderBottomWidth: 0.5,
    marginTop: 10,
    marginLeft: -20,
  },
  LinkParent: {
    flexDirection: 'row',
    marginTop: 20,
    justifyContent: 'space-between',
  },
  BigGreyLine: {
    backgroundColor: 'grey',
    height: 15,
    marginLeft: -20,
    opacity: 0.2,
  },
  BigGreyLineTwo: {
    backgroundColor: 'grey',
    height: 15,
    marginLeft: -20,
    opacity: 0.2,
    marginTop: 30,
  },
  ModalImageStyle: {
    height: 200,
    width: 150,
    marginLeft: 40,
    marginTop: 20,
  },
});
export default Home;

{
  /* <View style={{borderRadius:50,borderWidth:2,alignSelf:"flex-end"}}>
<Image
source={require('../src/Assets/Profile2.png')}
/>
</View> */
}
