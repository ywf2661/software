import React from 'react';
import { Actions } from 'react-native-router-flux';
import { Text, View, TouchableOpacity, WebView, Linking } from 'react-native';

import { Card, CardSection } from '../common';

// import Card from '../common/card';
// import CardSection from '../common/card_section';


const AlbumDetail = ({ album }) => {
  const { NUM, TITLE, URL, CONTENT, WRITER, TYPE, TIMEDATE } = album;
  const {  
    headerTextStyle, dateTextStyle,
    } = styles;


    return ( 
        
      <Card> 
      <TouchableOpacity onPress={() => Linking.openURL(URL)}>
      <CardSection> 
              <View>
                <Text style={headerTextStyle}>{TITLE}</Text>                  
                <Text style={headerTextStyle}>{TIMEDATE}</Text> 
              </View> 
      </CardSection>
    
      </TouchableOpacity>
</Card>
        
  );

};

const styles = {
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  headerTextStyle: {
    fontSize: 18
  },
  dateTextStyle: {
    fontSize: 18
  },
  thumbnailStyle: {
    height: 50,
    width: 50
  },
  thumbnailContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10
  },
  imageStyle: {
    height: 300,
    flex: 1,
    width: null
  }
};

export default AlbumDetail;
