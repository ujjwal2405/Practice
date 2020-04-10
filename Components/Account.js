import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Image,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from 'react-native';
import Home from '../Components/Home'
import {Dropdown} from 'react-native-material-dropdown';
import {TextInput, TouchableHighlight} from 'react-native-gesture-handler';
import RadioForm, {
  RadioButton,
  RadioButtonInput,
  RadioButtonLabel,
} from 'react-native-simple-radio-button';
import { ThemeProvider } from '@react-navigation/native';
class Account extends React.Component {
  constructor(props) {
    super(props);
    (this.state = {
      secure: true,
      visible: 'Show',
      toggle: true,
      uname:'',
      psswd:''
    }),
      (numbers = [
        {
          value: 1,
        },
        {
          value: 2,
        },
        {
          value: 3,
        },
        {
          value: 50,
        },
      ]),
      (radio_props = [
        {label: 'Male', value: 0},
        {label: 'Female', value: 1},
      ]);
  }

  RenderLogin = () => {
    return (
      <View style={{flex: 1}}>
        <TextInput 
        onChangeText={uname=>this.setState({uname})}
        style={styles.EmailStyle} placeholder="Your Email Address" />

        <View style={styles.PasswordStyle}>
          <TextInput
          onChangeText={psswd=>this.setState({psswd})}
            placeholder="Password"
            style={{height: 50, padding: 10, width: '80%'}}
            secureTextEntry={this.state.secure}></TextInput>
          <TouchableOpacity
            onPress={() => {
              this.setState({
                secure: !this.state.secure,
                visible: 'Hidden',
              });
            }}>
            <Text style={{marginRight: 10, marginTop: 15}}>
              {this.state.secure ? 'Show' : 'Hidden'}
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.ForgotPassword}>
          <TouchableOpacity>
            <Text>Forgot Password?</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.SignIn}>
          <TouchableOpacity
          onPress={()=>this.onSignIn()}
          >
            <Text style={{color: 'white', fontSize: 17}}>Sign In</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.SignInVia}>
          <Text style={{color: 'grey'}}>or Sign In via</Text>
        </View>

        <View style={{flexDirection: 'row', marginTop: 10}}>
          <View style={styles.Facebook}>
            <Image
              source={require('../src/Assets/Facebook.png')}
              style={{marginLeft: 10}}
            />
            <Text style={{marginLeft: 15}}>Facebook</Text>
          </View>

          <View style={styles.Google}>
            <Image
              source={require('../src/Assets/Google.png')}
              style={{marginLeft: 10}}
            />

            <Text style={{marginLeft: 15}}>Google</Text>
          </View>
        </View>

        <View style={styles.DhaView}>
          <View style={styles.DontHaveAccount}>
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
    return (
      <View style={{flex: 1}}>
        <View>
          <TextInput style={styles.FirstName} placeholder="First Name" />
          <TextInput style={styles.FirstName} placeholder="Last Name" />
          <TextInput style={styles.FirstName} placeholder="Your Email" />
        </View>

        <View style={styles.PasswordStyle}>
          <TextInput
            placeholder="Password"
            style={{height: 50, padding: 10, width: '80%'}}
            secureTextEntry={this.state.secure}></TextInput>
          <TouchableOpacity
            onPress={() => {
              this.setState({
                secure: !this.state.secure,
                visible: 'Hidden',
              });
            }}>
            <Text style={{marginRight: 10, marginTop: 15}}>
              {this.state.secure ? 'Show' : 'Hidden'}
            </Text>
          </TouchableOpacity>
        </View>

        <View
          style={{
            flexDirection: 'row',
            marginTop: 20,
            borderColor: 'grey',
            borderWidth: 1,
            marginLeft: 20,
            marginRight: 20,
            height: 70,
          }}>
          <View style={{flexDirection: 'row', marginTop: 20}}>
            <Image
              style={{
                height: 25,
                width: 25,
                borderRadius: 300,
                justifyContent: 'center',
                marginLeft: 20,
              }}
              source={require('../src/Assets/AedFlag.png')}
            />
            <Text style={{marginLeft: 10, fontSize: 15}}>+971</Text>
            <Text style={{marginLeft: 15, color: 'grey'}}>|</Text>
          </View>

          <View
            style={{
              width: 40,
              color: 'black',
              justifyContent: 'center',
              marginLeft: 30,
              marginBottom: 25,
              borderLeftColor: 'grey',
            }}>
            <Dropdown
              data={numbers}
              value={50}
              itemColor="black"
              textColor="black"
            />
          </View>
          <View style={{justifyContent: 'center', marginLeft: 35}}>
            <TextInput
              placeholder="123 4567"
              style={{color: 'black', width: 90}}
            />
          </View>
        </View>
        <View>
          <RadioForm
            radio_props={radio_props}
            initial={0}
            formHorizontal={true}
            labelHorizontal={true}
            buttonColor={'#c2a90f'}
            animation={true}
            onPress={(value) => {
              this.setState({value: value});
            }}
            selectedButtonColor={'#c2a90f'}
            style={{marginLeft: 20, marginTop: 20}}
          />
        </View>

        <View style={styles.SignIn}>
          <TouchableOpacity>
            <Text style={{color: 'white', fontSize: 17}}>Join Now</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  onSignIn=()=>{
    fetch('https://admin-stage-temp.priskoll.occdev.axfood.se/axfood/axfood-security/login', {
      method: 'POST',
      body: JSON.stringify({
          username:this.state.uname,
          password:this.state.psswd
      }),
    })
    .then(response=>{
      if(response.status!=200){
        return(
          Alert.alert(
            'Something Went Wrong',
            'Wrong username or password',
            [
              
              {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
              {text: 'OK', onPress: () => console.log('OK Pressed')},
            ],
            { cancelable: false }
          )
        )
      }
      else{
        this.props.navigation.navigate('Home')
      return response.json();
    }
    })
    .then(responseJson=>{
      
     })
  }  

  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <View style={styles.SignInView}>
          <TouchableOpacity
            onPress={() => {
              this.setState({
                toggle: !this.state.toggle,
              });
            }}>
            <Text style={{marginLeft: 35, fontSize: 25}}>Sign In</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              this.setState({
                toggle: !this.state.toggle,
              });
            }}>
            <Text style={{marginRight: 35, fontSize: 25}}>Join</Text>
          </TouchableOpacity>
        </View>
        {this.state.toggle ? this.RenderLogin() : this.RenderJoin() }
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  EmailStyle: {
    height: 50,
    width: '90%',
    borderColor: 'grey',
    borderWidth: 1,
    marginLeft: 20,
    marginRight: 20,
    marginTop: 40,
    color: 'grey',
    padding: 10,
  },
  PasswordStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderColor: 'grey',
    borderWidth: 1,
    marginLeft: 20,
    marginRight: 20,
    marginTop: 40,
    color: 'grey',
  },
  ForgotPassword: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  SignIn: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    backgroundColor: 'black',
    color: 'white',
    height: 50,
    marginLeft: 20,
    marginRight: 20,
  },
  SignInVia: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
  },
  Facebook: {
    flex: 1,
    alignItems: 'center',
    borderColor: 'black',
    borderWidth: 2,
    marginLeft: 10,
    padding: 10,
    flexDirection: 'row',
  },
  Google: {
    flex: 1,
    alignItems: 'center',
    borderColor: 'black',
    borderWidth: 2,
    marginRight: 10,
    marginLeft: 10,
    padding: 10,
    flexDirection: 'row',
  },
  DontHaveAccount: {
    justifyContent: 'center',
    flexDirection: 'row',
    backgroundColor: 'silver',
    padding: 20,
    borderTopWidth: 1,
    borderTopColor: 'grey',
    borderBottomWidth: 1,
    borderBottomColor: 'grey',
  },
  DhaView: {
    flex: 1,
    flexDirection: 'column-reverse',
  },
  SignInView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  FirstName: {
    height: 50,
    width: '90%',
    borderColor: 'grey',
    borderWidth: 1,
    marginLeft: 20,
    marginRight: 20,
    marginTop: 20,
    color: 'black',
    padding: 10,
  },
});

export default Account;
