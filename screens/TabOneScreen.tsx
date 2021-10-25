import * as React from 'react';
import EditScreenInfo from '../components/EditScreenInfo';
import { StyleSheet, Text, View, Image } from 'react-native';
import { RootTabScreenProps } from '../types';

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <Image source={{uri: "https://pyxis.nymag.com/v1/imgs/fad/ce7/1176d95b8f4634e826f5534daa2273fc40-euphoria-sea-blob-lede.rsquare.w700.jpg"}} style={styles.image} />
      <View style={styles.badgeContainer}>
        <Text style={styles.badgeText}>4</Text>
      </View>
      <View style={styles.rightContainer}>
        <View style={styles.row}>
          <Text style={styles.name}>Hunter</Text>
          <Text style={styles.text}>11:11</Text>
        </View>
        <Text numberOfLines={1} style={styles.text}>Hello sweetie!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!</Text>

      </View> 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 20
  },
  image: {
    height:60,
    width: 60,
    borderRadius: 50,
    marginRight: 15
  },
  badgeContainer:{
    backgroundColor: '#3872E9',
    height: 25,
    width: 25,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 13 ,
    position: 'absolute',
    left: 60,
    top: 20
  },
  badgeText:{
    color: 'white',
    fontSize: 14
  },
  rightContainer:{
    flex: 1,
    justifyContent: 'center'
  },
  text: {
    color: "gray",
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  name: {
    fontWeight: 'bold',
    fontSize: 18
  },
});
