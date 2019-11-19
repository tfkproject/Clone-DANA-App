import React, {useState} from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import Modal, {ModalContent} from 'react-native-modals';
import OTPInputView from '@twotalltotems/react-native-otp-input';

const AuthScreen = (props) => {

    const [numberInput, setNumberInput] = useState('')
    const [bottomModal, setBottomModal] = useState(false)
    const handleLogin = (input) => {
        if (input.startsWith('0')){
            setNumberInput(input.substring(1))
        } else {
            setNumberInput(input);
       }
    }

    return (
      <>
        <Modal.BottomModal
          visible={bottomModal}
          onTouchOutside={() => setBottomModal(false)}>
          <ModalContent
            style={{
              height: 300,
            }}>
            <View style={{alignItems:'center'}}>
              <Text style={{paddingTop:25, fontWeight:'bold', fontSize:25}}>Enter OTP</Text>
              <Text style={{fontSize:18}}>The OTP has been sent to your number</Text>
              <OTPInputView
                style={{width: '80%', height: 150}}
                pinCount={4}
                autoFocusOnLoad
                codeInputFieldStyle={styles.underlineStyleBase}
                codeInputHighlightStyle={styles.underlineStyleHighLighted}
                onCodeFilled={code => {
                  console.log(`Code is ${code}, you are good to go!`);
                }}
              />
            </View>
              <Text style={{paddingTop:20, fontWeight:'bold', fontSize:19, textAlign:'right', paddingRight:25, color:'grey' }}>RESEND(48S)</Text>
          </ModalContent>
        </Modal.BottomModal>

        <View style={styles.container}>
          <View style={{flexDirection: 'row'}}>
            <View style={{flex: 1, paddingLeft: 60}}>
              <Image
                source={require('../assets/danain-text.png')}
                style={styles.image}
              />
            </View>
            <View style={{width: 60}}>
              <TouchableOpacity
                onPress={() => {
                  setBottomModal(true);
                }}>
                <Text
                  style={{
                    fontSize: 18,
                    color: '#84c8f9',
                    paddingTop: 20,
                    textAlign: 'left',
                  }}>
                  Next
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.containerText}>
            <Text style={styles.text}>
              Enter your phone nmber to sign in or create a new account.
            </Text>
          </View>

          <View style={styles.containerInd}>
            <Text style={styles.textInd}>+62</Text>
            <TextInput
              style={styles.textInput}
              maxLength={16}
              placeholder="Phone Number"
              placeholderTextColor="#84c8f9"
              underlineColorAndroid="transparent"
              keyboardType={'numeric'}
              autoFocus={true}
              value={numberInput}
              onChangeText={input => handleLogin(input)}
            />
          </View>

          <View style={styles.containerBorder}></View>

          <View style={styles.containerTitle}>
            <Text style={styles.textTitle}>DANAIN also connected with</Text>
          </View>

          <View style={styles.containerIcon}>
            <Image
              source={require('../assets/bl-icon.png')}
              style={styles.iconCon}
            />
            <Image
              source={require('../assets/laz-icon.png')}
              style={styles.iconCon}
            />
            <Image
              source={require('../assets/tix-icon.png')}
              style={styles.iconCon}
            />
            <Image
              source={require('../assets/many-icon.png')}
              style={styles.iconCon}
            />
          </View>
        </View>
      </>
    );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#118eea',
  },
  image: {
    width: 130,
    height: 20,
    marginTop: 20,
    alignSelf: 'center',
  },
  containerText: {
    marginHorizontal: 20,
    alignSelf: 'center',
    marginTop: 45,
  },
  containerTitle: {
    paddingTop: 40,
    alignItems: 'center',
  },
  containerIcon: {
    paddingTop: 5,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  containerInd: {
    marginTop: 50,
    justifyContent: 'center',
    flexDirection: 'row',
  },
  containerBorder: {
    alignSelf: 'center',
    width: 40,
    height: 2,
    backgroundColor: '#84c8f9',
  },
  text: {
    color: '#FFF',
  },
  textTitle: {
    color: '#FFF',
    fontSize: 15,
  },
  textInd: {
    fontSize: 25,
    color: '#FFF',
    opacity: 0.5,
    paddingTop: 10,
  },
  textInput: {
    fontSize: 25,
    paddingLeft: 15,
    color: '#FFF',
    fontWeight: '100',
  },
  iconCon: {
    width: 40,
    height: 40,
  },
  borderStyleHighLighted: {
    borderColor: '#FFF',
  },
  underlineStyleBase: {
    width: 50,
    height: 50,
    backgroundColor: '#F7F7F7',
    borderColor: '#FFF',
    borderRadius: 8,
  },
  underlineStyleHighLighted: {
    borderColor: '#FFF',
  },
});

export default AuthScreen;