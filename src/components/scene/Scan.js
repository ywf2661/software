import React, { Component } from 'react';
import {
  AppRegistry,
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  Alert,
  View
} from 'react-native';
import { RNCamera } from 'react-native-camera';
import { Actions } from 'react-native-router-flux';

export default class Scan extends Component {

  state = {
    data : '',
  };

  onBarCodeRead = ({ data }) =>{
    this.setState({ data });
    if( this.state.data === '컴퓨터공학실무 오전' ){
      Alert.alert(
        'QR 스캔 완료',
        '[컴퓨터공학실무 오전] 출석확인 되었습니다.',
        [
          {text: '네', onPress: () => Actions.Record()},
        ]
      )
    } else {
      Alert.alert('Wrong QR code');
    }
    
  }

  render() {
    return (
      <View style={styles.container}>
        <RNCamera
            ref={ref => {
              this.camera = ref;
            }}
            style = {styles.preview}
            type={RNCamera.Constants.Type.back}
            flashMode={RNCamera.Constants.FlashMode.on}
            onBarCodeRead = {this.onBarCodeRead}
            permissionDialogTitle={'Permission to use camera'}
            permissionDialogMessage={'We need your permission to use your camera phone'}
        />
        <View style={{flex: 0, flexDirection: 'row', justifyContent: 'center',}}>
        
        </View>
      </View>
    );
  }

  takePicture = async function() {
    if (this.camera) {
      const options = { quality: 0.5, base64: true };
      const data = await this.camera.takePictureAsync(options)
      console.log(data.uri);
    }
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black'
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 15,
    paddingHorizontal: 20,
    alignSelf: 'center',
    margin: 20
  }
});