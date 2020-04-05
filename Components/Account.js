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
import {TextInput} from 'react-native-gesture-handler';
class Account extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      secure: true,
      visible: 'Show',
    };
  }

  RenderLogin = () => {
    return (
      <View style={{flex: 1}}>
        <TextInput
          style={{
            height: 50,
            width: '90%',
            borderColor: 'grey',
            borderWidth: 1,
            marginLeft: 20,
            marginRight: 20,
            marginTop: 40,
            color: 'grey',
            padding: 10,
          }}
          placeholder="Your Email Address"
        />

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: '50%',
            borderColor: 'grey',
            borderWidth: 1,
            marginLeft: 20,
            marginRight: 20,
            marginTop: 40,
            color: 'grey',
            width: '90%',
          }}>
          <TextInput
            placeholder="Password"
            style={{height: 50, width: '90%', padding: 10}}
            secureTextEntry={this.state.secure}></TextInput>
          <TouchableOpacity
            onPress={() => {
              this.setState({
                secure: !this.state.secure,
                visible: 'Hidden',
              });
            }}>
            <Text style={{marginTop: 15, marginRight: 20}}>
              {this.state.visible}
            </Text>
          </TouchableOpacity>
        </View>

        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 20,
          }}>
          <TouchableOpacity>
            <Text>Forgot Password?</Text>
          </TouchableOpacity>
        </View>

        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 40,
            backgroundColor: 'black',
            color: 'white',
            height: 50,
            marginLeft: 20,
            marginRight: 20,
          }}>
          <TouchableOpacity>
            <Text style={{color: 'white', fontSize: 17}}>Sign In</Text>
          </TouchableOpacity>
        </View>

        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 50,
          }}>
          <Text style={{color: 'grey'}}>or Sign In via</Text>
        </View>

        <View style={{flexDirection: 'row', marginTop: 10}}>
          <View
            style={{
              flex: 1,
              alignItems: 'center',
              borderColor: 'black',
              borderWidth: 2,
              marginLeft: 10,
              padding: 10,
              flexDirection: 'row',
            }}>
            <Image
              source={require('../src/Assets/Facebook.png')}
              style={{marginLeft: 10}}
            />
            <Text style={{marginLeft: 15}}>Facebook</Text>
          </View>

          <View
            style={{
              flex: 1,
              alignItems: 'center',
              borderColor: 'black',
              borderWidth: 2,
              marginRight: 10,
              marginLeft: 10,
              padding: 10,
              flexDirection: 'row',
            }}>
            <Image
              source={require('../src/Assets/Google.png')}
              style={{marginLeft: 10}}
            />

            <Text style={{marginLeft: 15}}>Google</Text>
          </View>
        </View>

        <View style={{flex: 1, flexDirection: 'column-reverse'}}>
          <View
            style={{
              justifyContent: 'center',
              flexDirection: 'row',
              backgroundColor: 'silver',
              padding: 20,
              borderTopWidth: 1,
              borderTopColor: 'grey',
              borderBottomWidth: 1,
              borderBottomColor: 'grey',
            }}>
            <Text style={{marginLeft: 30}}>Don't Have Account</Text>
            <TouchableOpacity>
              <Text style={{marginLeft: 30}}>Join</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };

  RenderJoin = () => {
    return <Text>Hello I am Join</Text>;
  };

  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 20,
          }}>
          <TouchableOpacity onPress={this.RenderLogin}>
            <Text style={{marginLeft: 35, fontSize: 25}}>Sign In</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={{marginRight: 35, fontSize: 25}}>Join</Text>
          </TouchableOpacity>
        </View>
        <this.RenderLogin />
      </SafeAreaView>
    );
  }
}

export default Account;
